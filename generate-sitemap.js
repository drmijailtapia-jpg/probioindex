const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = __dirname;
const context = { window: {} };
vm.createContext(context);
["data-v3.js", "data-v4.js", "data-v5.js", "data-v6.js", "data-v7.js"].forEach(file => {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
});

const favorableStudyPattern = /redu|menor|menos|mejor|mayor|aument|remisi|respuesta|respond|favorable|superior|alivi|recurr|resoluci|curaci|cultivo|absorci|señal adicional|or\s*1\.|rr\s*0\.|or\s*0\.|hr\s*0\.|nnt|90%|42\.9%|36\.4%|g\s*0\./i;
const nonEfficacyPattern = /no reduj|no mejor|recuperación similar|similar frente|no demost|no alcanz|primarios negativos|negativ|did not|no effect|no significant|recovery similar|describe fungemia|sin recomendación/i;
const isSafetyStudy = study => /seguridad|safety|farmacovigilancia/i.test(study.design || "");
const records = (context.window.PROBIOCLIN_V3 || []).filter(item =>
  (item.studies || []).some(study => !isSafetyStudy(study) && favorableStudyPattern.test(study.result || "") && !nonEfficacyPattern.test(study.result || ""))
);
const slug = value => String(value || "").normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "").toLowerCase()
  .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const strain = item => slug(`${item.genus} ${item.species} ${item.strain}`);
const condition = item => slug(item.condition);
const base = (process.env.SITE_URL || "https://probioindex.com").replace(/\/$/, "");
const today = new Date().toISOString().slice(0, 10);
const escapeXml = value => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const paths = new Set(["/"]);
records.forEach(item => {
  if (!item.genus || !item.species || !item.strain || !item.condition) return;
  paths.add(`/cepas/${strain(item)}`);
  paths.add(`/cepas/${strain(item)}/${condition(item)}`);
  paths.add(`/condiciones/${condition(item)}`);
});
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...paths].sort().map(route => `  <url><loc>${escapeXml(`${base}${route}`)}</loc><lastmod>${today}</lastmod></url>`).join("\n")}\n</urlset>\n`;
fs.writeFileSync(path.join(root, "sitemap.xml"), xml);
console.log(`Generated sitemap.xml with ${paths.size} URLs.`);
