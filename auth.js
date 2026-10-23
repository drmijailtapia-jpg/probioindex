(() => {
  const config = window.PROBIOINDEX_CONFIG || {};
  const configured = Boolean(config.supabaseUrl && config.supabasePublishableKey && window.supabase?.createClient);
  const client = configured ? window.supabase.createClient(config.supabaseUrl, config.supabasePublishableKey) : null;
  const isDemoMode = /^\/demo\/?$/.test(window.location.pathname);
  let lang = "es", currentSession = null, mode = "signin";
  const text = () => lang === "en" ? {
    access:"Account", kicker:"Professional access", title:"Access ProbioIndex", intro:"Use Google or your email and password.",
    name:"Full name", occupation:"Occupation", specialty:"Medical specialty", email:"Email", password:"Password", consent:"I accept the privacy notice and confirm I will not enter patient data.", updates:"I would like to receive information about congresses, updates and other relevant content.",
    google:"Continue with Google", signIn:"Sign in", create:"Create account", switchCreate:"Create account", switchSignIn:"Sign in", newUser:"New to ProbioIndex?", existingUser:"Already have an account?",
    working:"Please wait…", required:"Complete all required fields.", error:"We could not complete the request. Please try again.", close:"Close", logout:"Sign out", account:"Professional account",
    privacy:"Your searches are not shared with sponsors.", independent:"Editorial content remains independent of account registration.", secure:"Secure access with Google or password.",
    verifyTitle:"Check your email", verifyText:"Your account was created. Confirm your email if requested, then sign in with your password.", forgot:"Forgot your password?", reset:"We sent password recovery instructions to your email.",
    profile:"Complete your profile", profileText:"Before continuing, add the information needed for your professional profile.", save:"Save and continue"
  } : {
    access:"Cuenta", kicker:"Acceso profesional", title:"Accede a ProbioIndex", intro:"Ingresa con Google o con tu correo y contraseña.",
    name:"Nombre completo", occupation:"Ocupación", specialty:"Especialidad médica", email:"Correo electrónico", password:"Contraseña", consent:"Acepto el aviso de privacidad y confirmo que no ingresaré datos de pacientes.", updates:"Me interesa recibir información sobre congresos, actualizaciones y otros contenidos pertinentes.",
    google:"Continuar con Google", signIn:"Iniciar sesión", create:"Crear cuenta", switchCreate:"Crear cuenta", switchSignIn:"Iniciar sesión", newUser:"¿Aún no tienes una cuenta?", existingUser:"¿Ya tienes cuenta?",
    working:"Espera un momento…", required:"Completa todos los campos obligatorios.", error:"No pudimos completar la solicitud. Inténtalo nuevamente.", close:"Cerrar", logout:"Cerrar sesión", account:"Cuenta profesional",
    privacy:"Tus búsquedas no se comparten con patrocinadores.", independent:"El contenido editorial permanece independiente del registro.", secure:"Acceso seguro con Google o contraseña.",
    verifyTitle:"Revisa tu correo", verifyText:"Tu cuenta fue creada. Confirma tu correo si se te solicita y después inicia sesión con tu contraseña.", forgot:"¿Olvidaste tu contraseña?", reset:"Te enviamos las instrucciones para restablecer tu contraseña.",
    profile:"Completa tu perfil", profileText:"Antes de continuar, agrega la información necesaria para tu perfil profesional.", save:"Guardar y continuar"
  };
  const jobs = () => lang === "en" ? ["Physician","Dietitian / Nutritionist","Academic","Probiotic industry","Student","Other"] : ["Médico/a","Nutriólogo/a","Académico/a","Industria de probióticos","Estudiante","Otro"];
  const specialties = () => lang === "en" ? ["Internal medicine","Surgery","Obstetrics and gynecology","Gastroenterology","Pediatrics","Clinical nutrition","Psychiatry","Other specialty"] : ["Medicina interna","Cirugía","Ginecología y obstetricia","Gastroenterología","Pediatría","Nutrición clínica","Psiquiatría","Otra especialidad"];
  const redirectUrl = () => location.origin + location.pathname;
  const options = selected => jobs().map(v => '<option value="' + v + '"' + (selected === v ? ' selected' : '') + '>' + v + '</option>').join("");
  const specialtyOptions = selected => specialties().map(v => '<option value="' + v + '"' + (selected === v ? ' selected' : '') + '>' + v + '</option>').join("");
  const isPhysician = value => value === "Médico/a" || value === "Physician";
  function bindSpecialty(form, selected) {
    const field=form.querySelector("#specialtyField"), select=field?.querySelector("select");
    const sync=()=>{const needed=isPhysician(form.occupation.value);field.hidden=!needed;select.required=needed;if(!needed)select.value="";};
    if(select && selected)select.value=selected;
    form.occupation.addEventListener("change",sync);sync();
  }
  const profileComplete = session => Boolean(session?.user?.user_metadata?.full_name && session?.user?.user_metadata?.occupation);
  function setSession(session) {
    currentSession = session;
    const ready = isDemoMode || profileComplete(session);
    document.documentElement.classList.toggle("auth-pending", !ready);
    document.documentElement.classList.toggle("auth-ready", ready);
    const button = document.querySelector("#accessButton");
    if (button) button.textContent = session ? (session.user.user_metadata?.full_name?.split(" ")[0] || text().access) : text().access;
    window.dispatchEvent(new CustomEvent("probioindex:authchange",{detail:{session}}));
  }
  async function saveProfile(session) {
    const user=session?.user, meta=user?.user_metadata || {};
    if (!client || !user || !meta.full_name || !meta.occupation) return;
    await client.from("profiles").upsert({
      id:user.id,
      full_name:meta.full_name,
      occupation:meta.occupation,
      specialty:meta.specialty || null,
      receive_updates:Boolean(meta.receive_updates),
      receive_updates_at:meta.receive_updates_at || null,
      email:user.email,
      updated_at:new Date().toISOString()
    },{onConflict:"id"});
  }
  function profileView(user) {
    const t=text(), dialog=document.querySelector("#accessDialog"), content=document.querySelector("#accessContent"), meta=user.user_metadata || {};
    content.innerHTML='<div class="access-shell"><aside class="access-aside"><span class="brand-mark"><i></i><i></i><i></i></span><div class="access-kicker">' + t.kicker + '</div><h2>' + t.profile + '</h2><p>' + t.profileText + '</p></aside><section class="access-main auth-main"><div class="access-toolbar"><button data-close>×</button></div><form id="profileForm"><label>' + t.name + '<input name="fullName" minlength="2" value="' + (meta.full_name || "") + '" required></label><label>' + t.occupation + '<select name="occupation" required><option value=""></option>' + options(meta.occupation) + '</select></label><div id="specialtyField"><label>' + t.specialty + '<select name="specialty"><option value=""></option>' + specialtyOptions(meta.specialty) + '</select></label></div><label class="consent-row"><input name="consent" type="checkbox" required><span>' + t.consent + '</span></label><label class="consent-row"><input name="receiveUpdates" type="checkbox"' + (meta.receive_updates ? " checked" : "") + '><span>' + t.updates + '</span></label><p class="form-message"></p><button class="primary-action account-submit" type="submit">' + t.save + '</button></form></section></div>';
    bindSpecialty(content.querySelector("#profileForm"),meta.specialty);
    content.querySelector("[data-close]").onclick=()=>dialog.close();
    content.querySelector("#profileForm").onsubmit=async e=>{
      e.preventDefault(); const form=e.currentTarget, message=form.querySelector(".form-message");
      if(!form.reportValidity()){message.textContent=t.required;return;}
      const {data,error}=await client.auth.updateUser({data:{full_name:form.fullName.value.trim(),occupation:form.occupation.value,specialty:isPhysician(form.occupation.value)?form.specialty.value:null,receive_updates:form.receiveUpdates.checked,receive_updates_at:form.receiveUpdates.checked?(meta.receive_updates_at || new Date().toISOString()):null}});
      if(error){message.textContent=error.message || t.error;return;}
      const {data:sessionData}=await client.auth.getSession(), session=sessionData.session || {...currentSession,user:data.user};
      setSession(session);await saveProfile(session);dialog.close();
    };
    if(!dialog.open)dialog.showModal();
  }
  function resetView() {
    const t=text(), dialog=document.querySelector("#accessDialog"), content=document.querySelector("#accessContent");
    content.innerHTML='<div class="access-shell"><aside class="access-aside"><span class="brand-mark"><i></i><i></i><i></i></span><div class="access-kicker">' + t.kicker + '</div><h2>' + t.password + '</h2><p>' + t.intro + '</p></aside><section class="access-main auth-main"><form id="newPasswordForm"><label>' + t.password + '<input name="password" type="password" minlength="6" autocomplete="new-password" required></label><label>Confirmar contraseña<input name="confirmPassword" type="password" minlength="6" autocomplete="new-password" required></label><p class="form-message"></p><button class="primary-action account-submit" type="submit">' + t.save + '</button></form></section></div>';
    content.querySelector("#newPasswordForm").onsubmit=async e=>{
      e.preventDefault(); const form=e.currentTarget,message=form.querySelector(".form-message");
      if(!form.reportValidity()){message.textContent=t.required;return;}
      if(form.password.value!==form.confirmPassword.value){message.textContent=lang==="en"?"Passwords do not match.":"Las contraseñas no coinciden.";return;}
      const {error}=await client.auth.updateUser({password:form.password.value});
      if(error){message.textContent=error.message || t.error;return;}
      dialog.close();
    };
    if(!dialog.open)dialog.showModal();
  }
  function showAccount() {
    const t=text(), dialog=document.querySelector("#accessDialog"), content=document.querySelector("#accessContent");
    if(currentSession) {
      const user=currentSession.user, meta=user.user_metadata || {};
      if(!meta.full_name || !meta.occupation){profileView(user);return;}
      content.innerHTML='<section class="account-panel"><div class="access-kicker">' + t.account + '</div><h2>' + meta.full_name + '</h2><p>' + meta.occupation + '</p><p class="account-email">' + user.email + '</p><button class="primary-action" id="logoutButton">' + t.logout + '</button><button class="account-close" data-close>' + t.close + '</button></section>';
      content.querySelector("[data-close]").onclick=()=>dialog.close();
      content.querySelector("#logoutButton").onclick=async()=>{await client.auth.signOut();dialog.close();setSession(null);showAccount();};
      dialog.showModal();return;
    }
    const creating=mode==="signup";
    const profileFields=creating ? '<label>' + t.name + '<input name="fullName" minlength="2" required></label><label>' + t.occupation + '<select name="occupation" required><option value=""></option>' + options() + '</select></label><div id="specialtyField"><label>' + t.specialty + '<select name="specialty"><option value=""></option>' + specialtyOptions() + '</select></label></div>' : "";
    const consent=creating ? '<label class="consent-row"><input name="consent" type="checkbox" required><span>' + t.consent + '</span></label><label class="consent-row"><input name="receiveUpdates" type="checkbox"><span>' + t.updates + '</span></label>' : "";
    const action=creating?t.create:t.signIn;
    content.innerHTML='<div class="access-shell"><aside class="access-aside"><span class="brand-mark"><i></i><i></i><i></i></span><div class="access-kicker">' + t.kicker + '</div><h2>' + t.title + '</h2><p>' + t.intro + '</p><ul class="access-assurances"><li>' + t.privacy + '</li><li>' + t.independent + '</li><li>' + t.secure + '</li></ul></aside><section class="access-main auth-main"><div class="access-toolbar"><button data-close>×</button></div><button class="google-button" id="googleLogin" type="button" ' + (configured?"":"disabled") + '><span>G</span>' + t.google + '</button><div class="auth-divider"><span>' + (lang==="en"?"or":"o") + '</span></div><form id="accountForm">' + profileFields + '<label>' + t.email + '<input name="email" type="email" autocomplete="email" required></label><label>' + t.password + '<input name="password" type="password" minlength="6" autocomplete="' + (creating?"new-password":"current-password") + '" required></label>' + consent + '<p class="form-message"></p><button class="primary-action account-submit" type="submit" ' + (configured?"":"disabled") + '>' + action + '</button></form><div class="auth-switch"><span>' + (creating?t.existingUser:t.newUser) + '</span><button id="authModeToggle" type="button">' + (creating?t.switchSignIn:t.switchCreate) + '</button></div>' + (!creating?'<button class="text-button" id="resetPassword" type="button">' + t.forgot + '</button>':"") + '</section></div>';
    content.querySelector("[data-close]").onclick=()=>dialog.close();
    if(creating)bindSpecialty(content.querySelector("#accountForm"));
    content.querySelector("#authModeToggle").onclick=()=>{mode=creating?"signin":"signup";showAccount();};
    content.querySelector("#googleLogin").onclick=async()=>{
      const {error}=await client.auth.signInWithOAuth({provider:"google",options:{redirectTo:redirectUrl()}});
      if(error)content.querySelector(".form-message").textContent=error.message || t.error;
    };
    content.querySelector("#accountForm").onsubmit=async e=>{
      e.preventDefault();const form=e.currentTarget,message=form.querySelector(".form-message"),button=form.querySelector("button[type=submit]");
      if(!form.reportValidity()){message.textContent=t.required;return;}
      button.disabled=true;button.textContent=t.working;
      const email=form.email.value.trim(),password=form.password.value;
      const result=creating ? await client.auth.signUp({email,password,options:{data:{full_name:form.fullName.value.trim(),occupation:form.occupation.value,specialty:isPhysician(form.occupation.value)?form.specialty.value:null,receive_updates:form.receiveUpdates.checked,receive_updates_at:form.receiveUpdates.checked?new Date().toISOString():null},emailRedirectTo:redirectUrl()}}) : await client.auth.signInWithPassword({email,password});
      if(result.error){button.disabled=false;button.textContent=action;message.textContent=result.error.message || t.error;return;}
      if(creating && !result.data.session)content.innerHTML='<section class="access-success"><div class="access-success-mark">✓</div><div class="access-kicker">' + t.verifyTitle + '</div><h3>' + t.verifyTitle + '</h3><p>' + t.verifyText + '</p></section>';
    };
    content.querySelector("#resetPassword")?.addEventListener("click",async()=>{
      const email=content.querySelector("[name=email]").value.trim(),message=content.querySelector(".form-message");
      if(!email){message.textContent=t.email;return;}
      const {error}=await client.auth.resetPasswordForEmail(email,{redirectTo:redirectUrl()});
      message.textContent=error ? (error.message || t.error) : t.reset;
    });
    if(!dialog.open)dialog.showModal();
  }
  function setLanguage(next){lang=next;setSession(currentSession);if(document.querySelector("#accessDialog")?.open){document.querySelector("#accessDialog").close();showAccount();}}
  const showSignUp = () => { mode="signup"; showAccount(); };
  window.ProbioAuth={showAccount,showSignUp,setLanguage,client,getSession:()=>currentSession};
  window.addEventListener("DOMContentLoaded",async()=>{
    document.querySelector("#accessButton")?.addEventListener("click",showAccount);
    if(!client){setSession(null);if(!isDemoMode)showAccount();return;}
    const {data:{session}}=await client.auth.getSession();setSession(session);if(session)await saveProfile(session);if(!profileComplete(session) && !isDemoMode)showAccount();
    client.auth.onAuthStateChange(async(event,session)=>{setSession(session);if(event==="PASSWORD_RECOVERY"){resetView();return;}if(session){await saveProfile(session);if(profileComplete(session)){if(document.querySelector("#accessDialog")?.open)document.querySelector("#accessDialog").close();}else if(!isDemoMode)showAccount();}else if(!isDemoMode)showAccount();});
  });
})();
