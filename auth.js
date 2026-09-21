(() => {
  const config = window.PROBIOINDEX_CONFIG || {};
  const configured = Boolean(config.supabaseUrl && config.supabasePublishableKey && window.supabase?.createClient);
  const client = configured ? window.supabase.createClient(config.supabaseUrl, config.supabasePublishableKey) : null;
  let lang = "es";
  let currentSession = null;

  const copy = () => lang === "en" ? {
    access:"Account", kicker:"Professional access", title:"Create your ProbioIndex account",
    text:"Access the strain–indication database with a verified professional profile.",
    name:"Full name", occupation:"Occupation", email:"Professional email", consent:"I accept the privacy notice and confirm I will not enter patient data.",
    submit:"Send access link", sending:"Sending…", sent:"Check your email", sentText:"We sent you a secure link to enter ProbioIndex. You may close this window.",
    missing:"Account activation is pending configuration by the site administrator.", close:"Close", logout:"Sign out", account:"Professional account",
    privacy:"Your searches are not shared with sponsors.", independence:"Editorial content remains independent of account registration.", secure:"Passwordless access with email verification.", required:"Complete all fields to continue.", error:"We could not send the access link. Please try again.", preview:"Enter preview", previewNote:"Preview mode: account verification is not active on this temporary version."
  } : {
    access:"Cuenta", kicker:"Acceso profesional", title:"Crea tu cuenta en ProbioIndex",
    text:"Accede a la base cepa–indicación mediante un perfil profesional verificado.",
    name:"Nombre completo", occupation:"Ocupación", email:"Correo electrónico profesional", consent:"Acepto el aviso de privacidad y confirmo que no ingresaré datos de pacientes.",
    submit:"Enviar enlace de acceso", sending:"Enviando…", sent:"Revisa tu correo", sentText:"Te enviamos un enlace seguro para entrar a ProbioIndex. Puedes cerrar esta ventana.",
    missing:"La activación de cuentas está pendiente de configuración por el administrador del sitio.", close:"Cerrar", logout:"Cerrar sesión", account:"Cuenta profesional",
    privacy:"Tus búsquedas no se comparten con patrocinadores.", independence:"El contenido editorial permanece independiente del registro.", secure:"Acceso sin contraseña con verificación de correo.", required:"Completa todos los campos para continuar.", error:"No pudimos enviar el enlace de acceso. Inténtalo nuevamente.", preview:"Entrar a vista previa", previewNote:"Modo de vista previa: la verificación de cuenta todavía no está activa en esta versión temporal."
  };

  const occupations = () => lang === "en"
    ? ["Physician","Dietitian / Nutritionist","Nursing","Pharmacy","Research","Probiotic industry","Student","Other"]
    : ["Médico/a","Nutriólogo/a","Enfermería","Farmacia","Investigación","Industria de probióticos","Estudiante","Otro"];

  function unlock(session) {
    currentSession = session;
    document.documentElement.classList.remove("auth-pending");
    document.documentElement.classList.add("auth-ready");
    updateButton();
    window.dispatchEvent(new CustomEvent("probioindex:authchange", {detail:{session:currentSession}}));
  }

  function lock() {
    currentSession = null;
    document.documentElement.classList.add("auth-pending");
    document.documentElement.classList.remove("auth-ready");
    updateButton();
    window.dispatchEvent(new CustomEvent("probioindex:authchange", {detail:{session:null}}));
  }

  function updateButton() {
    const button = document.querySelector("#accessButton");
    if (!button) return;
    const name = currentSession?.user?.user_metadata?.full_name;
    button.textContent = currentSession ? (name?.split(" ")[0] || copy().access) : copy().access;
  }

  async function saveProfile(session) {
    if (!client || !session?.user) return;
    const user = session.user;
    const metadata = user.user_metadata || {};
    if (!metadata.full_name || !metadata.occupation) return;
    await client.from("profiles").upsert({
      id:user.id,
      full_name:metadata.full_name,
      occupation:metadata.occupation,
      email:user.email,
      updated_at:new Date().toISOString()
    }, {onConflict:"id"});
  }

  function showAccount() {
    const dialog = document.querySelector("#accessDialog");
    const content = document.querySelector("#accessContent");
    const t = copy();
    if (currentSession) {
      const user = currentSession.user;
      content.innerHTML = `<section class="account-panel"><div class="access-kicker">${t.account}</div><h2>${user.user_metadata?.full_name || user.email}</h2><p>${user.user_metadata?.occupation || ""}</p><p class="account-email">${user.email}</p><button class="primary-action" id="logoutButton">${t.logout}</button><button class="account-close" data-close>${t.close}</button></section>`;
      content.querySelector("[data-close]").addEventListener("click", () => dialog.close());
      content.querySelector("#logoutButton").addEventListener("click", async () => { await client?.auth.signOut(); dialog.close(); lock(); showAccount(); });
      dialog.showModal();
      return;
    }
    const options = occupations().map(value => `<option value="${value}">${value}</option>`).join("");
    content.innerHTML = `<div class="access-shell">
      <aside class="access-aside"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><div class="access-kicker">${t.kicker}</div><h2>${t.title}</h2><p>${t.text}</p><ul class="access-assurances"><li>${t.privacy}</li><li>${t.independence}</li><li>${t.secure}</li></ul></aside>
      <section class="access-main auth-main"><div class="access-toolbar"><button data-close aria-label="${t.close}">×</button></div>
        <form id="accountForm"><label>${t.name}<input name="fullName" autocomplete="name" minlength="2" required></label><label>${t.occupation}<select name="occupation" required><option value=""></option>${options}</select></label><label>${t.email}<input name="email" type="email" autocomplete="email" required></label><label class="consent-row"><input name="consent" type="checkbox" required><span>${t.consent}</span></label><p class="form-message" role="status"></p><button class="primary-action account-submit" type="submit" ${configured ? "" : "disabled"}>${t.submit}</button><button class="preview-button" id="previewButton" type="button">${t.preview}</button><small class="preview-note">${configured ? (lang === "en" ? "Preview mode lets you review the interface without creating an account." : "La vista previa permite revisar la interfaz sin crear una cuenta.") : t.previewNote}</small></form>
      </section></div>`;
    const close = content.querySelector("[data-close]");
    close.hidden = false;
    close.addEventListener("click", () => dialog.close());
    content.querySelector("#accountForm").addEventListener("submit", async event => {
      event.preventDefault();
      const form = event.currentTarget;
      const message = form.querySelector(".form-message");
      if (!form.reportValidity()) { message.textContent=t.required; return; }
      const button=form.querySelector("button[type=submit]"); button.disabled=true; button.textContent=t.sending; message.textContent="";
      const fullName=form.fullName.value.trim(), occupation=form.occupation.value, email=form.email.value.trim();
      const {error}=await client.auth.signInWithOtp({email,options:{shouldCreateUser:true,emailRedirectTo:`${location.origin}${location.pathname}`,data:{full_name:fullName,occupation}}});
      if (error) { button.disabled=false; button.textContent=t.submit; message.textContent=error.message || t.error; return; }
      content.innerHTML=`<section class="access-success"><div class="access-success-mark">✓</div><div class="access-kicker">${t.sent}</div><h3>${t.sent}</h3><p>${t.sentText}</p></section>`;
    });
    content.querySelector("#previewButton")?.addEventListener("click", () => {
      sessionStorage.setItem("probioindex-preview", "1");
      unlock(null);
      dialog.close();
    });
    if (!dialog.open) dialog.showModal();
  }

  function setLanguage(next) { lang=next; updateButton(); if (document.querySelector("#accessDialog")?.open) { document.querySelector("#accessDialog").close(); showAccount(); } }
  window.ProbioAuth = {showAccount,setLanguage,client,getSession:()=>currentSession};

  window.addEventListener("DOMContentLoaded", async () => {
    document.querySelector("#accessButton")?.addEventListener("click", showAccount);
    if (!client) {
      if (sessionStorage.getItem("probioindex-preview") === "1") unlock(null);
      else { lock(); showAccount(); }
      return;
    }
    const {data:{session}} = await client.auth.getSession();
    if (session) { unlock(session); await saveProfile(session); }
    else { lock(); showAccount(); }
    client.auth.onAuthStateChange(async (_event, sessionValue) => {
      if (sessionValue) { unlock(sessionValue); await saveProfile(sessionValue); if (document.querySelector("#accessDialog")?.open) document.querySelector("#accessDialog").close(); }
      else lock();
    });
  });
})();
