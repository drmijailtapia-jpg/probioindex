const bacterialSafety = {
  adverse: ["Gas, distensión o cambio transitorio del hábito intestinal.", "Infección invasiva atribuible al microorganismo: rara, descrita sobre todo con enfermedad grave y factores predisponentes."],
  avoid: ["Valorar individualmente en inmunosupresión grave, UCI, catéter venoso central o barrera intestinal muy comprometida."],
  interactions: "La exposición simultánea a un antibiótico susceptible puede reducir la viabilidad; separar 2–3 horas cuando sea razonable."
};

const yeastSafety = {
  adverse: ["Flatulencia o distensión, generalmente leves.", "Fungemia: evento infrecuente pero grave, concentrado en pacientes críticos o con catéter venoso central."],
  avoid: ["Catéter venoso central.", "Enfermedad crítica, inmunosupresión grave o barrera intestinal severamente comprometida.", "Alergia a levaduras."],
  interactions: "Los antifúngicos pueden inactivar la levadura y anular el efecto probiótico."
};
const bacterialSafetyEn = {
  adverse: ["Gas, bloating, or a transient change in bowel habit.", "Invasive infection attributable to the microorganism is rare and described mainly with severe illness and predisposing factors."],
  avoid: ["Individualize use in severe immunosuppression, intensive care, central venous catheter, or severely impaired intestinal barrier."],
  interactions: "Concurrent exposure to a susceptible antibiotic may reduce viability; separate by 2–3 hours when reasonable."
};
const yeastSafetyEn = {
  adverse: ["Flatulence or bloating, usually mild.", "Fungemia is infrequent but serious, concentrated in critically ill patients or those with a central venous catheter."],
  avoid: ["Central venous catheter.", "Critical illness, severe immunosuppression, or severely impaired intestinal barrier.", "Yeast allergy."],
  interactions: "Antifungals can inactivate the yeast and negate its probiotic effect."
};

const evidence = [
  {
    id:"sb-i745-aad", genus:"Saccharomyces", species:"boulardii", strain:"CNCM I-745", kind:"yeast",
    aliases:["S. boulardii","levadura probiótica"], condition:"Diarrea asociada a antibióticos", conditionShort:"Después de antibióticos", keywords:["antibióticos","diarrea","AAD","prevención"], intent:"Prevención",
    status:"considerar", grade:"moderada", gradeLabel:"Moderada",
    effect:"Reduce la incidencia de diarrea asociada a antibióticos. El beneficio depende del riesgo basal y no demuestra prevención equivalente de infección por C. difficile.", outcome:"Incidencia de diarrea",
    metric:"RR 0.47 (IC 95% 0.38–0.57)", absolute:"18.7% → 8.5%", nnt:"10 (IC 95% 9–13)",
    dose:"500–1000 mg/día", doseDetail:"Habitualmente 250–500 mg dos veces al día, desde el inicio del antibiótico. La equivalencia en UFC varía y debe verificarse en el certificado de análisis.", duration:"Durante el antibiótico y 7–14 días después", population:"Adultos tratados con antibióticos; mayor aplicabilidad cuando el riesgo basal de diarrea es relevante.",
    caveat:"El metaanálisis incluyó adultos y niños; la magnitud absoluta cambia con el riesgo basal. No extrapolar a otras levaduras.",
    studies:[
      {design:"Metaanálisis de 21 ECA", n:"4,780", year:"2015", result:"RR 0.47; 18.7% vs 8.5%; NNT 10", limitation:"Heterogeneidad de antibióticos, definiciones y edades.", url:"https://pubmed.ncbi.nlm.nih.gov/26216624/"},
      {design:"Metaanálisis regional", n:"46 ECA; 8,201", year:"2024", result:"China: AAD RR 0.43; CDI RR 0.30.", limitation:"96% pediátrico, casi todos hospitalizados, 42 estudios solo en bases chinas y sesgo de publicación significativo.", url:"https://www.gavinpublishers.com/article/view/saccharomyces-boulardii-cncm-i-745-for--prevention-of-antibiotic-associated-diarrhea-and--clostridioides-difficile-in-china-systematic-review--and-meta-analysis"},
      {design:"Revisión de seguridad", n:"117 casos", year:"2023", result:"Describe fungemia y factores predisponentes.", limitation:"Casos publicados; no estima incidencia poblacional.", url:"https://pubmed.ncbi.nlm.nih.gov/36806741/"}
    ]
  },
  {
    id:"lgg-aad", genus:"Lacticaseibacillus", species:"rhamnosus", strain:"GG (ATCC 53103)", former:"Antes: Lactobacillus rhamnosus GG", aliases:["L. rhamnosus GG","LGG","ATCC 53103"],
    condition:"Diarrea asociada a antibióticos", conditionShort:"Después de antibióticos", keywords:["antibióticos","diarrea","AAD","prevención"], intent:"Prevención", status:"prueba", grade:"baja", gradeLabel:"Baja",
    effect:"La síntesis mixta muestra beneficio, pero el subgrupo adulto no alcanzó significación estadística. Puede considerarse una prueba monitorizada si el riesgo basal lo justifica.", outcome:"Incidencia de diarrea",
    metric:"RR 0.49 (IC 95% 0.29–0.83)", absolute:"22.4% → 12.3%", nnt:"≈10; dependiente del riesgo basal",
    dose:"≥2 × 10⁹ UFC/día", doseDetail:"Los estudios emplearon pautas heterogéneas; la consistencia fue mayor con al menos 2 × 10⁹ UFC/día.", duration:"Desde el antibiótico; 7–14 días", population:"Adultos y niños expuestos a antibióticos; en adultos aislados, el efecto fue impreciso.",
    caveat:"El efecto agrupado no equivale a certeza de beneficio en adultos. No extrapolar a otras cepas de L. rhamnosus.",
    studies:[{design:"Metaanálisis específico de cepa",n:"1,499",year:"2015",result:"RR 0.49; 22.4% vs 12.3%",limitation:"Beneficio significativo en niños, no en adultos por separado.",url:"https://pubmed.ncbi.nlm.nih.gov/26365389/"}]
  },
  {
    id:"lp299v-ibs", genus:"Lactiplantibacillus", species:"plantarum", strain:"299v (DSM 9843)", former:"Antes: Lactobacillus plantarum 299v", aliases:["L. plantarum","Lp299v","DSM 9843"],
    condition:"Síndrome de intestino irritable", conditionShort:"SII · síntomas globales", keywords:["SII","IBS","dolor abdominal","distensión","intestino irritable"], intent:"Tratamiento", status:"prueba", grade:"baja", gradeLabel:"Baja",
    effect:"Es una de las señales más consistentes a nivel de cepa para síntomas globales y dolor, aunque el efecto es modesto y los ensayos no permiten una estimación agrupada estable.", outcome:"Síntomas globales y dolor",
    metric:"Sin estimación agrupada fiable", absolute:"Respuesta heterogénea entre ECA", nnt:"No estimable",
    dose:"1 × 10¹⁰ UFC/día", doseDetail:"Pauta frecuente: 1 × 10¹⁰ UFC una vez al día; un ECA utilizó dos cápsulas de 5 × 10⁹ UFC.", duration:"4–12 semanas", population:"Adultos con SII; subtipos no estratificados de forma uniforme.",
    caveat:"ACG y AGA no recomiendan probióticos como clase para SII. Definir objetivo y suspender si no hay respuesta tras 8–12 semanas.",
    studies:[
      {design:"Metaanálisis por cepa",n:"Variable",year:"2026",result:"Señal favorable específica para 299v.",limitation:"Escalas y criterios de respuesta heterogéneos.",url:"https://doi.org/10.3390/jcm15031152"},
      {design:"ECA",n:"81",year:"2014",result:"Mejoría de síntomas con 10¹⁰ UFC/día.",limitation:"Muestra pequeña y seguimiento de 8 semanas.",url:"https://pubmed.ncbi.nlm.nih.gov/25194614/"}
    ]
  },
  {
    id:"wc5856-ibsd", genus:"Weizmannia", species:"coagulans", strain:"MTCC 5856", former:"Antes: Bacillus coagulans MTCC 5856", aliases:["B. coagulans","MTCC 5856"],
    condition:"SII con predominio de diarrea", conditionShort:"SII-D", keywords:["SII","IBS-D","diarrea","dolor abdominal"], intent:"Tratamiento", status:"prueba", grade:"baja", gradeLabel:"Baja",
    effect:"Hay una señal favorable para síntomas de SII-D, pero procede de ensayos pequeños y requiere confirmación independiente.", outcome:"Puntuación de síntomas y dolor",
    metric:"Sin estimación robusta", absolute:"ECA piloto favorable", nnt:"No estimable", dose:"2 × 10⁹ UFC/día", doseDetail:"El ECA piloto utilizó 2 × 10⁹ UFC una vez al día con alimentos.", duration:"90 días", population:"Adultos con SII-D.",
    caveat:"No extrapolar entre cepas de W. coagulans. Considerar una prueba con objetivo clínico predefinido.",
    studies:[{design:"ECA piloto",n:"36",year:"2016",result:"Mejoras en dolor y puntuación de síntomas.",limitation:"Muestra pequeña; posible patrocinio y replicación limitada.",url:"https://doi.org/10.1186/s12937-016-0140-6"}]
  },
  {
    id:"lr17938-constipation", genus:"Limosilactobacillus", species:"reuteri", strain:"DSM 17938", former:"Antes: Lactobacillus reuteri DSM 17938", aliases:["L. reuteri","DSM 17938"],
    condition:"Estreñimiento funcional", conditionShort:"Estreñimiento", keywords:["estreñimiento","constipación","evacuaciones"], intent:"Tratamiento", status:"prueba", grade:"baja", gradeLabel:"Baja",
    effect:"Puede aumentar la frecuencia de evacuaciones; el efecto sobre consistencia, dolor y calidad de vida es menos estable.", outcome:"Frecuencia de evacuaciones",
    metric:"Diferencia favorable en ECA", absolute:"≈2.6 evacuaciones/semana adicionales", nnt:"No estimable", dose:"2 × 10⁸ UFC/día", doseDetail:"1 × 10⁸ UFC dos veces al día.", duration:"4 semanas", population:"Adultos con estreñimiento funcional; estudios pequeños.",
    caveat:"No sustituye la evaluación de causas secundarias ni el tratamiento estándar.",
    studies:[{design:"ECA doble ciego",n:"40",year:"2014",result:"Aumento de frecuencia; sin cambio claro de consistencia.",limitation:"Muestra pequeña y desenlaces secundarios.",url:"https://pubmed.ncbi.nlm.nih.gov/25531996/"}]
  },
  {
    id:"hn019-constipation", genus:"Bifidobacterium animalis", species:"subsp. lactis", strain:"HN019", aliases:["B. lactis","HN019"],
    condition:"Estreñimiento funcional", conditionShort:"Estreñimiento", keywords:["estreñimiento","constipación","tránsito"], intent:"Tratamiento", status:"no-rutinario", grade:"muy baja", gradeLabel:"Muy baja",
    effect:"La evidencia es discordante: estudios iniciales sugirieron beneficio, pero un ECA multicéntrico de 2025 no confirmó superioridad frente a placebo.", outcome:"Evacuaciones espontáneas completas",
    metric:"Resultado primario no significativo", absolute:"Sin diferencia clínicamente confirmada", nnt:"No aplica", dose:"1–10 × 10⁹ UFC/día", doseDetail:"Rango evaluado; no puede definirse una dosis eficaz tras el estudio confirmatorio negativo.", duration:"4–8 semanas", population:"Adultos con estreñimiento funcional.",
    caveat:"Se conserva para hacer visible la evidencia negativa y evitar sesgo de publicación en la consulta.",
    studies:[{design:"ECA multicéntrico triple ciego",n:"228",year:"2025",result:"Sin superioridad en el desenlace primario.",limitation:"No confirma señales previas de tránsito.",url:"https://pubmed.ncbi.nlm.nih.gov/40320938/"}]
  },
  {
    id:"sb-i745-hpylori", genus:"Saccharomyces", species:"boulardii", strain:"CNCM I-745", kind:"yeast", aliases:["S. boulardii"],
    condition:"Erradicación de Helicobacter pylori", conditionShort:"H. pylori · tolerabilidad", keywords:["Helicobacter","H. pylori","erradicación","antibióticos"], intent:"Coadyuvante", status:"considerar", grade:"moderada", gradeLabel:"Moderada",
    effect:"Como coadyuvante reduce efectos adversos gastrointestinales; el incremento de erradicación es pequeño y no robusto por protocolo. Nunca sustituye el esquema antimicrobiano.", outcome:"Efectos adversos y erradicación",
    metric:"EA: RR 0.56 (IC 95% 0.44–0.70)", absolute:"EA 39% → 22%; diarrea 25.7% → 7.9%", nnt:"≈6 para evitar un EA",
    dose:"Principalmente 1000 mg/día", doseDetail:"La mayoría de los ECA utilizó 1000 mg/día; uno evaluó 500 mg/día.", duration:"14 días con la terapia cuádruple", population:"Adultos en terapia cuádruple con bismuto.",
    caveat:"Erradicación ITT 87.0% vs 83.3% (RR 1.05); por protocolo no fue significativa. La prioridad es tolerabilidad.",
    studies:[{design:"Metaanálisis de 6 ECA",n:"1,404",year:"2024",result:"EA RR 0.56; diarrea RR 0.29; erradicación ITT RR 1.05.",limitation:"Esquemas y dosis no idénticos; erradicación PP no significativa.",url:"https://doi.org/10.3389/fmed.2024.1344702"}]
  },
  {
    id:"sb-i745-cdi", genus:"Saccharomyces", species:"boulardii", strain:"CNCM I-745", kind:"yeast", aliases:["S. boulardii"],
    condition:"Prevención primaria de infección por C. difficile", conditionShort:"C. difficile · prevención", keywords:["Clostridioides","C. difficile","CDI","antibióticos"], intent:"Prevención", status:"no-rutinario", grade:"muy baja", gradeLabel:"Muy baja",
    effect:"La señal es incierta y las guías no respaldan el uso rutinario para prevención primaria.", outcome:"Infección por C. difficile",
    metric:"Sin estimación concluyente por cepa", absolute:"Evento infrecuente; potencia limitada", nnt:"No estimable", dose:"Sin dosis recomendada", doseDetail:"Se han evaluado dosis próximas a 10¹⁰ UFC/día, sin base suficiente para una pauta estándar.", duration:"No establecida", population:"Adultos expuestos a antibióticos; riesgo basal heterogéneo.",
    caveat:"No sustituye uso racional de antibióticos, aislamiento, diagnóstico ni tratamiento de C. difficile.",
    studies:[{design:"Revisión Cochrane",n:"8,672",year:"2017",result:"Posible efecto de probióticos como clase en riesgo basal alto.",limitation:"No permite atribución segura a CNCM I-745 ni a todos los entornos.",url:"https://pubmed.ncbi.nlm.nih.gov/29257353/"},{design:"Guía clínica AGA",n:"—",year:"2020",result:"Recomendación condicionada y específica de formulación.",limitation:"Certeza baja; no equivale a recomendación universal.",url:"https://doi.org/10.1053/j.gastro.2020.05.059"}]
  },
  {
    id:"mimbb75-ibs", genus:"Bifidobacterium", species:"bifidum", strain:"MIMBb75", aliases:["MIMBb75","B. bifidum"],
    condition:"Síndrome de intestino irritable", conditionShort:"SII · alivio adecuado", keywords:["SII","IBS","dolor","distensión"], intent:"Tratamiento", status:"prueba", grade:"baja", gradeLabel:"Baja",
    effect:"Un ECA mostró una mejoría grande en alivio adecuado y síntomas globales, pero la evidencia viva depende esencialmente de un estudio.", outcome:"Alivio adecuado y puntuación global",
    metric:"Alivio: 47% vs 11%", absolute:"Diferencia absoluta 36 puntos", nnt:"≈3", dose:"1 × 10⁹ UFC/día", doseDetail:"Una dosis diaria durante cuatro semanas.", duration:"4 semanas", population:"Adultos con SII diagnosticado clínicamente.",
    caveat:"No confundir con MIMBb75 inactivado por calor, que es un postbiótico y una intervención distinta.",
    studies:[{design:"ECA doble ciego",n:"122",year:"2011",result:"Alivio 47% vs 11%; respondedores 57% vs 21%.",limitation:"Un solo ECA para la formulación viva; duración corta.",url:"https://pubmed.ncbi.nlm.nih.gov/21418261/"}]
  },
  {
    id:"bl35624-ibs", genus:"Bifidobacterium", species:"longum", strain:"35624", former:"Antes: B. infantis 35624", aliases:["B. longum 35624","B. infantis 35624"],
    condition:"Síndrome de intestino irritable", conditionShort:"SII · síntomas globales", keywords:["SII","IBS","dolor","distensión"], intent:"Tratamiento", status:"prueba", grade:"baja", gradeLabel:"Baja",
    effect:"Hay una señal de mejoría global y de calidad de vida, con respuesta dependiente de la dosis y heterogeneidad entre estudios.", outcome:"Síntomas globales y calidad de vida",
    metric:"Sin estimación agrupada estable", absolute:"Beneficio variable hasta 8–12 semanas", nnt:"No estimable", dose:"1 × 10⁸–10⁹ UFC/día", doseDetail:"La dosis con mejor señal no fue uniforme entre estudios; verificar que la cepa sea 35624.", duration:"4–12 semanas", population:"Adultos con SII de distintos subtipos.",
    caveat:"La literatura incluye intervenciones monocepa y combinadas; aquí solo se considera la señal atribuible a 35624.",
    studies:[{design:"Revisión sistemática",n:"8 estudios",year:"2024",result:"Señal favorable para síntomas y calidad de vida.",limitation:"Pocos ECA comparables y riesgo de heterogeneidad.",url:"https://www.microbiotajournal.com/wp-content/uploads/sites/7/2024/06/e998.pdf"},{design:"Revisión sistemática específica de cepa",n:"Variable",year:"2026",result:"Mejoría de síntomas clave de SII atribuida a 35624.",limitation:"Ensayos de escalas y épocas distintas.",url:"https://pubmed.ncbi.nlm.nih.gov/41682832/"},{design:"Metaanálisis",n:"5 estudios",year:"2017",result:"La monocepa no mostró efecto confirmado; mezclas no son extrapolables.",limitation:"Pocos ECA de monocepa y heterogeneidad.",url:"https://pubmed.ncbi.nlm.nih.gov/28166427/"}]
  },
  {
    id:"sc-i3856-ibsc", genus:"Saccharomyces", species:"cerevisiae", strain:"CNCM I-3856", kind:"yeast", aliases:["S. cerevisiae I-3856","CNCM I-3856"],
    condition:"SII con estreñimiento", conditionShort:"SII-C · dolor", keywords:["SII-C","IBS-C","estreñimiento","dolor"], intent:"Tratamiento", status:"insuficiente", grade:"muy baja", gradeLabel:"Muy baja",
    effect:"El análisis individual sugiere una posible señal en SII-C, pero un ECA posterior no mostró beneficio global para dolor o malestar.", outcome:"Dolor y malestar abdominal",
    metric:"Efecto global no significativo", absolute:"Posible subgrupo SII-C", nnt:"No estimable", dose:"1000 mg/día", doseDetail:"El ECA posterior empleó 1000 mg/día durante 12 semanas.", duration:"8–12 semanas", population:"Adultos con SII; hipótesis de mayor respuesta en SII-C.",
    caveat:"Un análisis de subgrupo no basta para recomendar uso rutinario. Requiere confirmación prospectiva.",
    studies:[{design:"Metaanálisis de datos individuales",n:"579",year:"2017",result:"Señal global y mayor efecto aparente en SII-C.",limitation:"Pocos ensayos y análisis de subgrupo.",url:"https://pubmed.ncbi.nlm.nih.gov/28127207/"}]
  },
  {
    id:"dds1-ibs", genus:"Lactobacillus", species:"acidophilus", strain:"DDS-1", aliases:["DDS-1","L. acidophilus"],
    condition:"Síndrome de intestino irritable", conditionShort:"SII · severidad", keywords:["SII","IBS","IBS-SSS","dolor"], intent:"Tratamiento", status:"prueba", grade:"baja", gradeLabel:"Baja",
    effect:"Un ECA grande mostró reducción de severidad, dolor y distensión; falta replicación independiente y una estimación binaria útil para NNT.", outcome:"IBS-SSS y calidad de vida",
    metric:"Cambio IBS-SSS: −133.4 puntos", absolute:"Mayor reducción que placebo (p<0.001)", nnt:"No estimable", dose:"1 × 10¹⁰ UFC/día", doseDetail:"Una dosis diaria de DDS-1; fue un brazo monocepa independiente.", duration:"12 semanas", population:"Adultos con SII según Roma IV.",
    caveat:"No confundir el brazo DDS-1 con el brazo separado de UABla-12 del mismo estudio.",
    studies:[{design:"ECA doble ciego de 3 brazos",n:"330",year:"2020",result:"IBS-SSS −133.4; mejoría de dolor, distensión y QoL.",limitation:"Un ensayo, múltiples desenlaces y sin NNT publicado.",url:"https://pubmed.ncbi.nlm.nih.gov/32019158/"}]
  },
  {
    id:"uabla12-ibs", genus:"Bifidobacterium animalis", species:"subsp. lactis", strain:"UABla-12", aliases:["UABla-12","B. lactis UABla-12"],
    condition:"Síndrome de intestino irritable", conditionShort:"SII · severidad", keywords:["SII","IBS","IBS-SSS","dolor"], intent:"Tratamiento", status:"prueba", grade:"baja", gradeLabel:"Baja",
    effect:"Un ECA mostró reducción de severidad y mejorías en varios dominios, pero la certeza sigue limitada por depender de un estudio.", outcome:"IBS-SSS y síntomas",
    metric:"Cambio IBS-SSS: −104.5 puntos", absolute:"Mayor reducción que placebo (p<0.001)", nnt:"No estimable", dose:"1 × 10¹⁰ UFC/día", doseDetail:"Una dosis diaria de UABla-12; intervención monocepa.", duration:"12 semanas", population:"Adultos con SII según Roma IV.",
    caveat:"El resultado no se puede trasladar a cualquier B. animalis subsp. lactis.",
    studies:[{design:"ECA doble ciego de 3 brazos",n:"330",year:"2020",result:"IBS-SSS −104.5; mejoría de varios dominios.",limitation:"Un ensayo y múltiples desenlaces.",url:"https://pubmed.ncbi.nlm.nih.gov/32019158/"}]
  },
  {
    id:"bb12-low-frequency", genus:"Bifidobacterium animalis", species:"subsp. lactis", strain:"BB-12", aliases:["BB-12","B. lactis BB-12"],
    condition:"Baja frecuencia de evacuaciones", conditionShort:"Evacuaciones poco frecuentes", keywords:["estreñimiento","baja frecuencia","evacuaciones"], intent:"Tratamiento", status:"considerar", grade:"baja", gradeLabel:"Baja",
    effect:"Aumenta la probabilidad de lograr al menos un día adicional de evacuación por semana; no mejoró el bienestar gastrointestinal global.", outcome:"Días de evacuación por semana",
    metric:"OR 1.55 (IC 95% 1.22–1.96)", absolute:"Respuesta ≥50% del periodo", nnt:"No publicado", dose:"1 × 10⁹ UFC/día", doseDetail:"El ECA evaluó 10⁹ y 10¹⁰ UFC/día; no se observó ventaja clara de la dosis alta.", duration:"4 semanas", population:"Adultos con baja frecuencia de evacuaciones, no necesariamente estreñimiento Roma IV.",
    caveat:"El desenlace no equivale a resolución integral del estreñimiento y hubo efecto techo en la dosis.",
    studies:[{design:"ECA multicéntrico",n:"1,248",year:"2015",result:"OR 1.55 para ≥1 día adicional/semana.",limitation:"Sin mejoría del bienestar GI; población definida por frecuencia.",url:"https://pubmed.ncbi.nlm.nih.gov/26382580/"}]
  },
  {
    id:"bb536-elderly-constipation", genus:"Bifidobacterium", species:"longum", strain:"BB536", aliases:["BB536","B. longum BB536"],
    condition:"Estreñimiento crónico en adultos mayores", conditionShort:"Estreñimiento · mayores", keywords:["estreñimiento","adulto mayor","anciano"], intent:"Tratamiento", status:"insuficiente", grade:"muy baja", gradeLabel:"Muy baja",
    effect:"No mejoró los desenlaces primarios; apareció una señal secundaria en frecuencia intestinal que necesita confirmación.", outcome:"Severidad y frecuencia",
    metric:"Desenlaces primarios no significativos", absolute:"Frecuencia secundaria favorable", nnt:"No aplica", dose:"5 × 10¹⁰ UFC/día", doseDetail:"Dosis diaria evaluada durante cuatro semanas.", duration:"4 semanas", population:"Adultos mayores con estreñimiento crónico.",
    caveat:"No elevar un desenlace secundario positivo por encima de los resultados primarios negativos.",
    studies:[{design:"ECA doble ciego",n:"80",year:"2022",result:"Primarios negativos; frecuencia p=0.008 como señal secundaria.",limitation:"Muestra pequeña y multiplicidad de desenlaces.",url:"https://pubmed.ncbi.nlm.nih.gov/36216361/"}]
  },
  {
    id:"unique-is2-lactulose", genus:"Weizmannia", species:"coagulans", strain:"Unique IS2", former:"Antes: Bacillus coagulans Unique IS2", aliases:["Unique IS2","B. coagulans Unique IS2"],
    condition:"Estreñimiento crónico con lactulosa", conditionShort:"Estreñimiento · coadyuvante", keywords:["estreñimiento","lactulosa","coadyuvante"], intent:"Coadyuvante", status:"insuficiente", grade:"muy baja", gradeLabel:"Muy baja",
    effect:"La combinación mostró beneficios tempranos, pero al final la frecuencia no se separó de lactulosa y no permite atribuir un efecto independiente al probiótico.", outcome:"Frecuencia y consistencia",
    metric:"Diferencia temprana; no sostenida", absolute:"Sin separación final en frecuencia", nnt:"No estimable", dose:"2 × 10⁹ esporas/día", doseDetail:"Administrado con lactulosa 10 g/día; no es evidencia de monoterapia.", duration:"4 semanas", population:"Adultos con estreñimiento crónico.",
    caveat:"La cointervención impide inferir eficacia independiente de Unique IS2.",
    studies:[{design:"ECA de 3 brazos",n:"150",year:"2021",result:"Mejoría temprana; diferencia de frecuencia perdida al final.",limitation:"Cointervención con lactulosa y seguimiento corto.",url:"https://pubmed.ncbi.nlm.nih.gov/34599466/"}]
  },
  {
    id:"shirota-hard-stool", genus:"Lacticaseibacillus", species:"paracasei", strain:"Shirota", former:"Antes: Lactobacillus casei Shirota", aliases:["LcS","Shirota","L. casei Shirota"],
    condition:"Heces duras o fragmentadas", conditionShort:"Heces duras", keywords:["estreñimiento","Bristol","heces duras","fragmentadas"], intent:"Tratamiento", status:"considerar", grade:"baja", gradeLabel:"Baja",
    effect:"Un ECA reciente redujo la persistencia de heces duras y aumentó la probabilidad de disminuir su frecuencia.", outcome:"Heces Bristol 1–2",
    metric:"OR 0.34 (IC 95% 0.14–0.80)", absolute:"Menor persistencia de heces duras", nnt:"No publicado", dose:"8 × 10⁹ UFC/día", doseDetail:"Dosis total diaria en bebida fermentada; aquí se reporta la cepa y no una marca.", duration:"28 días", population:"Adultos estadounidenses con heces duras o fragmentadas frecuentes.",
    caveat:"El desenlace es consistencia fecal, no respuesta completa de estreñimiento crónico.",
    studies:[{design:"ECA doble ciego",n:"50",year:"2025",result:"OR 0.34 para persistencia; OR 2.86 para reducción de frecuencia.",limitation:"Muestra pequeña y desenlace específico.",url:"https://doi.org/10.1016/j.tjnut.2025.02.021"}]
  },
  {
    id:"lr-combo-hpylori", genus:"Limosilactobacillus", species:"reuteri", strain:"DSM 17938 + ATCC PTA 6475", former:"Antes: Lactobacillus reuteri", aliases:["DSM 17938","PTA 6475","L. reuteri combinación"],
    condition:"Erradicación de Helicobacter pylori", conditionShort:"H. pylori · tolerabilidad", keywords:["Helicobacter","H. pylori","erradicación","náusea","diarrea"], intent:"Coadyuvante", status:"considerar", grade:"moderada", gradeLabel:"Moderada",
    effect:"La combinación reduce diarrea, náusea y disgeusia durante la erradicación, sin mejorar de forma convincente la erradicación.", outcome:"Tolerabilidad del esquema",
    metric:"Reducción significativa de 3 síntomas", absolute:"Sin mejora de erradicación", nnt:"No estimable con datos publicados", dose:"2 × 10⁸ UFC/día", doseDetail:"Combinación inseparable de 1 × 10⁸ UFC de cada cepa al día en varios ensayos; verificar protocolo específico.", duration:"Durante 10–14 días", population:"Adultos en esquemas de erradicación de H. pylori.",
    caveat:"La evidencia corresponde a la combinación exacta; no atribuir el efecto a DSM 17938 o PTA 6475 por separado.",
    studies:[{design:"Metaanálisis específico",n:"7 ECA",year:"2026",result:"Menos diarrea, náusea y disgeusia; sin aumento de erradicación.",limitation:"Esquemas y medición de síntomas heterogéneos.",url:"https://www.wjgnet.com/1007-9327/full/v32/i37/119222.htm"},{design:"Metaanálisis",n:"8 ECA",year:"2024",result:"Menos eventos adversos; tendencia en erradicación.",limitation:"Incluye distintas pautas de L. reuteri.",url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC11155330/"}]
  },
  {
    id:"bc-quad-hpylori", genus:"Alkalihalobacillus", species:"clausii", strain:"O/C + SIN + N/R + T", former:"Antes: Bacillus clausii", aliases:["B. clausii","O/C SIN N/R T"],
    condition:"Erradicación de Helicobacter pylori", conditionShort:"H. pylori · tolerabilidad", keywords:["Helicobacter","H. pylori","diarrea","efectos adversos"], intent:"Coadyuvante", status:"prueba", grade:"baja", gradeLabel:"Baja",
    effect:"Un ECA antiguo mostró menos problemas gastrointestinales durante triple terapia, pero faltan replicación contemporánea y evaluación con esquemas actuales.", outcome:"Efectos adversos gastrointestinales",
    metric:"11.0% vs 37.5%", absolute:"Diferencia absoluta 26.5 puntos", nnt:"≈4", dose:"2 × 10⁹ esporas, 3 veces/día", doseDetail:"Total 6 × 10⁹ esporas/día durante siete días de terapia y siete días posteriores.", duration:"14 días", population:"Adultos en triple terapia de erradicación.",
    caveat:"La intervención es una mezcla exacta de cuatro cepas y el esquema antibiótico del estudio ya no representa todos los contextos actuales.",
    studies:[{design:"ECA doble ciego",n:"120",year:"2004",result:"Problemas GI 11.0% vs 37.5%; NNT ≈4.",limitation:"Ensayo antiguo con triple terapia y una sola cohorte.",url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC7680487/"}]
  },
  {
    id:"lgg-hpylori", genus:"Lacticaseibacillus", species:"rhamnosus", strain:"GG (ATCC 53103)", former:"Antes: Lactobacillus rhamnosus GG", aliases:["LGG","ATCC 53103"],
    condition:"Erradicación de Helicobacter pylori", conditionShort:"H. pylori · tolerabilidad", keywords:["Helicobacter","H. pylori","bismuto","efectos adversos"], intent:"Coadyuvante", status:"insuficiente", grade:"muy baja", gradeLabel:"Muy baja",
    effect:"La evidencia contemporánea con terapia cuádruple no demuestra una mejora clínica consistente en tolerabilidad o erradicación.", outcome:"Síntomas y erradicación",
    metric:"Sin diferencia significativa", absolute:"No confirmada", nnt:"No aplica", dose:"Pauta no estandarizable", doseDetail:"Las pautas varían y no existe una dosis clínica respaldada para esta indicación.", duration:"Durante la erradicación", population:"Adultos en terapia cuádruple con bismuto.",
    caveat:"No trasladar el beneficio de LGG en diarrea asociada a antibióticos a H. pylori.",
    studies:[{design:"Estudio comparativo",n:"120",year:"2022",result:"Sin diferencia consistente en síntomas.",limitation:"Potencia y diseño limitan conclusiones definitivas.",url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC9760799/"}]
  },
  {
    id:"sf68-acute-diarrhea", genus:"Enterococcus", species:"faecium", strain:"SF68", aliases:["SF68","E. faecium SF68"],
    condition:"Diarrea aguda del adulto", conditionShort:"Diarrea aguda", keywords:["diarrea aguda","gastroenteritis","adulto"], intent:"Tratamiento", status:"prueba", grade:"baja", gradeLabel:"Baja",
    effect:"La reanálisis de ECA históricos sugiere acortar un día la diarrea, pero los estudios preceden a estándares modernos de calidad.", outcome:"Tiempo hasta resolución",
    metric:"Mediana 3 vs 4 días", absolute:"≈1 día menos", nnt:"No estimable", dose:"1.5 × 10⁸ UFC, 3 veces/día", doseDetail:"Pauta histórica durante el episodio agudo; la rehidratación continúa siendo el tratamiento principal.", duration:"Hasta 5 días", population:"Adultos con diarrea aguda no complicada.",
    caveat:"No usar en diarrea con sangre, sepsis, deshidratación grave o sospecha de infección invasiva sin evaluación médica.",
    studies:[{design:"Reanálisis de 4 ECA históricos",n:"333",year:"2020",result:"Resolución mediana 3 vs 4 días.",limitation:"Ensayos previos a GCP moderna; documentación incompleta.",url:"https://pubmed.ncbi.nlm.nih.gov/32656217/"}]
  },
  {
    id:"sf68-aad", genus:"Enterococcus", species:"faecium", strain:"SF68", aliases:["SF68","E. faecium SF68"],
    condition:"Diarrea asociada a antibióticos", conditionShort:"Después de antibióticos", keywords:["antibióticos","diarrea","AAD"], intent:"Prevención", status:"prueba", grade:"baja", gradeLabel:"Baja",
    effect:"Ensayos históricos sugieren menor incidencia de diarrea, con incertidumbre metodológica y cautela especial por tratarse de Enterococcus.", outcome:"Incidencia de diarrea",
    metric:"8.6% vs 16.2%", absolute:"Diferencia absoluta 7.6 puntos", nnt:"≈14", dose:"1.5 × 10⁸ UFC, 3 veces/día", doseDetail:"Pauta reportada en estudios históricos; confirmar la identidad SF68.", duration:"Durante el antibiótico", population:"Adultos tratados con antibióticos.",
    caveat:"La antigüedad de los ensayos y la seguridad de microorganismos vivos en pacientes vulnerables reducen la aplicabilidad.",
    studies:[{design:"Reanálisis de ECA históricos",n:"1,597",year:"2020",result:"AAD 8.6% vs 16.2%; NNT ≈14.",limitation:"Ensayos de 1989 y anteriores; previos a GCP moderna.",url:"https://pubmed.ncbi.nlm.nih.gov/32656217/"}]
  },
  {
    id:"sb-i745-acute", genus:"Saccharomyces", species:"boulardii", strain:"CNCM I-745", kind:"yeast", aliases:["S. boulardii"],
    condition:"Diarrea aguda viral del adulto", conditionShort:"Diarrea aguda", keywords:["diarrea aguda","viral","gastroenteritis"], intent:"Tratamiento", status:"prueba", grade:"baja", gradeLabel:"Baja",
    effect:"Un ECA reciente sugiere resolución sintomática más rápida; la evidencia aún no basta para uso rutinario.", outcome:"Resolución de síntomas",
    metric:"ECA favorable; sin estimación agrupada", absolute:"Mejoría en 3–4 días", nnt:"No estimable", dose:"600 mg/día", doseDetail:"Dosis diaria durante tres a cuatro días, además de rehidratación y manejo habitual.", duration:"3–4 días", population:"Adultos con diarrea viral aguda no complicada.",
    caveat:"La rehidratación es prioritaria. Evaluar alarma, sangre, fiebre alta, deshidratación o inmunosupresión.",
    studies:[{design:"ECA doble ciego",n:"100",year:"2023",result:"Mejoría más rápida de síntomas frente a placebo.",limitation:"Un centro, muestra moderada y sin metaanálisis por cepa.",url:"https://pubmed.ncbi.nlm.nih.gov/37400812/"}]
  },
  {
    id:"sb-i745-travel", genus:"Saccharomyces", species:"boulardii", strain:"CNCM I-745", kind:"yeast", aliases:["S. boulardii"],
    condition:"Prevención de diarrea del viajero", conditionShort:"Diarrea del viajero", keywords:["viaje","viajero","diarrea","prevención"], intent:"Prevención", status:"no-rutinario", grade:"muy baja", gradeLabel:"Muy baja",
    effect:"Ensayos antiguos muestran una reducción pequeña y dependiente del destino; guías de viaje no respaldan uso rutinario de probióticos.", outcome:"Incidencia de diarrea del viajero",
    metric:"≈39% → 29–34%", absolute:"Reducción absoluta 5–10 puntos", nnt:"≈10–20", dose:"250–500 mg/día", doseDetail:"Inicio cinco días antes del viaje y continuación durante la exposición en estudios históricos.", duration:"Desde 5 días antes y durante el viaje", population:"Viajeros adultos, con resultados variables por destino.",
    caveat:"No sustituye higiene, seguridad alimentaria ni evaluación de diarrea grave. La cepa de estudios antiguos no siempre quedó caracterizada con estándares actuales.",
    studies:[{design:"ECA multicéntricos históricos",n:">3,000",year:"1993",result:"Reducción pequeña, mayor con dosis alta.",limitation:"Antigüedad, destino-dependencia e identificación de cepa imperfecta.",url:"https://pubmed.ncbi.nlm.nih.gov/20458757/"}]
  },
  {
    id:"sb-i745-icu", genus:"Saccharomyces", species:"boulardii", strain:"CNCM I-745", kind:"yeast", aliases:["S. boulardii"],
    condition:"Diarrea asociada a nutrición enteral en UCI", conditionShort:"Nutrición enteral · UCI", keywords:["UCI","nutrición enteral","diarrea","crítico"], intent:"Prevención", status:"evitar", grade:"muy baja", gradeLabel:"Muy baja",
    effect:"Existe una señal de eficacia en un ensayo antiguo, pero el riesgo de fungemia en pacientes críticos y con catéter central hace desfavorable la relación beneficio–riesgo.", outcome:"Días con diarrea",
    metric:"Señal favorable histórica", absolute:"No compensa el riesgo contextual", nnt:"No aplicable", dose:"No recomendar en este contexto", doseDetail:"La pauta histórica no debe convertirse en recomendación por el perfil de seguridad actual.", duration:"No recomendar", population:"Pacientes críticos con nutrición enteral, frecuentemente portadores de accesos intravasculares.",
    caveat:"Este registro separa eficacia de decisión clínica: una señal positiva no neutraliza una contraindicación contextual relevante.",
    studies:[{design:"ECA histórico",n:"128",year:"1997",result:"Menos diarrea asociada a nutrición enteral.",limitation:"Previo a la caracterización moderna del riesgo de fungemia.",url:"https://pubmed.ncbi.nlm.nih.gov/9201523/"},{design:"Revisión sistemática de casos",n:"117 casos",year:"2023",result:"Catéter y enfermedad crítica como factores predominantes.",limitation:"No calcula incidencia, pero identifica daño plausible y grave.",url:"https://pubmed.ncbi.nlm.nih.gov/36806741/"}]
  },
  {
    id:"lra05-hpylori", genus:"Lacticaseibacillus", species:"rhamnosus", strain:"LRa05", aliases:["LRa05","L. rhamnosus LRa05"],
    condition:"Erradicación de Helicobacter pylori", conditionShort:"H. pylori · coadyuvante", keywords:["Helicobacter","H. pylori","erradicación"], intent:"Coadyuvante", status:"insuficiente", grade:"muy baja", gradeLabel:"Muy baja",
    effect:"Un ECA de 2024 no demostró aumento significativo de erradicación; las señales secundarias no justifican adopción rutinaria.", outcome:"Erradicación y efectos adversos",
    metric:"86.11% vs 82.86%", absolute:"Diferencia no significativa", nnt:"No aplica", dose:"1 × 10¹⁰ UFC/día", doseDetail:"Pauta complementaria durante terapia cuádruple con bismuto.", duration:"14 días", population:"Adultos con infección por H. pylori.",
    caveat:"La tendencia numérica no equivale a eficacia demostrada y requiere replicación.",
    studies:[{design:"ECA doble ciego",n:"360",year:"2024",result:"Erradicación 86.11% vs 82.86%; no significativa.",limitation:"Un estudio; señales secundarias exploratorias.",url:"https://pubmed.ncbi.nlm.nih.gov/39234246/"}]
  },
  {
    id:"mimbb75-postbiotic-boundary", genus:"Bifidobacterium", species:"bifidum", strain:"MIMBb75 inactivado", aliases:["MIMBb75 heat-inactivated","postbiótico"],
    condition:"Síndrome de intestino irritable", conditionShort:"SII · registro frontera", keywords:["SII","IBS","postbiótico","inactivado"], intent:"Tratamiento", status:"considerar", grade:"moderada", gradeLabel:"Moderada", interventionType:"Postbiótico · no es probiótico vivo",
    effect:"La preparación inactivada mostró beneficio clínico, pero se presenta como registro frontera: no debe mezclarse con la evidencia del microorganismo vivo.", outcome:"Dolor y alivio global",
    metric:"Respuesta 34% vs 19%", absolute:"Diferencia absoluta 15 puntos", nnt:"≈7", dose:"1 × 10⁹ células inactivadas/día", doseDetail:"Una cápsula diaria durante ocho semanas; las células no están vivas.", duration:"8 semanas", population:"Adultos con SII.",
    adverse:["Eventos gastrointestinales leves; sin aumento relevante de eventos adversos graves frente a placebo."], avoid:["Alergia a componentes de la preparación; la precaución propia de microorganismos vivos no aplica de la misma manera."], interactions:"No se ha establecido una interacción farmacológica clínicamente relevante para la preparación inactivada.",
    caveat:"No es un probiótico según la definición de microorganismo vivo. Se incluye para prevenir confusiones de nomenclatura con MIMBb75 vivo.",
    studies:[{design:"ECA multicéntrico doble ciego",n:"443",year:"2020",result:"Respuesta compuesta 34% vs 19%.",limitation:"Intervención inactivada; no extrapolable al probiótico vivo.",url:"https://pubmed.ncbi.nlm.nih.gov/32277872/"}]
  },
  {
    id:"sf68-safety-boundary", genus:"Enterococcus", species:"faecium", strain:"SF68", aliases:["SF68","E. faecium SF68"],
    condition:"Uso en inmunosupresión grave o UCI", conditionShort:"Seguridad · huésped vulnerable", keywords:["UCI","inmunosupresión","catéter","seguridad"], intent:"Prevención", status:"evitar", grade:"muy baja", gradeLabel:"Muy baja",
    effect:"No hay una indicación que justifique exponer de rutina a un huésped vulnerable a un enterococo vivo cuando la evidencia de eficacia procede de ensayos históricos.", outcome:"Balance beneficio–riesgo",
    metric:"Sin beneficio contextual demostrado", absolute:"Riesgo raro, potencialmente grave", nnt:"No aplica", dose:"No recomendar", doseDetail:"La evitación se refiere al contexto clínico, no a una toxicidad universal en adultos sanos.", duration:"No recomendar", population:"UCI, inmunosupresión avanzada, catéter central o barrera intestinal severamente dañada.",
    caveat:"La seguridad de una cepa probiótica no se puede inferir solo por su uso histórico.",
    studies:[{design:"Reanálisis de seguridad",n:"1,930",year:"2020",result:"Pocos EA en ensayos históricos.",limitation:"Excluye buena caracterización de huéspedes de alto riesgo y precede a vigilancia moderna.",url:"https://pubmed.ncbi.nlm.nih.gov/32656217/"}]
  },
  {
    id:"lp299v-iron-absorption", genus:"Lactiplantibacillus", species:"plantarum", strain:"299v (DSM 9843)", former:"Antes: Lactobacillus plantarum 299v", aliases:["Lp299v","L. plantarum 299v","hierro"], condition:"Absorción de hierro no hemo", conditionShort:"Hierro no hemo · absorción", keywords:["hierro","anemia ferropénica","absorción","Lp299v","fitatos"], intent:"Coadyuvante", status:"prueba", grade:"baja", gradeLabel:"Baja",
    effect:"La síntesis específica de Lp299v muestra una señal consistente de mayor absorción de hierro no hemo. No demuestra que trate anemia por deficiencia de hierro ni sustituye el hierro oral o intravenoso cuando están indicados.", outcome:"Absorción fraccional de hierro no hemo", metric:"SMD 0.55 (IC 95% 0.22–0.88)", absolute:"No estandarizable entre comidas y métodos isotópicos", nnt:"No estimable",
    dose:"≈1 × 10⁹ UFC con una comida o suplemento de hierro", doseDetail:"Los estudios de absorción utilizaron Lp299v con una comida de prueba o una preparación fermentada; la pauta clínica óptima y la equivalencia entre matrices no están establecidas.", duration:"Estudios de comida única a semanas", population:"Adultos, principalmente sanos; escasean ensayos confirmatorios en anemia ferropénica.",
    caveat:"El desenlace principal es absorción, no corrección de hemoglobina, ferritina ni desenlaces funcionales. Puede considerarse solo como complemento nutricional, con monitorización clínica habitual.",
    studies:[{design:"Metaanálisis específico de cepa",n:"8 estudios",year:"2019",result:"Mayor absorción de hierro: SMD 0.55 (IC 95% 0.22–0.88).",limitation:"Predominan estudios de absorción; pocos datos de estado de hierro clínico.",url:"https://pubmed.ncbi.nlm.nih.gov/31816981/"}],
    en:{
      condition:"Non-heme iron absorption", conditionShort:"Non-heme iron · absorption",
      effect:"The Lp299v-specific synthesis shows a consistent signal of higher non-heme iron absorption. It does not demonstrate treatment of iron-deficiency anemia and does not replace oral or intravenous iron when those are indicated.",
      outcome:"Fractional non-heme iron absorption", metric:"SMD 0.55 (95% CI 0.22–0.88)", absolute:"Not standardizable across meals and isotope methods", nnt:"Not estimable",
      dose:"≈1 × 10⁹ CFU with a meal or iron supplement", doseDetail:"Absorption studies used Lp299v with a test meal or fermented preparation; the optimal clinical regimen and equivalence between matrices are not established.", duration:"Single-meal to several-week studies", population:"Adults, mainly healthy participants; confirmatory trials in iron-deficiency anemia are scarce.",
      caveat:"The primary endpoint is absorption, not correction of hemoglobin, ferritin, or functional outcomes. It may be considered only as a nutritional adjunct, with usual clinical monitoring.",
      adverse:["Gas, bloating, or a transient change in bowel habit.","Invasive infection attributable to the microorganism is rare and described mainly with severe illness and predisposing factors."],
      avoid:["Individualize use in severe immunosuppression, intensive care, central venous catheter, or severely impaired intestinal barrier."],
      interactions:"Concurrent exposure to a susceptible antibiotic may reduce viability; separate by 2–3 hours when reasonable.",
      studies:[{design:"Strain-specific meta-analysis",n:"8 studies",year:"2019",result:"Higher iron absorption: SMD 0.55 (95% CI 0.22–0.88).",limitation:"Absorption studies predominate; clinical iron-status data are limited.",url:"https://pubmed.ncbi.nlm.nih.gov/31816981/"}]
    }
  },
  {
    id:"bc-quad-peds-acute", ageGroup:"pediatric", area:"Pediatría", genus:"Alkalihalobacillus", species:"clausii", strain:"O/C + SIN + N/R + T", former:"Antes: Bacillus clausii", aliases:["B. clausii","O/C","SIN","N/R","T","diarrea pediátrica"], condition:"Gastroenteritis aguda pediátrica", conditionShort:"Gastroenteritis aguda", keywords:["pediatría","diarrea aguda","gastroenteritis","Bacillus clausii","rehidratación"], intent:"Coadyuvante", status:"no-rutinario", grade:"baja", gradeLabel:"Baja", interventionType:"Mezcla inseparable de cuatro cepas esporuladas",
    effect:"Las revisiones específicas señalan posible reducción modesta de duración, pero un ECA grande no mostró una recuperación claramente superior. No hay base para incorporarlo de forma rutinaria; si se usa, debe ser siempre complemento de rehidratación oral.", outcome:"Tiempo hasta recuperación de diarrea", metric:"Resultados mixtos", absolute:"Sin beneficio consistente en ECA grande", nnt:"No estimable", dose:"2 × 10⁹ esporas por dosis", doseDetail:"La frecuencia varió entre estudios y contextos; verificar la pauta certificada del protocolo local en lugar de extrapolar desde otra formulación de B. clausii.", duration:"Hasta 5–7 días", population:"Niños con diarrea aguda no complicada; no sustituye la evaluación de deshidratación.", caveat:"La formulación de cuatro cepas es inseparable. La rehidratación oral, signos de alarma y etiología continúan siendo el eje del manejo.",
    studies:[{design:"Revisión sistemática y metaanálisis de ECA",n:"Variable",year:"2018",result:"Señal de menor duración; calidad y heterogeneidad limitan certeza.",limitation:"Ensayos pequeños y definiciones variables.",url:"https://pubmed.ncbi.nlm.nih.gov/30103531/"},{design:"ECA multicéntrico",n:"457",year:"2022",result:"Recuperación similar frente a control durante 120 horas.",limitation:"No confirma beneficio clínico consistente.",url:"https://pubmed.ncbi.nlm.nih.gov/35397572/"},{design:"Revisión y metaanálisis",n:"Variable",year:"2025",result:"Conclusión favorable, con necesidad de ECA de mayor calidad.",limitation:"Dependencia de estudios previos heterogéneos.",url:"https://pubmed.ncbi.nlm.nih.gov/40381158/"}]
  },
  {
    id:"bc-quad-aad-adult", area:"Gastrointestinal", genus:"Alkalihalobacillus", species:"clausii", strain:"O/C + SIN + N/R + T", former:"Antes: Bacillus clausii", aliases:["B. clausii","O/C","SIN","N/R","T","antibióticos"], condition:"Síntomas gastrointestinales durante antibióticos", conditionShort:"Antibióticos · síntomas GI", keywords:["antibióticos","diarrea","náusea","epigastralgia","Bacillus clausii"], intent:"Coadyuvante", status:"prueba", grade:"baja", gradeLabel:"Baja", interventionType:"Mezcla inseparable de cuatro cepas esporuladas",
    effect:"Un ECA reciente comunica menor carga de síntomas gastrointestinales asociados al antibiótico. Aún no define una reducción fiable de diarrea asociada a antibióticos como desenlace clínico independiente ni justifica uso sistemático.", outcome:"Síntomas gastrointestinales asociados a antibióticos", metric:"ECA favorable; estimación absoluta no disponible en el resumen", absolute:"No estandarizable con la información publicada resumida", nnt:"No estimable", dose:"Pauta no estandarizable para recomendación", doseDetail:"La formulación exacta fue O/C + SIN + N/R + T. La pauta debe verificarse en el texto completo y no extrapolarse a una cepa aislada de B. clausii.", duration:"Durante el antibiótico", population:"Adultos que reciben antibióticos; aplicabilidad depende de antibiótico y riesgo basal.", caveat:"No confundir mejoría sintomática con prevención confirmada de C. difficile o de diarrea clínicamente relevante.",
    studies:[{design:"ECA doble ciego",n:"No especificado en resumen indexado",year:"2025",result:"Mejoría significativa de diarrea, náusea y dolor epigástrico asociados a antibióticos.",limitation:"Un estudio; se requiere replicación y desenlace de diarrea preespecificado.",url:"https://pubmed.ncbi.nlm.nih.gov/40426506/"}]
  }
];

evidence.push(...(window.PROBIOCLIN_V3 || []));
const editorialTranslations = window.PROBIOCLIN_EN || {};
evidence.forEach(item => {
  if (editorialTranslations[item.id]) item.en = {...(item.en || {}), ...editorialTranslations[item.id]};
});

// Disponibilidad pública localizada en México (5 sep 2026). No implica recomendación.
const mexicoStrains = new Set([
  "Saccharomyces|boulardii|CNCM I-745",
  "Lacticaseibacillus|rhamnosus|GG (ATCC 53103)",
  "Bifidobacterium animalis|subsp. lactis|BB-12",
  "Bifidobacterium animalis|subsp. lactis|HN019",
  "Limosilactobacillus|reuteri|DSM 17938",
  "Lacticaseibacillus + Limosilactobacillus|rhamnosus + reuteri|GR-1 + RC-14",
  "Lacticaseibacillus|paracasei|Shirota",
  "Bifidobacterium|longum|35624",
  "Alkalihalobacillus|clausii|O/C + SIN + N/R + T",
  "Lactiplantibacillus|plantarum|PS128",
  "Lactobacillus|acidophilus|DDS-1",
  "Streptococcus|salivarius|K12",
  "Streptococcus|salivarius|M18",
  "Bifidobacterium lactis|BPL1|BPL1",
  "Lactobacillus|casei|KE-99",
  "Lactiplantibacillus|plantarum|299v (DSM 9843)",
  "Bifidobacterium|longum|BB536",
  "Lacticaseibacillus|paracasei|LP-33",
  "Hafnia|alvei|HA4597",
  "Akkermansia|muciniphila|MucT pasteurizada"
]);
function isMexicoAvailable(item) {
  if (item.mexicoAvailable === true) return true;
  const exact = [item.genus,item.species,item.strain].join("|");
  if (mexicoStrains.has(exact)) return true;
  return /HN019|K12|M18|BB-12|BB536|LP-33|HA4597|MucT pasteurizada|35624|DDS-1|Shirota|CNCM I-745|GG \(ATCC 53103\)|DSM 17938|GR-1 \+ RC-14|BPL1|PS128|KE-99|299v/.test([item.genus,item.species,item.strain].join(" "));
}

const state = {mode:"strain", query:"", lang:"es", compareCondition:"", compareIds:[], selectedCondition:""};
const favorites = new Set(JSON.parse(localStorage.getItem("probioindex-favorites") || "[]"));
let recentViews = JSON.parse(localStorage.getItem("probioindex-recent") || "[]");
let syncedLibraryUserId = null;
const compareSelection = [];

function persistLibraryLocally() {
  localStorage.setItem("probioindex-favorites", JSON.stringify([...favorites]));
  localStorage.setItem("probioindex-recent", JSON.stringify(recentViews));
}

function libraryClient() { return window.ProbioAuth?.client || null; }
function librarySession() { return window.ProbioAuth?.getSession?.() || null; }

function localLibraryRows(userId) {
  const rows = new Map();
  const now = Date.now();
  favorites.forEach(recordId => rows.set(recordId, {user_id:userId,record_id:recordId,is_saved:true,updated_at:new Date().toISOString()}));
  recentViews.forEach((recordId,index) => {
    const current = rows.get(recordId) || {user_id:userId,record_id:recordId,is_saved:false};
    current.last_opened_at = new Date(now - index * 1000).toISOString();
    current.updated_at = new Date().toISOString();
    rows.set(recordId,current);
  });
  return [...rows.values()];
}

async function syncLibraryFromAccount(session) {
  const client = libraryClient();
  if (!client || !session?.user) return;
  const userId = session.user.id;
  const localOwner = localStorage.getItem("probioindex-library-owner");
  if (localOwner && localOwner !== userId) {
    favorites.clear();
    recentViews = [];
    persistLibraryLocally();
  }
  const localRows = localOwner ? [] : localLibraryRows(userId);
  if (localRows.length) await client.from("user_library_items").upsert(localRows,{onConflict:"user_id,record_id"});
  const {data,error} = await client.from("user_library_items").select("record_id,is_saved,last_opened_at").eq("user_id",userId).order("last_opened_at",{ascending:false,nullsFirst:false});
  if (error || !data) return;
  favorites.clear();
  data.filter(item=>item.is_saved).forEach(item=>favorites.add(item.record_id));
  recentViews = data.filter(item=>item.last_opened_at).map(item=>item.record_id).slice(0,12);
  syncedLibraryUserId = userId;
  localStorage.setItem("probioindex-library-owner",userId);
  persistLibraryLocally();
  if ($("#infoDialog")?.open) openLibrary();
}

async function syncLibraryItem(recordId, changes) {
  const client = libraryClient(), session = librarySession();
  if (!client || !session?.user) return;
  await client.from("user_library_items").upsert({user_id:session.user.id,record_id:recordId,updated_at:new Date().toISOString(),...changes},{onConflict:"user_id,record_id"});
}

async function clearRemoteRecent(recordIds) {
  const client = libraryClient(), session = librarySession();
  if (!client || !session?.user || !recordIds.length) return;
  await client.from("user_library_items").update({last_opened_at:null,updated_at:new Date().toISOString()}).eq("user_id",session.user.id).in("record_id",recordIds);
}

window.addEventListener("probioindex:authchange", event => {
  const session = event.detail?.session;
  if (!session?.user) { syncedLibraryUserId=null; if (localStorage.getItem("probioindex-library-owner")) { favorites.clear(); recentViews=[]; persistLibraryLocally(); localStorage.removeItem("probioindex-library-owner"); } return; }
  if (syncedLibraryUserId !== session.user.id) syncLibraryFromAccount(session);
});
const latestReview = {date:"2026-09-24",esDate:"24 sep 2026",enDate:"24 Sep 2026",es:"Revisión de productos disponibles en México: se incorporaron BS01, la formulación La-5 + BB-12 y avena con β-glucano; se actualizó la ficha i3.1.",en:"Review of products available in Mexico: BS01, the La-5 + BB-12 formulation, and oat β-glucan were incorporated; the i3.1 record was updated."};
const functionalFoods = [
  {title:"Yogurt natural con cultivos vivos",type:"Lácteo fermentado · cultivos iniciadores",benefit:"Digestión de lactosa en personas con maldigestión de lactosa",effect:"La literatura clínica sobre yogurt con cultivos vivos describe digestión de lactosa durante su consumo en personas con maldigestión de lactosa. La relación corresponde a cultivos vivos en la matriz láctea, no a cualquier yogurt ni a productos calentados después de fermentar.",regimen:"Porción no estandarizada entre estudios; verificar que el alimento declare cultivos vivos",note:"Disponible en México. Esta ficha no identifica una cepa probiótica ni atribuye un resultado a una marca; alergia a proteína de leche y contenido de lactosa siguen siendo relevantes.",url:"https://www.efsa.europa.eu/en/efsajournal/pub/1763"},
  {title:"Kéfir de leche",type:"Leche fermentada tradicional · cultivo mixto",benefit:"Digestión y tolerancia a la lactosa en adultos con maldigestión de lactosa",effect:"Un ensayo aleatorizado por bloques comparó preparaciones de kéfir con leche en adultos con maldigestión de lactosa y reportó menor hidrógeno espirado y menos síntomas tras el consumo de kéfir.",regimen:"Porciones de prueba en una intervención aguda; no define una pauta para otras indicaciones",note:"Disponible en México. La mezcla microbiana, la lactosa residual y la composición nutricional cambian entre preparaciones comerciales y caseras.",url:"https://doi.org/10.1016/S0002-8223(03)00142-4"},
  {title:"Leche fermentada con Lacticaseibacillus paracasei Shirota",type:"Bebida láctea fermentada · cepa declarada",benefit:"Heces duras o fragmentadas",effect:"Un ECA en matriz de bebida fermentada mostró menor persistencia de heces Bristol 1–2. La utilidad clínica se limita a ese desenlace, no a ‘salud intestinal’ general.",regimen:"≈8 × 10⁹ UFC/día durante 28 días",certainty:"Evidencia limitada",note:"Matriz y cepa identificables; la disponibilidad local no convierte cualquier leche fermentada en equivalente.",url:"https://doi.org/10.1016/j.tjnut.2025.02.021"},
  {title:"Yogurt con Lactobacillus acidophilus NCFM + Bifidobacterium lactis HN019 + polidextrosa",type:"Yogurt simbiótico · formulación exacta",benefit:"Estreñimiento crónico",effect:"Un ECA encontró menor tiempo de tránsito colónico a dos semanas frente a yogurt control. El efecto pertenece a la combinación completa: yogurt + polidextrosa + dos cepas.",regimen:"180 mL cada mañana durante 14 días",certainty:"Evidencia limitada",note:"No extrapolar a NCFM, HN019, yogurt o fibra por separado. Aún requiere comprobar una matriz equivalente disponible en México.",url:"https://pubmed.ncbi.nlm.nih.gov/25056655/"},
  {title:"Alimento o bebida con Lactiplantibacillus plantarum 299v",type:"Matriz alimentaria con cepa declarada",benefit:"Absorción de hierro no hemo",effect:"La síntesis específica de Lp299v señala mayor absorción de hierro no hemo. No demuestra corrección de anemia ni sustituye hierro oral o intravenoso indicado.",regimen:"≈1 × 10⁹ UFC con una comida o suplemento de hierro",certainty:"Evidencia limitada",note:"La evidencia procede principalmente de comidas de prueba o preparaciones fermentadas; verificar dosis viable y matriz antes de vincular un alimento comercial.",url:"https://pubmed.ncbi.nlm.nih.gov/31816981/"},
  {title:"Kéfir",type:"Leche fermentada tradicional · cultivo mixto",benefit:"Resistencia a la insulina; estreñimiento funcional",effect:"Un metaanálisis de 6 ECA (314 participantes) encontró menor insulina y HOMA-IR, sin efecto consistente en peso, HbA1c, glucosa en ayuno o lípidos. Un estudio piloto no controlado en 20 personas con estreñimiento sugirió mayor frecuencia y mejor consistencia de heces.",regimen:"ECA: variable; estudio de estreñimiento: 500 mL/día durante 4 semanas",certainty:"Evidencia limitada",note:"La mezcla microbiana y el contenido nutricional cambian entre kéfires. No es tratamiento de diabetes ni de estreñimiento; los hallazgos gastrointestinales requieren ECA confirmatorios.",url:"https://pubmed.ncbi.nlm.nih.gov/37102491/"},
  {title:"Pan de masa madre",type:"Pan fermentado y horneado · sin microorganismos vivos al consumo",benefit:"Respuesta glucémica posprandial",effect:"Una revisión sistemática con metaanálisis de 18 ensayos encontró menor incremento de glucosa a 60 y 120 minutos frente a pan industrial o solución de glucosa. No reportó cambio en insulina en ayuno ni define un efecto terapéutico en diabetes.",regimen:"Una porción de pan comparada en pruebas agudas; varía según harina, formulación y fermentación",note:"Disponible en México. Tras el horneado no debe presentarse como fuente de microorganismos vivos; el resultado se atribuye a la matriz fermentada estudiada.",url:"https://pubmed.ncbi.nlm.nih.gov/35943419/"},
  {title:"Kombucha",type:"Té fermentado · bacterias acéticas, lácticas y levaduras",benefit:"Glucosa en ayuno en diabetes tipo 2",effect:"Un ECA piloto cruzado, doble ciego (n=12) observó descenso de glucosa en ayuno tras 4 semanas frente al valor basal; no aporta certeza suficiente para un desenlace clínico ni para recomendarla como manejo de diabetes.",regimen:"240 mL/día durante 4 semanas",certainty:"Evidencia incipiente",note:"El estudio evaluó una bebida específica, con aproximadamente 1.5% de alcohol. Azúcar residual, acidez, alcohol y microbiota varían ampliamente entre productos y preparaciones caseras.",url:"https://pubmed.ncbi.nlm.nih.gov/37588049/"},
  {title:"Tibicos o kéfir de agua",type:"Bebida fermentada sin lácteos · cultivo mixto",benefit:"Composición de microbiota y síntomas gastrointestinales en adultos sanos",effect:"Un estudio pre–post de 40 adultos sanos evaluó 200 mL/día durante 14 días y reportó cambios en composición de microbiota. Los síntomas se registraron por cuestionario sin desenlace clínico terapéutico ni grupo control.",regimen:"200 mL/día durante 14 días",note:"Disponible en México como tibicos. La preparación doméstica y comercial varía en azúcar residual, alcohol, acidez y comunidad microbiana; esta ficha no representa manejo de una patología.",url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC13197412/"},
  {title:"Chucrut lactofermentado",type:"Vegetal fermentado · matriz rica en fibra",benefit:"Síntomas de síndrome de intestino irritable",effect:"Un ECA piloto doble ciego (n=34) observó mejoría de síntomas a 6 semanas tanto con chucrut pasteurizado como no pasteurizado, sin diferencia entre ellos. Esto no apoya atribuir el efecto a bacterias vivas por sí solas.",regimen:"Suplemento diario durante 6 semanas; la porción no queda estandarizada para práctica clínica",certainty:"Evidencia incipiente",note:"Puede ser relevante la fibra y la matriz vegetal. En SII, valorar tolerancia individual, sodio y carga de FODMAPs; no sustituye un abordaje dietético o farmacológico indicado.",url:"https://pubmed.ncbi.nlm.nih.gov/30256365/"},
  {title:"Kimchi fermentado",type:"Vegetal fermentado tradicional · alto sodio",benefit:"Parámetros cardiometabólicos en sobrepeso",effect:"Un ECA cruzado pequeño (n=22) comparó kimchi fresco frente a fermentado: ambos redujeron peso y grasa corporal; el fermentado mostró mejoras adicionales en relación cintura-cadera y glucosa en ayuno. No confirma efecto de pérdida de peso ni permite separar fermentación, energía, fibra, sodio y patrón dietético.",regimen:"300 g/día durante 4 semanas",certainty:"Evidencia limitada",note:"La dosis es alta y no es directamente transferible. Considerar su carga de sodio y no presentarlo como intervención para obesidad, prediabetes o dislipidemia.",url:"https://pubmed.ncbi.nlm.nih.gov/21745625/"},
  {title:"Tempeh de soya",type:"Soya fermentada · matriz vegetal",benefit:"Perfil lipídico",effect:"Una síntesis reciente de ensayos aleatorizados evaluó consumo de tempeh y reportó cambios en colesterol total, LDL y triglicéridos. Los estudios no permiten separar por completo fermentación, proteína de soya e isoflavonas.",regimen:"Pautas y preparaciones heterogéneas entre ensayos",note:"Disponible en México principalmente en comercios especializados y venta electrónica. La ficha corresponde a tempeh de soya, no a alimentos de soya no fermentados ni a suplementos aislados.",url:"https://doi.org/10.1016/j.nexres.2026.102173"},
  {title:"Patrón alimentario alto en fermentados variados",type:"Intervención dietética mixta · no producto individual",benefit:"Diversidad de microbiota y marcadores inflamatorios en adultos sanos",effect:"Un ECA de 10 semanas comparó dieta rica en fermentados diversos con dieta alta en fibra. El grupo de fermentados aumentó la diversidad microbiana y redujo múltiples proteínas inflamatorias; no demuestra beneficio terapéutico de un alimento específico ni manejo de una patología.",regimen:"Aumento gradual hasta 6 porciones/día; 4 semanas de escalamiento y 6 de mantenimiento",certainty:"Evidencia limitada",note:"Incluyó yogurt, kéfir, cottage cheese fermentado, kombucha y vegetales fermentados. Es una señal sobre un patrón dietético en adultos sanos, no una prescripción universal ni una equivalencia entre productos.",url:"https://pubmed.ncbi.nlm.nih.gov/34256014/"}
  ,{title:"Avena integral con β-glucano",type:"Cereal integral · fibra soluble",benefit:"Colesterol LDL en adultos con hipercolesterolemia o dislipidemia",effect:"Un metaanálisis de ensayos aleatorizados reportó menor colesterol LDL y colesterol total con β-glucano de avena en dosis de al menos 3 g/día. Una síntesis más reciente de ensayos con avena completa o β-glucano aislado también reportó cambios en LDL.",regimen:"≥3 g/día de β-glucano de avena; verificar el aporte por porción de la matriz elegida",note:"Disponible en México. La ficha corresponde al β-glucano de avena y no a cualquier cereal saborizado o preparado de avena; no sustituye la valoración ni el tratamiento indicado para dislipidemia.",url:"https://pubmed.ncbi.nlm.nih.gov/25411276/"}
];
const functionalFoodsEn = [
  {title:"Plain yogurt with live cultures",type:"Fermented dairy · starter cultures",benefit:"Lactose digestion in people with lactose maldigestion",effect:"Clinical literature on yogurt with live cultures describes lactose digestion during consumption in people with lactose maldigestion. The relation belongs to live cultures in a dairy matrix, not to every yogurt or to products heated after fermentation.",regimen:"Serving is not standardized across studies; verify that the food declares live cultures",note:"Available in Mexico. This record does not identify a probiotic strain or assign an outcome to a brand; milk-protein allergy and lactose content remain relevant."},
  {title:"Milk kefir",type:"Traditional fermented milk · mixed culture",benefit:"Lactose digestion and tolerance in adults with lactose maldigestion",effect:"A randomized block trial compared kefir preparations with milk in adults with lactose maldigestion and reported lower breath hydrogen and fewer symptoms after kefir consumption.",regimen:"Test servings in an acute intervention; it does not establish a regimen for other contexts",note:"Available in Mexico. Microbial mix, residual lactose and nutritional composition vary between commercial and homemade preparations."},
  {title:"Fermented milk with Lacticaseibacillus paracasei Shirota",type:"Fermented dairy drink · declared strain",benefit:"Hard or lumpy stools",effect:"An RCT in a fermented-drink matrix found less persistence of Bristol type 1–2 stools. Clinical usefulness is limited to that endpoint, not general ‘gut health’.",regimen:"≈8 × 10⁹ CFU/day for 28 days",certainty:"Limited evidence",note:"Matrix and strain are identifiable; local availability does not make every fermented milk equivalent."},
  {title:"Yogurt with Lactobacillus acidophilus NCFM + Bifidobacterium lactis HN019 + polydextrose",type:"Synbiotic yogurt · exact formulation",benefit:"Chronic constipation",effect:"An RCT found shorter colonic transit time at two weeks than with control yogurt. The effect belongs to the entire combination: yogurt + polydextrose + two strains.",regimen:"180 mL each morning for 14 days",certainty:"Limited evidence",note:"Do not extrapolate to NCFM, HN019, yogurt, or fiber separately. An equivalent matrix available in Mexico still needs confirmation."},
  {title:"Food or beverage with Lactiplantibacillus plantarum 299v",type:"Food matrix with declared strain",benefit:"Non-heme iron absorption",effect:"The Lp299v-specific synthesis signals greater non-heme iron absorption. It does not demonstrate correction of anemia and does not replace indicated oral or intravenous iron.",regimen:"≈1 × 10⁹ CFU with a meal or iron supplement",certainty:"Limited evidence",note:"Evidence mainly comes from test meals or fermented preparations; verify viable dose and matrix before linking a commercial food."},
  {title:"Kefir",type:"Traditional fermented milk · mixed culture",benefit:"Insulin resistance; functional constipation",effect:"A meta-analysis of 6 RCTs (314 participants) found lower insulin and HOMA-IR, with no consistent effect on weight, HbA1c, fasting glucose, or lipids. An uncontrolled pilot in 20 people with constipation suggested increased stool frequency and better consistency.",regimen:"RCTs: variable; constipation study: 500 mL/day for 4 weeks",certainty:"Limited evidence",note:"Microbial mix and nutritional content vary across kefirs. It is not a diabetes or constipation treatment; gastrointestinal findings need confirmatory RCTs."},
  {title:"Sourdough bread",type:"Fermented and baked bread · no live microorganisms at consumption",benefit:"Postprandial glycemic response",effect:"A systematic review and meta-analysis of 18 trials found a lower glucose increment at 60 and 120 minutes versus industrial bread or glucose solution. It did not report a change in fasting insulin or establish a therapeutic effect in diabetes.",regimen:"One bread serving in acute comparison tests; it varies by flour, formulation and fermentation",note:"Available in Mexico. After baking it should not be presented as a source of live microorganisms; the result belongs to the studied fermented matrix."},
  {title:"Kombucha",type:"Fermented tea · acetic/lactic bacteria and yeasts",benefit:"Fasting glucose in type 2 diabetes",effect:"A double-blind randomized crossover pilot (n=12) observed lower fasting glucose after 4 weeks compared with baseline; it is far too small to establish a clinical outcome or support kombucha as diabetes management.",regimen:"240 mL/day for 4 weeks",certainty:"Emerging evidence",note:"The study tested one specific beverage, containing about 1.5% alcohol. Residual sugar, acidity, alcohol, and microbiota vary substantially across products and home preparations."},
  {title:"Tibicos or water kefir",type:"Non-dairy fermented drink · mixed culture",benefit:"Microbiota composition and gastrointestinal symptoms in healthy adults",effect:"A pre–post study of 40 healthy adults evaluated 200 mL/day for 14 days and reported microbiota-composition changes. Symptoms were recorded by questionnaire, without a therapeutic clinical outcome or control group.",regimen:"200 mL/day for 14 days",note:"Available in Mexico as tibicos. Homemade and commercial preparations vary in residual sugar, alcohol, acidity and microbial community; this record does not represent disease management."},
  {title:"Lacto-fermented sauerkraut",type:"Fermented vegetable · fiber-rich matrix",benefit:"Irritable bowel syndrome symptoms",effect:"A double-blind pilot RCT (n=34) found symptom improvement at 6 weeks with both pasteurized and unpasteurized sauerkraut, without a difference between them. This does not support assigning the effect to live bacteria alone.",regimen:"Daily supplement for 6 weeks; serving is not standardized for clinical practice",certainty:"Emerging evidence",note:"Fiber and the vegetable matrix may matter. In IBS, consider individual tolerance, sodium, and FODMAP load; it does not replace indicated dietary or pharmacologic care."},
  {title:"Fermented kimchi",type:"Traditional fermented vegetable · high sodium",benefit:"Cardiometabolic parameters in overweight",effect:"A small crossover RCT (n=22) compared fresh versus fermented kimchi: both lowered weight and body fat; fermented kimchi had additional changes in waist-to-hip ratio and fasting glucose. It does not confirm a weight-loss effect or disentangle fermentation, energy, fiber, sodium, and dietary pattern.",regimen:"300 g/day for 4 weeks",certainty:"Limited evidence",note:"This is a high dose and is not directly transferable. Consider sodium load; do not present it as an obesity, prediabetes, or dyslipidemia intervention."},
  {title:"Soy tempeh",type:"Fermented soy · plant matrix",benefit:"Lipid profile",effect:"A recent synthesis of randomized trials evaluated tempeh consumption and reported changes in total cholesterol, LDL cholesterol and triglycerides. The studies cannot fully separate fermentation, soy protein and isoflavones.",regimen:"Regimens and preparations were heterogeneous across trials",note:"Available in Mexico mainly through specialty retailers and online sales. This record applies to soy tempeh, not non-fermented soy foods or isolated supplements."},
  {title:"High-variety fermented-food dietary pattern",type:"Mixed dietary intervention · not one individual product",benefit:"Microbiome diversity and inflammatory markers in healthy adults",effect:"A 10-week RCT compared a diet rich in diverse fermented foods with a high-fiber diet. The fermented-food arm increased microbial diversity and reduced multiple inflammatory proteins; it does not establish a therapeutic benefit of any one food or disease management.",regimen:"Gradual increase to 6 servings/day; 4-week ramp-up and 6-week maintenance",certainty:"Limited evidence",note:"It included yogurt, kefir, fermented cottage cheese, kombucha, and fermented vegetables. This is a dietary-pattern signal in healthy adults, not a universal prescription or product equivalence."}
  ,{title:"Whole oats with β-glucan",type:"Whole grain · soluble fiber",benefit:"LDL cholesterol in adults with hypercholesterolemia or dyslipidemia",effect:"A meta-analysis of randomized trials reported lower LDL and total cholesterol with oat β-glucan at doses of at least 3 g/day. A more recent synthesis of trials of whole oats or isolated β-glucan also reported LDL changes.",regimen:"≥3 g/day of oat β-glucan; verify the amount supplied by the chosen food matrix",note:"Available in Mexico. This record belongs to oat β-glucan, not to every flavored oat cereal or preparation; it does not replace clinical evaluation or indicated dyslipidemia treatment."}
];
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const normalize = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const italicName = item => item.displayName || `<i>${item.genus} ${item.species}</i> ${item.strain}`;
const micrographCatalog = {
  lactobacilli: {
    image:"https://upload.wikimedia.org/wikipedia/commons/a/af/Lactobacilli_%28Gram_stain%29.jpg",
    source:"https://commons.wikimedia.org/wiki/File:Lactobacilli_(Gram_stain).jpg",
    es:{title:"Lactobacilos", technique:"Tinción de Gram · imagen representativa"},
    en:{title:"Lactobacilli", technique:"Gram stain · representative image"}
  },
  bifidobacterium: {
    image:"https://upload.wikimedia.org/wikipedia/commons/3/35/Bifidobacterium_adolescentis_Gram.jpg",
    source:"https://commons.wikimedia.org/wiki/File:Bifidobacterium_adolescentis_Gram.jpg",
    es:{title:"Bifidobacterium", technique:"Tinción de Gram · imagen representativa"},
    en:{title:"Bifidobacterium", technique:"Gram stain · representative image"}
  },
  saccharomyces: {
    image:"https://upload.wikimedia.org/wikipedia/commons/d/d9/S_cerevisiae_under_DIC_microscopy.jpg",
    source:"https://commons.wikimedia.org/wiki/File:S_cerevisiae_under_DIC_microscopy.jpg",
    es:{title:"Saccharomyces", technique:"Microscopía DIC · imagen representativa"},
    en:{title:"Saccharomyces", technique:"DIC microscopy · representative image"}
  },
  akkermansia: {
    image:"https://upload.wikimedia.org/wikipedia/commons/3/3e/Scanning_electronic_micrograph_of_Akkermansia_muciniphila.png",
    source:"https://commons.wikimedia.org/wiki/File:Scanning_electronic_micrograph_of_Akkermansia_muciniphila.png",
    es:{title:"Akkermansia muciniphila", technique:"Microscopía electrónica de barrido"},
    en:{title:"Akkermansia muciniphila", technique:"Scanning electron microscopy"}
  },
  bacillus: {
    image:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Bacillus_subtilis_Gram.jpg",
    source:"https://commons.wikimedia.org/wiki/File:Bacillus_subtilis_Gram.jpg",
    es:{title:"Bacillus", technique:"Tinción de Gram · imagen representativa"},
    en:{title:"Bacillus", technique:"Gram stain · representative image"}
  },
  enterococcus: {
    image:"https://upload.wikimedia.org/wikipedia/commons/5/52/Entercoccus_sp2_lores.jpg",
    source:"https://commons.wikimedia.org/wiki/File:Entercoccus_sp2_lores.jpg",
    es:{title:"Enterococcus", technique:"Microscopía óptica · imagen representativa"},
    en:{title:"Enterococcus", technique:"Light microscopy · representative image"}
  },
  escherichia: {
    image:"https://upload.wikimedia.org/wikipedia/commons/b/bc/E_coli_at_10000x%2C_original.jpg",
    source:"https://commons.wikimedia.org/wiki/File:E_coli_at_10000x,_original.jpg",
    es:{title:"Escherichia coli", technique:"Microscopía electrónica · imagen representativa"},
    en:{title:"Escherichia coli", technique:"Electron microscopy · representative image"}
  }
};
function micrographFor(item){
  const text = `${item.genus||""} ${item.species||""}`.toLowerCase();
  if(text.includes("akkermansia")) return micrographCatalog.akkermansia;
  if(text.includes("saccharomyces")) return micrographCatalog.saccharomyces;
  if(text.includes("bifidobacterium")) return micrographCatalog.bifidobacterium;
  if(text.includes("weizmannia") || text.includes("bacillus") || text.includes("alkalihalobacillus")) return micrographCatalog.bacillus;
  if(text.includes("enterococcus")) return micrographCatalog.enterococcus;
  if(text.includes("escherichia")) return micrographCatalog.escherichia;
  if(text.includes("lactobacillus") || text.includes("lacticaseibacillus") || text.includes("lactiplantibacillus") || text.includes("limosilactobacillus")) return micrographCatalog.lactobacilli;
  return null;
}
function micrographPanel(item){
  const micrograph = micrographFor(item);
  if(!micrograph) return "";
  const copy = state.lang === "en" ? micrograph.en : micrograph.es;
  const exact = text => text.includes("Akkermansia") ? (state.lang === "en" ? "Image of the exact species" : "Imagen de la especie exacta") : (state.lang === "en" ? "Representative genus/species image; it does not identify the exact strain in this record." : "Imagen representativa de género/especie; no identifica la cepa exacta de esta ficha.");
  return `<figure class="micrograph-panel"><img src="${micrograph.image}" alt="${copy.technique}: ${copy.title}" loading="lazy"><figcaption><span>${state.lang === "en" ? "MICROGRAPH" : "MICROGRAFÍA"}</span><strong>${copy.title}</strong><small>${copy.technique}</small><p>${exact(copy.title)}</p><a href="${micrograph.source}" target="_blank" rel="noopener">${state.lang === "en" ? "View source and license" : "Ver fuente y licencia"} ↗</a></figcaption></figure>`;
}
function microbeIcon(item){
  const text = `${item.genus||""} ${item.species||""}`.toLowerCase();
  if (text.includes("akkermansia")) return `<svg class="card-microbe microbe-akk" viewBox="0 0 28 28" aria-hidden="true"><path d="M5 19c3-8 4-13 9-13 5 0 4 8 9 7"/><circle cx="5" cy="19" r="2.3"/><circle cx="23" cy="13" r="2.3"/><path d="M9 22h10"/></svg>`;
  if (text.includes("saccharomyces")) return `<svg class="card-microbe microbe-yeast" viewBox="0 0 28 28" aria-hidden="true"><circle cx="10" cy="12" r="5"/><circle cx="18" cy="18" r="6"/><circle cx="20" cy="7" r="2.2"/><path d="M7 23c4-2 10-2 14 0"/></svg>`;
  if (text.includes("bifidobacterium")) return `<svg class="card-microbe microbe-bifido" viewBox="0 0 28 28" aria-hidden="true"><path d="M14 24V14M14 15 7 8M14 15l7-8M14 10 10 4M14 10l4-6"/><circle cx="7" cy="8" r="2"/><circle cx="21" cy="8" r="2"/></svg>`;
  if (text.includes("bacillus") || text.includes("weizmannia")) return `<svg class="card-microbe microbe-bacillus" viewBox="0 0 28 28" aria-hidden="true"><rect x="3" y="9" width="20" height="9" rx="4.5"/><circle cx="8" cy="13.5" r="1.3"/><circle cx="18" cy="13.5" r="1.3"/><path d="M7 21h14"/></svg>`;
  if (text.includes("streptococcus")) return `<svg class="card-microbe microbe-strep" viewBox="0 0 28 28" aria-hidden="true"><circle cx="7" cy="14" r="4"/><circle cx="14" cy="9" r="4"/><circle cx="21" cy="14" r="4"/><circle cx="14" cy="20" r="4"/></svg>`;
  if (text.includes("escherichia")) return `<svg class="card-microbe microbe-e-coli" viewBox="0 0 28 28" aria-hidden="true"><rect x="4" y="9" width="19" height="9" rx="4.5"/><path d="M6 12 3 9M7 16l-4 3M20 11l4-3M21 16l4 3"/><circle cx="10" cy="13.5" r="1"/><circle cx="17" cy="13.5" r="1"/></svg>`;
  if (text.includes("hafnia")) return `<svg class="card-microbe microbe-hafnia" viewBox="0 0 28 28" aria-hidden="true"><path d="M5 17c0-6 4-9 9-9s9 3 9 9-4 6-9 6-9 0-9-6Z"/><path d="M8 20c2-2 9-2 12 0"/><circle cx="10" cy="14" r="1"/><circle cx="18" cy="14" r="1"/></svg>`;
  if (text.includes("formulaci") || text.includes(" + ")) return `<svg class="card-microbe microbe-mix" viewBox="0 0 28 28" aria-hidden="true"><circle cx="9" cy="10" r="4"/><rect x="13" y="15" width="11" height="6" rx="3"/><circle cx="20" cy="8" r="3"/></svg>`;
  return `<svg class="card-microbe microbe-lacto" viewBox="0 0 28 28" aria-hidden="true"><rect x="3" y="10" width="19" height="8" rx="4"/><circle cx="8" cy="14" r="1.3"/><circle cx="17" cy="14" r="1.3"/><path d="M8 22h13"/></svg>`;
}
const safetyFor = item => item.kind === "yeast" ? yeastSafety : bacterialSafety;
const safetyForEnglish = item => item.kind === "yeast" ? yeastSafetyEn : bacterialSafetyEn;
const english = {"Metodología":"Methodology","Alimentos funcionales":"Functional foods","Limpiar":"Clear","Filtrar evidencia":"Filter evidence","Disponibilidad":"Availability","Disponible en México":"Available in Mexico","Available in Mexico":"Disponible en México","Área clínica":"Clinical area","Certeza":"Certainty","Objetivo":"Intent","Intent":"Objetivo","Población":"Population","Population":"Población","Adultos":"Adults","Adults":"Adultos","Pediatría":"Pediatrics","Pediatrics":"Pediatría","Prevención":"Prevention","Tratamiento":"Treatment","Coadyuvante":"Adjunct","Considerar":"Consider","Prueba monitorizada":"Monitored trial","No rutinario":"Not routine","Evidencia insuficiente":"Insufficient evidence","Evitar":"Avoid","Moderada":"Moderate","Baja":"Low","Muy baja":"Very low","relaciones clínicas":"clinical relations","Vista general":"Overview","Dosis estudiada":"Studied dose","Duración":"Duration","Desenlace":"Outcome","Tipo de intervención":"Intervention type","Pauta y población de la evidencia":"Evidence regimen and population","Estudios determinantes":"Key studies","Contraindicaciones y precauciones":"Contraindications and precautions","Efectos adversos e interacciones":"Adverse effects and interactions","Límite de interpretación":"Interpretation limit","Microorganismo vivo":"Live microorganism","Gastrointestinal":"Gastrointestinal","EII y pouchitis":"IBD and pouchitis","Salud urogenital":"Urogenital health","Salud oral":"Oral health","Hepatología":"Hepatology","Metabolismo y composición corporal":"Metabolism and body composition","Salud mental":"Mental health","Alergología e inmunología":"Allergy and immunology","Neurología y cognición":"Neurology and cognition","Seguridad":"Safety","Gastroenteritis aguda":"Acute gastroenteritis","Antibióticos · pediatría":"Antibiotics · pediatrics","Cólico del lactante":"Infant colic","Prematuros · enterocolitis":"Preterm infants · NEC","Estreñimiento":"Constipation","SII · síntomas globales":"IBS · global symptoms","Después de antibióticos":"After antibiotics","H. pylori · tolerabilidad":"H. pylori · tolerability"};
const pediatricEnglish = {"Diarrea asociada a antibióticos en niños":"Antibiotic-associated diarrhea in children","Prevención de enterocolitis necrosante en prematuros":"Prevention of necrotizing enterocolitis in preterm infants","Gastroenteritis aguda pediátrica":"Acute pediatric gastroenteritis","Evidencia favorable":"Favorable evidence","Evidencia limitada":"Limited evidence","Evidencia incipiente":"Emerging evidence","Información insuficiente":"Insufficient information","Señal favorable":"Favorable signal","Resultados mixtos":"Mixed results","Sin beneficio consistente":"No consistent benefit","Señal de daño":"Signal of harm","Puede considerarse":"May be considered","No recomendado por ahora":"Not recommended for now","Evitar en este contexto":"Avoid in this context"};
const tx = value => state.lang === "en" ? (english[value] || pediatricEnglish[value] || value) : value;
const localize = (item, field) => state.lang === "en" && item.en && item.en[field] ? item.en[field] : item[field];
const clinicalField = value => String(value || "").replace(/;?\s*(en adultos aislados, )?el efecto fue impreciso\.?/gi, "").replace(/;?\s*(in adults considered separately, )?the effect was imprecise\.?/gi, "").trim();
const favorableStudyPattern = /redu|menor|menos|mejor|mayor|aument|remisi|respuesta|respond|favorable|superior|alivi|recurr|resoluci|curaci|cultivo|absorci|señal adicional|or\s*1\.|rr\s*0\.|or\s*0\.|hr\s*0\.|nnt|90%|42\.9%|36\.4%|g\s*0\./i;
const nonEfficacyPattern = /no reduj|no mejor|recuperación similar|similar frente|no demost|no alcanz|primarios negativos|negativ|did not|no effect|no significant|recovery similar|describe fungemia|sin recomendación/i;
const isMetaAnalysis = study => /meta(?:análisis|-analysis)|revisión sistemática|systematic review/i.test(study.design || "");
const isRandomizedTrial = study => /\bECA\b|\bRCT\b|randomi[sz]/i.test(study.design || "");
const isSafetyStudy = study => /seguridad|safety|farmacovigilancia/i.test(study.design || "");
const isFavorableStudy = study => favorableStudyPattern.test(study.result || "") && !nonEfficacyPattern.test(study.result || "");
const studyPriority = study => isMetaAnalysis(study) ? 0 : isRandomizedTrial(study) ? 1 : 2;
const efficacyStudyIndexes = item => (item.studies || [])
  .map((study,index)=>({study,index}))
  .filter(({study}) => !isSafetyStudy(study) && (isMetaAnalysis(study) || isFavorableStudy(study)))
  .sort((a,b) => studyPriority(a.study) - studyPriority(b.study) || Number(b.study.year || 0) - Number(a.study.year || 0))
  .map(({index})=>index);
const localizedStudies = item => {
  const studies = state.lang === "en" && item.en && item.en.studies ? item.en.studies : item.studies;
  return efficacyStudyIndexes(item).map(index => studies[index]).filter(Boolean);
};
const citationMetadataCache = new Map();

function decodeCitationText(value) {
  const element = document.createElement("textarea");
  element.innerHTML = value || "";
  return element.value.replace(/\s+/g," ").trim();
}

function studyDoi(study) {
  const match = String(study.url || "").match(/(?:doi\.org\/|doi:\s*)(10\.\S+)/i);
  return match ? match[1].replace(/[),.;]+$/g,"") : "";
}

function studyPmid(study) {
  const match = String(study.url || "").match(/pubmed\.ncbi\.nlm\.nih\.gov\/(\d+)/i);
  return match ? match[1] : "";
}

function citationYear(value, fallback) {
  const parts = value?.["date-parts"]?.[0];
  return parts?.[0] || fallback || "n.d.";
}

function formatAuthors(authors = [], style = "apa") {
  if (!authors.length) return "";
  const normalized = authors.map(author => ({family:author.family || author.name || "", given:author.given || ""})).filter(author=>author.family);
  if (style === "vancouver") return normalized.slice(0,6).map(author => `${author.family} ${author.given.split(/[\s-]+/).filter(Boolean).map(name=>name[0]).join("")}`).join(", ") + (normalized.length > 6 ? ", et al." : ".");
  const formatted = normalized.slice(0,20).map(author => `${author.family}, ${author.given.split(/[\s-]+/).filter(Boolean).map(name=>`${name[0]}.`).join(" ")}`);
  if (formatted.length === 1) return `${formatted[0]}.`;
  if (normalized.length > 20) return `${formatted.slice(0,19).join(", ")}, … ${formatted[19]}.`;
  return `${formatted.slice(0,-1).join(", ")}, & ${formatted.at(-1)}.`;
}

async function resolveCitationMetadata(study) {
  const key = studyDoi(study) || studyPmid(study) || study.url;
  if (citationMetadataCache.has(key)) return citationMetadataCache.get(key);
  const request = (async () => {
    const doi = studyDoi(study), pmid = studyPmid(study);
    try {
      if (doi) {
        const response = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`);
        if (!response.ok) throw new Error("Crossref unavailable");
        const message = (await response.json()).message;
        return {authors:message.author || [],title:decodeCitationText(message.title?.[0]),journal:decodeCitationText(message["container-title"]?.[0]),year:citationYear(message["published-print"] || message.published || message.issued,study.year),volume:message.volume || "",issue:message.issue || "",pages:message.page || message["article-number"] || "",doi:message.DOI || doi,url:`https://doi.org/${message.DOI || doi}`};
      }
      if (pmid) {
        const response = await fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${encodeURIComponent(pmid)}&retmode=json`);
        if (!response.ok) throw new Error("PubMed unavailable");
        const record = (await response.json()).result?.[pmid];
        const doiId = record?.articleids?.find(item=>item.idtype === "doi")?.value || "";
        return {authors:record?.authors || [],title:decodeCitationText(record?.title),journal:decodeCitationText(record?.fulljournalname || record?.source),year:(record?.pubdate || study.year || "").match(/\d{4}/)?.[0] || study.year,volume:record?.volume || "",issue:record?.issue || "",pages:record?.pages || record?.elocationid || "",doi:doiId,url:doiId ? `https://doi.org/${doiId}` : study.url};
      }
    } catch (_) { /* The original publication link remains available below. */ }
    return {authors:[],title:"",journal:"",year:study.year || "",volume:"",issue:"",pages:"",doi:"",url:study.url};
  })();
  citationMetadataCache.set(key,request);
  return request;
}

function citationText(metadata, style) {
  if (!metadata.title || !metadata.journal) return "";
  const authors = formatAuthors(metadata.authors,style);
  const journalPart = `${metadata.journal}${metadata.volume ? `, ${metadata.volume}` : ""}${metadata.issue ? `(${metadata.issue})` : ""}${metadata.pages ? `, ${metadata.pages}` : ""}`;
  if (style === "vancouver") return `${authors} ${metadata.title}. ${metadata.journal}. ${metadata.year}${metadata.volume ? `;${metadata.volume}` : ""}${metadata.issue ? `(${metadata.issue})` : ""}${metadata.pages ? `:${metadata.pages}` : ""}.${metadata.doi ? ` doi:${metadata.doi}` : ""}`.replace(/\s+/g," ").trim();
  return `${authors} (${metadata.year}). ${metadata.title}. ${journalPart}.${metadata.doi ? ` https://doi.org/${metadata.doi}` : ` ${metadata.url}`}`.replace(/\s+/g," ").trim();
}

async function copyStudyCitation(study, style, button) {
  const labels = state.lang === "en" ? {loading:"Preparing…",copied:"Copied",unavailable:"Source link copied"} : {loading:"Preparando…",copied:"Copiada",unavailable:"Enlace copiado"};
  const original = button.textContent;
  button.textContent = labels.loading; button.disabled = true;
  const metadata = await resolveCitationMetadata(study);
  const text = citationText(metadata,style) || metadata.url || study.url;
  try { await navigator.clipboard.writeText(text); } catch (_) { const area=document.createElement("textarea"); area.value=text; area.style.position="fixed"; area.style.opacity="0"; document.body.appendChild(area); area.select(); document.execCommand("copy"); area.remove(); }
  button.textContent = citationText(metadata,style) ? labels.copied : labels.unavailable;
  setTimeout(()=>{button.textContent=original;button.disabled=false;},1600);
}

function preloadStudyCitations(studies) { studies.forEach(study=>resolveCitationMetadata(study)); }
const relationStudyTypes = item => new Set(efficacyStudyIndexes(item).map(index => {
  const study = item.studies[index];
  return isMetaAnalysis(study) ? "meta" : isRandomizedTrial(study) ? "rct" : "other";
}));
const recordUrl = item => {
  const url = new URL(window.location.href);
  url.searchParams.set("record", item.id);
  if (state.lang === "en") url.searchParams.set("lang", "en"); else url.searchParams.delete("lang");
  return url.toString();
};
const evidenceWithEfficacy = evidence.filter(item => (item.studies || []).some(study => !isSafetyStudy(study) && isFavorableStudy(study)));
const neutralValue = value => {
  if (!value) return "";
  return /resultados mixtos|mixed results|señal|signal|sin beneficio|no consistent benefit|no compensa|no confirmad|not confirmed|no estandarizable|not standardizable|no estimable|not estimable|no aplica|not applicable|no aplicable|no disponible|not available|no publicado|not published|sin estimación|without estimate|diferencia favorable|favorable difference|resultado primario no significativo|primary outcome not significant/i.test(value) ? "" : value;
};
const reportedResult = item => {
  const lead = localizedStudies(item)[0];
  if (!lead) return "";
  const n = lead.n && !/variable|no especificado/i.test(lead.n) ? `, n=${lead.n}` : "";
  return `${lead.design}${n}, ${lead.year}: ${lead.result}`;
};
const ageGroup = item => item.ageGroup || "adult";
function editorialFor(item) {
  return {
    update: state.lang === "en" ? latestReview.en : latestReview.es
  };
}
function applyLanguage() {
  document.documentElement.lang = state.lang;
  window.ProbioAuth?.setLanguage(state.lang);
  $("#methodButton").textContent = state.lang === "en" ? "Methodology" : "Metodología";
  $("#changesButton").textContent = state.lang === "en" ? "What's new" : "Novedades";
  $("#languageButton").textContent = state.lang === "en" ? "Español" : "English";
  $("#mainTitle").textContent = state.lang === "en" ? "Probiotics and functional foods, with evidence in context." : "Probióticos y alimentos funcionales, con la evidencia en contexto.";
  $(".lede").textContent = state.lang === "en" ? "Find the strain studied for each condition, review the indications linked to a strain, or explore the potential benefits of functional foods." : "Encuentra la cepa estudiada para cada condición, revisa las indicaciones asociadas a una cepa o explora los posibles beneficios de alimentos funcionales.";
  $("#searchInput").placeholder = state.lang === "en" ? (state.mode === "condition" ? "Search IBS, pouchitis, vaginosis…" : state.mode === "strain" ? "Search L. plantarum, 299v, LGG…" : state.mode === "compare" ? "Choose two strains to compare" : "Browse food matrices with evidence") : (state.mode === "condition" ? "Busca SII, pouchitis, vaginosis…" : state.mode === "strain" ? "Busca L. plantarum, 299v, LGG…" : state.mode === "compare" ? "Elige dos cepas para comparar" : "Explora las matrices alimentarias con evidencia");
  $(".last-updated").innerHTML = state.lang === "en" ? `Last updated: <time datetime="${latestReview.date}">${latestReview.enDate}</time>` : `Última actualización: <time datetime="${latestReview.date}">${latestReview.esDate}</time>`;
  $(".quick-links span").textContent = state.lang === "en" ? "Explore" : "Explorar";
  $$(".quick-links button").forEach(button => { const labels = {"antibióticos":["After antibiotics","Después de antibióticos"],"síndrome de intestino irritable":["IBS","SII"],"estreñimiento":["Constipation","Estreñimiento"],"pouchitis":["Pouchitis","Pouchitis"],"vaginosis":["Vaginosis","Vaginosis"],"periodontitis":["Periodontitis","Periodontitis"],"Helicobacter":["H. pylori","H. pylori"],"adiposidad":["Adiposity","Adiposidad"]}; button.textContent = labels[button.dataset.query][state.lang==="en"?0:1]; });
  const pulses = $$(".database-pulse span");
  if (pulses[0]) pulses[0].lastChild.textContent = state.lang === "en" ? " curated relations" : " relaciones curadas";
  if (pulses[1]) pulses[1].lastChild.textContent = state.lang === "en" ? " exact strains or formulations" : " cepas o formulaciones exactas";
  if (pulses[2]) pulses[2].lastChild.textContent = state.lang === "en" ? " clinical contexts" : " contextos clínicos";
  $("#filterToggle span").textContent = state.lang === "en" ? "Filter evidence" : "Filtrar evidencia"; $("#clearFilters").textContent = state.lang === "en" ? "Clear" : "Limpiar";
  $$(".mode-switch button")[0].textContent = state.lang === "en" ? "Strain → condition" : "Cepa → condición";
  $$(".mode-switch button")[1].textContent = state.lang === "en" ? "Condition → strain" : "Condición → cepa";
  $$(".mode-switch button")[2].textContent = state.lang === "en" ? "Functional foods" : "Alimentos funcionales";
  $$(".mode-switch button")[3].textContent = state.lang === "en" ? "Compare strains" : "Comparar cepas";
  const areaLabels = {Gastrointestinal:"Gastrointestinal","EII y pouchitis":"IBD and pouchitis","Salud urogenital":"Urogenital health","Salud oral":"Oral health","Hepatología":"Hepatology","Metabolismo y composición corporal":"Metabolism and body composition","Salud mental":"Mental health","Alergología e inmunología":"Allergy and immunology","Neurología y cognición":"Neurology and cognition","Seguridad":"Safety","Pediatría":"Pediatrics"};
  $$('input[name="area"]').forEach(x=>x.parentElement.lastChild.textContent = state.lang==="en" ? areaLabels[x.value] : x.value);
  const intentLabels = {Prevención:"Prevention",Tratamiento:"Treatment",Coadyuvante:"Adjunct"};
  $$('input[name="intent"]').forEach(x=>x.parentElement.lastChild.textContent = state.lang==="en" ? intentLabels[x.value] : x.value);
  $$("legend").forEach(x=>x.textContent=tx(x.textContent));
  $$('input[name="population"]').forEach(x=>x.parentElement.lastChild.textContent=tx(x.value==="adult"?"Adultos":"Pediatría"));
  $$('input[name="availability"]').forEach(x=>x.parentElement.querySelector(".filter-label").textContent=state.lang === "en" ? "Available in Mexico" : "Disponible en México");
  const studyTypeLabels = {meta:["Meta-analyses","Metaanálisis"],rct:["RCTs","ECA"],other:["Other studies","Otros estudios"]};
  $$("input[name='studyType']").forEach(x=>x.parentElement.lastChild.textContent=studyTypeLabels[x.value][state.lang==="en"?0:1]);
  const legendLabels = ["Población","Disponibilidad","Tipo de estudio","Área clínica","Objetivo"];
  $$('legend').forEach((x,i)=>{ if (legendLabels[i]) x.textContent = state.lang === "en" ? (legendLabels[i] === "Tipo de estudio" ? "Study type" : tx(legendLabels[i])) : legendLabels[i]; });
  $(".legend").innerHTML = `<span class="dot"></span>${state.lang === "en" ? "Independent clinical editorial review" : "Revisión editorial clínica independiente"}`;
  $$("footer p")[0].textContent = state.lang === "en" ? "Clinical decision-support tool for health professionals. It does not replace clinical judgment, diagnosis, or individualized treatment." : "Herramienta de apoyo para profesionales de la salud. No sustituye juicio clínico, diagnóstico ni tratamiento individualizado.";
  $$("footer p")[1].innerHTML = state.lang === "en" ? `Last editorial review: <time datetime="${latestReview.date}">${latestReview.enDate}</time>` : `Última revisión editorial: <time datetime="${latestReview.date}">${latestReview.esDate}</time>`;
  $("#emptyState h3").textContent = state.lang === "en" ? "No exact relation found" : "No encontramos una relación exacta";
  $("#emptyState p").textContent = state.lang === "en" ? "Try another condition, review strain spelling, or switch to Spanish for the full current catalog. We do not infer efficacy from species alone." : "Prueba con otra condición o revisa la ortografía de la cepa. No inferimos eficacia desde la especie.";
  $("#resetSearch").textContent = state.lang === "en" ? "View all available evidence" : "Ver toda la evidencia";
  render();
}

function searchableText(item) {
  const primary = state.mode === "condition"
    ? [item.condition,item.conditionShort,item.en?.condition,item.en?.conditionShort,...(item.keywords||[])]
    : [item.genus,item.species,item.strain,...(item.aliases||[]),item.former||""];
  return searchKey(primary.join(" "));
}

// These aliases only help find an existing exact record; they never extend
// evidence from one strain to another strain or to a whole species.
const searchSynonymGroups = [
  ["sii", "ibs", "síndrome de intestino irritable", "irritable bowel syndrome"],
  ["sii-c", "ibs-c", "sii con estreñimiento", "ibs with constipation"],
  ["sii-d", "ibs-d", "sii con diarrea", "ibs with diarrhea"],
  ["aad", "diarrea asociada a antibióticos", "diarrea por antibióticos", "antibiotic-associated diarrhea"],
  ["cdi", "clostridioides difficile", "clostridium difficile", "c difficile"],
  ["geca", "gastroenteritis aguda", "acute gastroenteritis"],
  ["nec", "enterocolitis necrosante", "necrotizing enterocolitis"],
  ["h pylori", "helicobacter pylori", "helicobacter"],
  ["vaginosis", "vaginosis bacteriana", "bacterial vaginosis"],
  ["colico del lactante", "cólico del lactante", "colico infantil", "infant colic"],
  ["disbiosis", "dysbiosis", "microbiota alterada"],
  ["sibo", "sobrecrecimiento bacteriano", "small intestinal bacterial overgrowth"],
  ["eii", "ibd", "enfermedad inflamatoria intestinal", "inflammatory bowel disease"],
  ["pouchitis", "reservoritis"],
  ["estreñimiento", "constipación", "constipation"],
  ["diarrea", "diarrhea"],
  ["resfriado", "infecciones respiratorias altas", "upper respiratory infection", "uri"],
  ["lgg", "lactobacillus rhamnosus gg", "lacticaseibacillus rhamnosus gg", "atcc 53103"],
  ["299v", "lp299v", "l plantarum 299v", "lactiplantibacillus plantarum 299v", "dsm 9843"],
  ["35624", "b infantis 35624", "bifidobacterium infantis 35624", "bifidobacterium longum 35624"],
  ["cncm i 745", "s boulardii", "saccharomyces boulardii", "s boulardii cncm i 745"],
  ["dsm 17938", "l reuteri dsm 17938", "reuteri 17938"],
  ["gr 1", "gr1", "l rhamnosus gr 1"],
  ["rc 14", "rc14", "l reuteri rc 14"],
  ["hn019", "b lactis hn019", "bifidobacterium animalis subsp lactis hn019"],
  ["bb 12", "bb12", "bifidobacterium animalis bb 12"],
  ["bb536", "bifidobacterium longum bb536"],
  ["bpl1", "bpl1 ht", "cect 8145"],
  ["shirota", "l casei shirota", "lacticaseibacillus paracasei shirota"],
  ["k12", "m18", "streptococcus salivarius"],
  ["ncfm", "nc fm", "l acidophilus ncfm"],
  ["bi 07", "bi07"],
  ["dr7", "l paracasei dr7"],
  ["ps128", "l plantarum ps128"],
  ["ke 99", "ke99"],
  ["ha4597", "hafnia alvei ha4597"],
  ["muct", "muct pasteurizada", "akkermansia muciniphila muct"]
];

function searchKey(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
}

function expandedSearchTerms(query) {
  const key = searchKey(query);
  const expanded = [key];
  searchSynonymGroups.forEach(group => {
    const terms = group.map(searchKey);
    if (terms.some(term => key.includes(term) || term.includes(key))) expanded.push(...terms);
  });
  return [...new Set(expanded.filter(Boolean))];
}

function matchesSearch(item, query) {
  const haystack = searchableText(item);
  return expandedSearchTerms(query).some(term => haystack.includes(term));
}

function clinicalArea(item) {
  if (item.area) return item.area;
  if (item.status === "evitar" || item.id.includes("safety") || item.id.includes("icu")) return "Seguridad";
  return "Gastrointestinal";
}

function activeValues(name) { return $$(`input[name="${name}"]:checked`).map(input => input.value); }
function updateFilterSummary() {
  const constraints = Number(activeValues("availability").includes("mexico")) + Number(activeValues("population").length < 2) + Number(activeValues("studyType").length < 3) + Number(activeValues("intent").length < 3) + Number(activeValues("area").length < $$('input[name="area"]').length);
  $("#filterToggle span").textContent = `${state.lang === "en" ? "Filters" : "Filtros"}${constraints ? ` (${constraints})` : ""}`;
}

function render() {
  document.body.classList.remove("compare-mode");
  updateFilterSummary();
  if (state.mode === "compare") { renderComparePage(); return; }
  if (state.mode === "foods") { renderFunctionalFoods(); return; }
  $(".workspace").classList.remove("foods-view","compare-view"); $(".filters").hidden=false;
  $(".results-header h2").lastChild.textContent = state.lang === "en" ? " clinical relations" : " relaciones clínicas";
  const q = searchKey(state.query.trim());
  const intents = activeValues("intent");
  const areas = activeValues("area");
  const populations = activeValues("population");
  const availability = activeValues("availability");
  const studyTypes = activeValues("studyType");
  const filtered = evidenceWithEfficacy.filter(item => {
    const itemTypes = relationStudyTypes(item);
    return (state.lang !== "en" || item.en) && (!q || matchesSearch(item,q)) && intents.includes(item.intent) && areas.includes(clinicalArea(item)) && populations.includes(ageGroup(item)) && studyTypes.some(type=>itemTypes.has(type)) && (!availability.includes("mexico") || isMexicoAvailable(item));
  });
  if (state.mode === "condition") { renderConditionIndex(filtered, q); return; }
  $("#resultCount").textContent = filtered.length;
  $("#resultContext").textContent = state.query ? (state.lang==="en" ? `Results for “${state.query}”` : `Resultados para “${state.query}”`) : (state.lang==="en" ? "Overview" : "Vista general");
  const note = $("#translationNote");
  note.hidden = state.lang !== "en";
  if (state.lang === "en") note.textContent = "English edition: only clinically reviewed translations are shown. Remaining records stay available in Spanish while their editorial translation is completed.";
  $("#results").innerHTML = filtered.map(item => `
    <button class="evidence-card" data-id="${item.id}" aria-label="Abrir ficha de ${item.genus} ${item.species} ${item.strain}">
      <span class="card-strain">${microbeIcon(item)}<strong>${italicName(item)}</strong><small>${state.lang==="en" ? (item.en?.interventionType || "Strain-level identification") : (item.interventionType || item.former || "Identificación a nivel de cepa")}</small></span>
      <span class="card-data"><span>${localize(item,"conditionShort")}</span><small>${tx(clinicalArea(item))} · ${tx(item.intent)}</small></span>
      <span class="card-data duration"><span>${localize(item,"dose")}</span><small>${localize(item,"duration")}</small></span>
      <span class="arrow" aria-hidden="true">→</span>
    </button>`).join("");
  $("#emptyState").hidden = filtered.length > 0;
  $("#results").hidden = filtered.length === 0;
  $$(".evidence-card").forEach(card => card.addEventListener("click", () => openDetail(card.dataset.id)));
}

function renderConditionIndex(items, query) {
  const en = state.lang === "en";
  const groups = new Map();
  items.forEach(item => {
    const key = item.condition;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  });
  const entries = [...groups.entries()].map(([id, records]) => ({
    id,
    label: localize(records[0], "condition"),
    records,
    strains: [...new Map(records.map(item => [`${item.genus}|${item.species}|${item.strain}`, item])).values()]
  })).sort((a,b) => a.label.localeCompare(b.label, state.lang));
  if (state.selectedCondition && !groups.has(state.selectedCondition)) state.selectedCondition = "";
  $("#resultCount").textContent = entries.length;
  $("#resultContext").textContent = state.query ? (en ? `Conditions for “${state.query}”` : `Condiciones para “${state.query}”`) : (en ? "Browse by condition" : "Explorar por condición");
  $(".results-header h2").lastChild.textContent = en ? " clinical conditions" : " condiciones clínicas";
  const note = $("#translationNote");
  note.hidden = state.lang !== "en";
  if (state.lang === "en") note.textContent = "English edition: only clinically reviewed translations are shown. Remaining records stay available in Spanish while their editorial translation is completed.";
  $("#results").innerHTML = entries.map(group => {
    const open = state.selectedCondition === group.id;
    const areas = [...new Set(group.records.map(clinicalArea))].map(tx).join(" · ");
    return `<article class="condition-card ${open ? "open" : ""}">
      <button class="condition-card-trigger" data-condition="${group.id}" aria-expanded="${open}">
        <span><small>${en ? "CLINICAL CONDITION" : "CONDICIÓN CLÍNICA"}</small><strong>${group.label}</strong><em>${group.strains.length} ${en ? (group.strains.length === 1 ? "strain with a record" : "strains with records") : (group.strains.length === 1 ? "cepa con ficha" : "cepas con ficha")}</em></span>
        <span class="condition-meta">${areas}<b aria-hidden="true">${open ? "−" : "+"}</b></span>
      </button>
      ${open ? `<div class="condition-strains" aria-label="${en ? "Associated strains" : "Cepas asociadas"}">${group.strains.map(item => `<button class="condition-strain" data-id="${item.id}">${microbeIcon(item)}<span><strong>${italicName(item)}</strong><small>${localize(item,"dose")} · ${localize(item,"duration")}</small></span><b aria-hidden="true">→</b></button>`).join("")}</div>` : ""}
    </article>`;
  }).join("");
  $("#emptyState").hidden = entries.length > 0;
  $("#results").hidden = entries.length === 0;
  $$(".condition-card-trigger").forEach(button => button.addEventListener("click", () => {
    state.selectedCondition = state.selectedCondition === button.dataset.condition ? "" : button.dataset.condition;
    render();
  }));
  $$(".condition-strain").forEach(button => button.addEventListener("click", () => openDetail(button.dataset.id)));
}

function renderComparePage() {
  const en = state.lang === "en";
  document.body.classList.add("compare-mode");
  $(".workspace").classList.remove("foods-view"); $(".workspace").classList.add("compare-view"); $(".filters").hidden=true;
  $("#translationNote").hidden=true; $("#resultContext").textContent = en ? "Compare two strain-level records" : "Compara dos fichas a nivel de cepa";
  const unique = [...new Map(evidenceWithEfficacy.map(x => [x.id, x])).values()];
  const groupedConditions = new Map();
  unique.forEach(item => { const items = groupedConditions.get(item.condition) || []; items.push(item); groupedConditions.set(item.condition, items); });
  const conditions = [...groupedConditions.entries()].filter(([,items]) => new Set(items.map(item => `${item.genus}|${item.species}|${item.strain}`)).size >= 2).map(([id,items]) => ({id,label:localize(items[0],"condition"),items}));
  const selectedCondition = conditions.find(item => item.id === state.compareCondition);
  const options = selectedCondition ? [...new Map(selectedCondition.items.map(item => [`${item.genus}|${item.species}|${item.strain}`, item])).values()] : [];
  const selected = {A: options.find(item => item.id === state.compareIds[0]) || null, B: options.find(item => item.id === state.compareIds[1]) || null};
  $("#resultCount").textContent = options.length || conditions.length; $(".results-header h2").lastChild.textContent = en ? " comparable records" : " fichas comparables";
  $("#emptyState").hidden=true; $("#results").hidden=false;
  const select = (id,label,items,value="",placeholder="") => `<div class="compare-picker"><label for="${id}">${label}</label><select id="${id}"><option value="">${placeholder}</option>${items.map(item=>`<option value="${item.id}" ${item.id===value?"selected":""}>${item.label}</option>`).join("")}</select></div>`;
  const strainItems = options.map(item => ({id:item.id,label:`${item.genus} ${item.species} ${item.strain}`}));
  $("#results").innerHTML = `<section class="compare-workspace"><div><span class="eyebrow">${en?"STRAIN COMPARATOR":"COMPARADOR DE CEPAS"}</span><h3>${en?"Compare strains in one indication":"Compara cepas en una misma indicación"}</h3><p>${en?"Choose an indication, then select two strains with a record in that exact clinical context.":"Elige una indicación y después dos cepas con una ficha en ese contexto clínico exacto."}</p></div><div class="compare-condition">${select("compareConditionSelect",en?"Clinical indication":"Indicación clínica",conditions,state.compareCondition,en?"Choose an indication":"Elige una indicación")}</div>${selectedCondition ? `<div class="compare-context"><span>${en?"Selected indication":"Indicación seleccionada"}</span><strong>${selectedCondition.label}</strong><small>${en?`${options.length} strains available`:`${options.length} cepas disponibles`}</small></div><div class="compare-selects">${select("compareA",en?"First strain":"Primera cepa",strainItems,selected.A?.id||"",en?"Choose a strain":"Elige una cepa")}${select("compareB",en?"Second strain":"Segunda cepa",strainItems,selected.B?.id||"",en?"Choose a strain":"Elige una cepa")}</div><button class="primary-cta" id="runCompare">${en?"Compare strains":"Comparar cepas"}</button><p class="compare-hint" id="compareHint"></p>` : `<p class="compare-hint">${en?"Only indications with at least two strain-level records are shown.":"Solo se muestran indicaciones con al menos dos fichas de cepa."}</p>`}</section>`;
  $("#compareConditionSelect").addEventListener("change", event => { state.compareCondition=event.target.value; state.compareIds=[]; renderComparePage(); });
  if (!selectedCondition) return;
  const updateStrain = (index, value) => { if(value && state.compareIds[1-index]===value){$("#compareHint").textContent=en?"Choose two different strains.":"Elige dos cepas distintas."; return;} state.compareIds[index]=value||null; renderComparePage(); };
  $("#compareA").addEventListener("change", event => updateStrain(0,event.target.value));
  $("#compareB").addEventListener("change", event => updateStrain(1,event.target.value));
  $("#runCompare").addEventListener("click",()=>{const [a,b]=state.compareIds; if(!a||!b||a===b){$("#compareHint").textContent=en?"Select two different strains for this indication.":"Selecciona dos cepas distintas para esta indicación."; return;} compareSelection.length=0; compareSelection.push(a,b); openCompare(state.compareIds);});
}

function renderFunctionalFoods() {
  const en = state.lang === "en";
  document.body.classList.remove("compare-mode");
  $(".workspace").classList.add("foods-view"); $(".workspace").classList.remove("compare-view"); $(".filters").hidden=true;
  $("#translationNote").hidden=true;
  $("#resultContext").textContent=en ? "Food matrix × intervention × outcome" : "Matriz alimentaria × intervención × desenlace";
  $("#resultCount").textContent=functionalFoods.length;
  $(".results-header h2").lastChild.textContent=en ? " functional-food records" : " alimentos funcionales";
  $("#emptyState").hidden=true; $("#results").hidden=false;
  $("#results").innerHTML=`<div class="functional-food-grid">${functionalFoods.map((food,index)=>{const item=en?{...food,...functionalFoodsEn[index]}:food;return `<article class="functional-food-card"><span class="food-card-type">${item.type}</span><h3>${item.title}</h3><div class="food-benefit"><small>${en?"Studied outcome":"Desenlace estudiado"}</small><strong>${item.benefit}</strong></div><div class="food-reported-result"><small>${en?"Reported result":"Resultado reportado"}</small><p>${item.effect}</p></div><dl><div><dt>${en?"Studied serving / regimen":"Porción o pauta estudiada"}</dt><dd>${item.regimen}</dd></div></dl><p class="food-note">${item.note}</p><a href="${food.url}" target="_blank" rel="noopener">${en?"Open publication":"Abrir publicación"} ↗</a></article>`}).join("")}</div>`;
}

function updateSuggestions() {
  const box = $("#suggestions");
  const q = searchKey(state.query.trim());
  if (q.length < 2) { box.classList.remove("visible"); box.innerHTML=""; return; }
  const labels = [...new Set(evidenceWithEfficacy.filter(x => (state.lang !== "en" || x.en) && matchesSearch(x,q)).map(x => state.mode === "condition" ? localize(x,"condition") : `${x.genus} ${x.species} ${x.strain}`))].slice(0,5);
  box.innerHTML = labels.map(label => `<button>${label}</button>`).join("");
  box.classList.toggle("visible", labels.length > 0);
  box.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    state.query=button.textContent; $("#searchInput").value=state.query; box.classList.remove("visible"); render();
    document.querySelector(".workspace").scrollIntoView({behavior:"smooth",block:"start"});
  }));
}

function openDetail(id, syncUrl = true) {
  const item = evidenceWithEfficacy.find(x => x.id === id);
  if (!item) return;
  const safety = safetyFor(item);
  const safetyEn = safetyForEnglish(item);
  const adverse = item.adverse || safety.adverse;
  const avoid = item.avoid || safety.avoid;
  const interactions = item.interactions || safety.interactions;
  const dialog = $("#detailDialog");
  dialog.classList.remove("reading-mode");
  recentViews = [item.id, ...recentViews.filter(viewedId => viewedId !== item.id)].slice(0, 12);
  persistLibraryLocally();
  syncLibraryItem(item.id,{last_opened_at:new Date().toISOString()});
  const primaryResult = reportedResult(item);
  const effectEstimate = neutralValue(localize(item,"metric"));
  const absoluteResult = neutralValue(localize(item,"absolute"));
  const nntResult = neutralValue(item.nnt);
  const numericResults = [
    effectEstimate && `<div><small>${state.lang==="en"?"Reported estimate":"Estimación reportada"}</small><strong>${effectEstimate}</strong></div>`,
    absoluteResult && `<div><small>${state.lang==="en"?"Absolute result":"Resultado absoluto"}</small><strong>${absoluteResult}</strong></div>`,
    nntResult && `<div><small>NNT / NNH</small><strong>${nntResult}</strong></div>`
  ].filter(Boolean).join("");
  $("#detailContent").innerHTML = `
    <div class="detail-head">
      <div class="detail-toolbar"><span>${tx(clinicalArea(item))} · ${tx(item.intent)} · ${tx(ageGroup(item)==="pediatric"?"Pediatría":"Adultos")}</span><button data-close aria-label="${state.lang==="en"?"Close":"Cerrar"}">×</button></div>
      <div class="detail-actions"><button class="detail-action" id="favoriteDetail">${favorites.has(item.id)?(state.lang==="en"?"Saved":"Guardada"):(state.lang==="en"?"Save":"Guardar")}</button><button class="detail-action" id="compareDetail">${state.lang==="en"?"Compare":"Comparar"}</button><button class="detail-action" id="readingDetail">${state.lang==="en"?"Reading":"Lectura"}</button><button class="detail-action" id="shareDetail">${state.lang==="en"?"Share":"Compartir"}</button><button class="detail-action" id="printDetail">${state.lang==="en"?"Share PDF":"Compartir PDF"}</button><button class="detail-action" id="downloadPdfDetail">${state.lang==="en"?"Download PDF":"Descargar PDF"}</button></div>
      <h2>${italicName(item)}</h2><p>${localize(item,"condition")}</p>
    </div>
    <div class="detail-body">
      ${micrographPanel(item)}
      <div class="clinical-callout"><span class="section-kicker">${state.lang==="en"?"PRIMARY STUDY RESULT":"RESULTADO PRINCIPAL DEL ESTUDIO"}</span><p>${primaryResult}</p><small>${state.lang==="en"?"Study-level information; not a recommendation or evidence grade.":"Información a nivel de estudio; no constituye recomendación ni graduación de la evidencia."}</small></div>
      ${numericResults ? `<div class="effect-panel neutral-results">${numericResults}</div>` : ""}
      <section class="clinical-summary"><div class="summary-heading"><span>${state.lang==="en"?"CLINICAL SNAPSHOT":"RESUMEN CLÍNICO"}</span><p>${state.lang==="en"?"Who was studied, how the intervention was used, and what was measured.":"En quién se estudió, cómo se utilizó la intervención y qué se midió."}</p></div>
      <div class="detail-grid primary-grid">
        <div class="detail-stat"><small>${state.lang==="en"?"Studied population":"Población estudiada"}</small><strong>${clinicalField(localize(item,"population"))}</strong></div>
        <div class="detail-stat"><small>${state.lang==="en"?"Studied dose":"Dosis estudiada"}</small><strong>${localize(item,"dose")}</strong></div>
        <div class="detail-stat"><small>${state.lang==="en"?"Duration":"Duración"}</small><strong>${localize(item,"duration")}</strong></div>
        <div class="detail-stat"><small>${state.lang==="en"?"Measured outcome":"Desenlace evaluado"}</small><strong>${localize(item,"outcome")}</strong></div>
      </div>
      </section>
      <section class="detail-section regimen-section"><h3>${state.lang==="en"?"Intervention details":"Detalle de la intervención"}</h3><dl class="regimen-list"><div><dt>${state.lang==="en"?"Intervention":"Intervención"}</dt><dd>${localize(item,"interventionType") || (state.lang==="en"?"Live microorganism":"Microorganismo vivo")}</dd></div><div><dt>${state.lang==="en"?"Regimen and context":"Pauta y contexto"}</dt><dd>${localize(item,"doseDetail")}</dd></div></dl></section>
      <section class="detail-section"><h3>${state.lang==="en"?"Linked studies":"Estudios vinculados"}</h3><p class="study-order-note">${state.lang==="en"?"Meta-analyses are shown first, followed by randomized trials and other favorable studies.":"Se muestran primero los metaanálisis, después los ECA y, por último, otros estudios con resultados favorables."}</p><div class="study-table-wrap"><table class="study-table"><thead><tr><th>${state.lang==="en"?"Design":"Diseño"}</th><th>N / ${state.lang==="en"?"year":"año"}</th><th>${state.lang==="en"?"Reported result":"Resultado reportado"}</th></tr></thead><tbody>${localizedStudies(item).map((study, index) => `<tr><td><a href="${study.url}" target="_blank" rel="noopener">${study.design} ↗</a><span class="citation-actions"><button class="copy-citation" data-citation="${index}" data-style="apa">APA</button><button class="copy-citation" data-citation="${index}" data-style="vancouver">Vancouver</button></span></td><td>${study.n}<br><small>${study.year}</small></td><td>${study.result}</td></tr>`).join("")}</tbody></table></div></section>
      <section class="detail-section"><h3>${state.lang==="en"?"Contraindications and precautions":"Contraindicaciones y precauciones"}</h3><ul>${(state.lang==="en" ? (item.en?.avoid || safetyEn.avoid) : avoid).map(x=>`<li>${x}</li>`).join("")}</ul></section>
      <section class="detail-section"><h3>${state.lang==="en"?"Adverse effects and interactions":"Efectos adversos e interacciones"}</h3><ul>${(state.lang==="en" ? (item.en?.adverse || safetyEn.adverse) : adverse).map(x=>`<li>${x}</li>`).join("")}</ul><p><strong>${state.lang==="en"?"Interactions:":"Interacciones:"}</strong> ${state.lang==="en" ? (localize(item,"interactions") || safetyEn.interactions) : interactions}</p></section>
      <section class="detail-section editorial-section">
        <div class="editorial-heading"><div><span>${state.lang==="en"?"Documentary update":"Actualización documental"}</span><h3>${editorialFor(item).update}</h3></div><time datetime="${latestReview.date}">${state.lang==="en"?latestReview.enDate:latestReview.esDate}</time></div>
        <p class="editorial-independence">${state.lang==="en"?"The record presents published study data without assigning a grade or clinical recommendation. Funding or sponsorship does not determine inclusion or wording.":"La ficha presenta datos publicados sin asignar una graduación ni una recomendación clínica. El financiamiento o patrocinio no determina la inclusión ni la redacción."}</p>
      </section>
    </div>`;
  dialog.querySelector("[data-close]").addEventListener("click", () => dialog.close());
  dialog.querySelector("#favoriteDetail").addEventListener("click", () => { if(favorites.has(item.id)) favorites.delete(item.id); else favorites.add(item.id); persistLibraryLocally(); syncLibraryItem(item.id,{is_saved:favorites.has(item.id)}); dialog.querySelector("#favoriteDetail").textContent=favorites.has(item.id)?(state.lang==="en"?"Saved":"Guardada"):(state.lang==="en"?"Save":"Guardar"); });
  dialog.querySelector("#compareDetail").addEventListener("click", () => { state.mode="compare"; state.compareCondition=item.condition; state.compareIds=[item.id,null]; dialog.close(); $$(".mode-switch button").forEach(button=>{const active=button.dataset.mode==="compare";button.classList.toggle("active",active);button.setAttribute("aria-selected",String(active));}); render(); document.querySelector(".workspace").scrollIntoView({behavior:"smooth",block:"start"}); });
  dialog.querySelector("#readingDetail").addEventListener("click", () => { const isReading = dialog.classList.toggle("reading-mode"); dialog.querySelector("#readingDetail").textContent = isReading ? (state.lang==="en"?"Standard view":"Vista estándar") : (state.lang==="en"?"Reading":"Lectura"); });
  dialog.querySelector("#shareDetail").addEventListener("click", async () => { const url=recordUrl(item); const title=`ProbioIndex · ${item.genus} ${item.species} ${item.strain}`; if(navigator.share){try{await navigator.share({title,text:localize(item,"condition"),url});return;}catch(error){if(error.name==="AbortError")return;}} await navigator.clipboard.writeText(url); dialog.querySelector("#shareDetail").textContent=state.lang==="en"?"Link copied":"Enlace copiado"; });
  dialog.querySelector("#printDetail").addEventListener("click", () => exportRecord(item, "share"));
  dialog.querySelector("#downloadPdfDetail").addEventListener("click", () => exportRecord(item, "download"));
  const visibleStudies = localizedStudies(item);
  preloadStudyCitations(visibleStudies);
  dialog.querySelectorAll(".copy-citation").forEach(button => button.addEventListener("click", () => copyStudyCitation(visibleStudies[Number(button.dataset.citation)],button.dataset.style,button)));
  if (syncUrl) history.pushState({record:item.id}, "", recordUrl(item));
  if (!dialog.open) dialog.showModal();
}

function exportRecord(item, action = "share") {
  const en = state.lang === "en";
  const winAnsi = value => String(value || "").normalize("NFC").replace(/[–—]/g,"-").replace(/[“”]/g,'"').replace(/[‘’]/g,"'").replace(/[^\x20-\xFF]/g," ").replace(/[\\()]/g,"\\$&");
  const wrap = (value, width = 78) => winAnsi(value).split(/\s+/).reduce((lines, word) => { const last = lines.at(-1); if (!last || `${last} ${word}`.length > width) lines.push(word); else lines[lines.length - 1] = `${last} ${word}`; return lines; }, []);
  const rows = [
    {role:"title", text:`${item.genus} ${item.species} ${item.strain}`},
    ...wrap(localize(item,"condition"), 64).map(text=>({role:"subtitle",text})), {role:"space"},
    {role:"section", text:en?"STUDY REGIMEN":"PAUTA ESTUDIADA"},
    ...wrap(`${en?"Dose":"Dosis"}: ${localize(item,"dose")}`, 72).map(text=>({role:"key",text})),
    ...wrap(`${en?"Duration":"Duración"}: ${localize(item,"duration")}`, 72).map(text=>({role:"key",text})),
    ...wrap(`${en?"Outcome":"Desenlace"}: ${localize(item,"outcome")}`, 72).map(text=>({role:"key",text})),
    {role:"space"}, {role:"section", text:en?"LINKED STUDIES":"ESTUDIOS VINCULADOS"}
  ];
  localizedStudies(item).forEach(study => {
    rows.push({role:"study",text:`${study.design} · ${study.year}`});
    wrap(study.result).forEach(text=>rows.push({role:"body",text}));
    wrap(study.url, 82).forEach(text=>rows.push({role:"link",text}));
    rows.push({role:"space"});
  });
  rows.push({role:"section",text:en?"EDITORIAL NOTE":"NOTA EDITORIAL"}, ...wrap(en?"ProbioIndex presents published study data without a clinical recommendation.":"ProbioIndex presenta datos publicados sin una recomendación clínica.").map(text=>({role:"note",text})));
  const pages = []; let page = [], used = 0;
  rows.forEach(row => { const height = row.role === "title" ? 32 : row.role === "section" ? 25 : row.role === "space" ? 8 : row.role === "key" ? 19 : 15; if (used + height > 600 && page.length) { pages.push(page); page=[]; used=0; } page.push(row); used += height; }); if (page.length) pages.push(page);
  const command = (font,size,color,x,y,text) => `${color} rg BT /${font} ${size} Tf ${x} ${y} Td (${winAnsi(text)}) Tj ET`;
  const streams = pages.map((rowsOnPage,pageIndex) => { let y=676; const commands=["0.03 0.37 0.29 rg 0 720 612 72 re f", command("F2",13,"1 1 1",42,764,"ProbioIndex"), command("F1",9,"0.84 0.95 0.91",42,744,en?"Clinical study record":"Ficha clínica de estudio")]; rowsOnPage.forEach(row => { if(row.role === "space"){y-=8;return;} if(row.role === "section"){commands.push("0.91 0.97 0.94 rg 38 "+(y-14)+" 536 20 re f",command("F2",9,"0.03 0.37 0.29",48,y-1,row.text));y-=28;return;} if(row.role === "key"){commands.push("0.95 0.98 0.97 rg 38 "+(y-14)+" 536 17 re f",command("F1",10,"0.08 0.23 0.20",48,y-1,row.text));y-=21;return;} const config={title:["F2",18,"0.03 0.18 0.15",24],subtitle:["F1",11,"0.22 0.39 0.35",16],study:["F2",11,"0.03 0.37 0.29",18],body:["F1",10,"0.10 0.20 0.18",15],link:["F1",8,"0.02 0.45 0.36",12],note:["F1",9,"0.29 0.40 0.36",14]}[row.role]; commands.push(command(config[0],config[1],config[2],48,y,row.text));y-=config[3]; }); commands.push("0.78 0.87 0.83 RG 38 34 m 574 34 l S",command("F1",8,"0.35 0.47 0.43",48,20,`ProbioIndex · ${pageIndex+1}/${pages.length}`)); return commands.join("\n"); });
  const objects = ["<< /Type /Catalog /Pages 2 0 R >>", `<< /Type /Pages /Kids [${streams.map((_, index) => `${5 + index * 2} 0 R`).join(" ")}] /Count ${streams.length} >>`, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>", "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>"];
  streams.forEach((stream,index)=>objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${6 + index * 2} 0 R >>`,`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`));
  let pdf = "%PDF-1.4\n"; const offsets = [0]; objects.forEach((object,index)=>{offsets.push(pdf.length);pdf += `${index+1} 0 obj\n${object}\nendobj\n`;}); const xref=pdf.length; pdf+=`xref\n0 ${objects.length+1}\n0000000000 65535 f \n${offsets.slice(1).map(offset=>`${String(offset).padStart(10,"0")} 00000 n \n`).join("")}trailer\n<< /Size ${objects.length+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  const filename = `probioindex-${item.strain.replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"")}.pdf`;
  const bytes = new Uint8Array([...pdf].map(character=>character.charCodeAt(0)));
  const file = new File([bytes], filename, {type:"application/pdf"});
  const finishDownload = () => { const url = URL.createObjectURL(file); const link = document.createElement("a"); link.href = url; link.download = filename; document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1500); };
  if (action === "share" && navigator.canShare?.({files:[file]}) && navigator.share) navigator.share({files:[file]}).catch(error => { if (error.name !== "AbortError") finishDownload(); }); else finishDownload();
}

function openLibrary() {
  const en = state.lang === "en";
  const synced = Boolean(librarySession()?.user);
  const byId = id => evidenceWithEfficacy.find(item => item.id === id);
  const list = ids => ids.map(byId).filter(Boolean).map(item => `<button class="library-record" data-record="${item.id}">${microbeIcon(item)}<span><strong>${italicName(item)}</strong><small>${localize(item,"condition")}</small></span><b>→</b></button>`).join("");
  const saved = [...favorites];
  $("#infoContent").innerHTML = `<div class="info-kicker">${en?"PERSONAL WORKSPACE":"ESPACIO PERSONAL"}</div><h2>${en?"My library":"Mi biblioteca"}</h2><p class="library-intro">${synced ? (en?"Saved and recent records are synced with your professional account. No clinical searches are shared with sponsors.":"Las fichas guardadas y recientes se sincronizan con tu cuenta profesional. No se comparten búsquedas clínicas con patrocinadores.") : (en?"Saved and recent records stay on this device until you sign in.":"Las fichas guardadas y recientes permanecen en este dispositivo hasta que inicies sesión.")}</p><div class="library-columns"><section><div class="library-title"><h3>${en?"Saved":"Guardadas"}</h3><span>${saved.length}</span></div>${saved.length ? list(saved) : `<p class="library-empty">${en?"Save a record to create your first collection.":"Guarda una ficha para crear tu primera colección."}</p>`}</section><section><div class="library-title"><h3>${en?"Recent":"Recientes"}</h3>${recentViews.length ? `<button id="clearRecent" class="library-clear">${en?"Clear":"Limpiar"}</button>` : ""}</div>${recentViews.length ? list(recentViews) : `<p class="library-empty">${en?"Opened records will appear here.":"Aquí aparecerán las fichas que abras."}</p>`}</section></div>`;
  const dialog = $("#infoDialog");
  if (!dialog.open) dialog.showModal();
  $("#infoContent").querySelectorAll("[data-record]").forEach(button => button.addEventListener("click", () => { dialog.close(); openDetail(button.dataset.record); }));
  $("#clearRecent")?.addEventListener("click", () => { const removed=[...recentViews]; recentViews = []; persistLibraryLocally(); clearRemoteRecent(removed); openLibrary(); });
}

function openCompare(selectedIds = state.compareIds){
  const items=selectedIds.map(id=>evidenceWithEfficacy.find(x=>x.id===id)).filter(Boolean), en=state.lang==="en";
  if(items.length!==2) return;
  const studyLinks=x=>localizedStudies(x).slice(0,3).map(s=>`<a href="${s.url}" target="_blank" rel="noopener">${s.year} · ${s.design} ↗</a>`).join("");
  const rows=[
    [en?"Condition":"Indicación",...items.map(x=>localize(x,"condition")||"—")],
    [en?"Population":"Población",...items.map(x=>localize(x,"population")||"—")],
    [en?"Studied dose":"Dosis estudiada",...items.map(x=>localize(x,"dose")||"—")],
    [en?"Duration":"Duración",...items.map(x=>localize(x,"duration")||"—")],
    [en?"Outcome":"Desenlace",...items.map(x=>localize(x,"outcome")||"—")],
    [en?"Reported result":"Resultado reportado",...items.map(x=>reportedResult(x)||"—")],
    [en?"Linked studies":"Estudios vinculados",...items.map(studyLinks)],
    [en?"Safety reported":"Seguridad reportada",...items.map(x=>(en?(x.en?.adverse||safetyForEnglish(x).adverse):(x.adverse||safetyFor(x).adverse)).join(" · "))]
  ];
  $("#compareContent").innerHTML=`<div class="detail-head"><div class="detail-toolbar"><span>${en?"Strain comparison":"Comparación de cepas"}</span><button data-close aria-label="${en?"Close":"Cerrar"}">×</button></div><h2>${en?"Same clinical indication":"Misma indicación clínica"}</h2><p>${localize(items[0],"condition")}</p></div><div class="comparison-table-wrap"><table class="comparison-table"><thead><tr><th>${en?"Field":"Campo"}</th>${items.map(x=>`<th>${italicName(x)}</th>`).join("")}</tr></thead><tbody>${rows.map(row=>`<tr><th>${row[0]}</th><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}</tbody></table></div><div class="compare-footer"><button class="primary-action" id="clearCompare">${en?"Start another comparison":"Nueva comparación"}</button></div>`;
  $("#compareContent [data-close]").addEventListener("click",()=>$("#compareDialog").close()); $("#clearCompare").addEventListener("click",()=>{state.compareIds=[];compareSelection.length=0;$("#compareDialog").close();renderComparePage();}); $("#compareDialog").showModal();
}

function openInfo(type) {
  if (type === "changes") {
    const en = state.lang === "en";
    $("#infoContent").innerHTML = `<div class="info-kicker">${en?"RELEASE HISTORY":"HISTORIAL DE CAMBIOS"}</div><h2>${en?"What's new in ProbioIndex":"Novedades de ProbioIndex"}</h2><div class="change-log"><article><time datetime="2026-09-17">17 ${en?"Sep":"sep"} 2026</time><h3>${en?"Clinical navigation update":"Actualización de navegación clínica"}</h3><ul><li>${en?"Strain comparator added as a primary workspace.":"Comparador de cepas incorporado como espacio principal."}</li><li>${en?"Shareable record links, evidence timelines and study-type filters added.":"Se incorporaron enlaces compartibles, cronologías y filtros por tipo de estudio."}</li><li>${en?"Methodology and comparison layout expanded.":"Se ampliaron la metodología y la tabla comparativa."}</li></ul></article><article><time datetime="${latestReview.date}">${en?latestReview.enDate:latestReview.esDate}</time><h3>${en?"Documentary review":"Revisión documental"}</h3><p>${en?latestReview.en:latestReview.es}</p></article></div><p class="change-note">${en?"Interface changes do not modify the date of the documentary review unless publications, strains or clinical relations are changed.":"Los cambios de interfaz no modifican la fecha de revisión documental, salvo que cambien publicaciones, cepas o relaciones clínicas."}</p>`;
    $("#infoDialog").showModal(); return;
  }
  if (type === "foods") {
    const content = state.lang === "en" ? `
      <div class="food-layer-head"><span>New evidence layer</span><h2>Functional foods</h2><p>Food matrix is not a shortcut around strain-level evidence. A food is linked to a clinical record only when the strain, viable dose, and studied matrix are documented.</p></div>
      <div class="food-rule"><strong>Clinical inclusion rule</strong><p>Exact strain + viable amount at end of shelf life + serving frequency + trial with the same or comparable matrix. If one element is missing, it remains educational or market-watch content, not a clinical relation.</p></div>
      <div class="food-grid">
        <article><span class="food-tag ready">Eligible when documented</span><h3>Fermented dairy with <i>Lacticaseibacillus paracasei</i> Shirota</h3><p><strong>What can be linked:</strong> its exact strain record, not the general concept of fermented milk. The food matrix, daily serving and refrigeration must be documented on the local label.</p><small>Mexico: public availability identified. Clinical record in the database remains strain-specific.</small></article>
        <article><span class="food-tag ready">Eligible when documented</span><h3>Fermented milk with <i>Bifidobacterium longum</i> BB536</h3><p>BB536 has controlled trials in fermented-milk matrices, but a food entry must match the stated strain and dose; it cannot inherit the evidence of every yogurt or synbiotic.</p><a href="https://pubmed.ncbi.nlm.nih.gov/39519413/" target="_blank" rel="noopener">View RCT ↗</a></article>
        <article><span class="food-tag watch">Market watch</span><h3>Yogurt or dairy food carrying HN019, NCFM or Lp299v</h3><p>Potentially useful only if a Mexican label identifies the strain and end-of-shelf-life UFC. Otherwise its clinical evidence stays at the strain layer, not the food layer.</p><small>Do not infer efficacy from “live cultures” or “probiotics” alone.</small></article>
        <article><span class="food-tag boundary">Educational only</span><h3>Kéfir, kombucha and traditional ferments</h3><p>They may be nutritious foods, but their microbial composition, dose and viability are variable. They are not currently assignable to a reproducible clinical indication.</p><a href="https://pubmed.ncbi.nlm.nih.gov/34698580/" target="_blank" rel="noopener">Evidence review on kombucha ↗</a></article>
      </div>
      <section class="food-checklist"><h3>Fields captured for every functional-food record</h3><ul><li>Matrix and serving size</li><li>Exact strain/formulation and viable dose at end of shelf life</li><li>Storage conditions and daily frequency</li><li>Other active components: fiber, protein, polyphenols, vitamins or minerals</li><li>Matrix-matched evidence versus evidence extrapolated from a supplement</li><li>Public availability in Mexico — never a recommendation or endorsement</li></ul></section>` : `
      <div class="food-layer-head"><span>Nueva capa de evidencia</span><h2>Alimentos funcionales</h2><p>La matriz alimentaria no permite saltarse la evidencia por cepa. Un alimento solo se vincula a una ficha clínica cuando están documentados la cepa, la dosis viable y la matriz estudiada.</p></div>
      <div class="food-rule"><strong>Regla de inclusión clínica</strong><p>Cepa exacta + cantidad viable al final de vida útil + frecuencia de porción + ECA con matriz igual o comparable. Si falta uno, queda como contenido educativo o vigilancia de mercado, no como relación clínica.</p></div>
      <div class="food-grid">
        <article><span class="food-tag ready">Incorporable si se documenta</span><h3>Lácteo fermentado con <i>Lacticaseibacillus paracasei</i> Shirota</h3><p><strong>Qué puede vincularse:</strong> la ficha de su cepa exacta, no el concepto general de lácteo fermentado. La matriz, porción diaria y refrigeración deben estar documentadas en la etiqueta local.</p><small>México: disponibilidad pública identificada. La ficha clínica de la base sigue siendo específica de cepa.</small></article>
        <article><span class="food-tag ready">Incorporable si se documenta</span><h3>Leche fermentada con <i>Bifidobacterium longum</i> BB536</h3><p>BB536 cuenta con ensayos controlados en matrices de leche fermentada; una entrada de alimento debe igualar cepa y dosis declaradas, no heredar evidencia de cualquier yogurt o simbiótico.</p><a href="https://pubmed.ncbi.nlm.nih.gov/39519413/" target="_blank" rel="noopener">Ver ECA ↗</a></article>
        <article><span class="food-tag watch">Vigilancia de mercado</span><h3>Yogurt o lácteo con HN019, NCFM o Lp299v</h3><p>Solo se integra si una etiqueta mexicana identifica cepa y UFC al final de vida útil. De otro modo, la evidencia se conserva en la capa de cepa, no en la de alimento.</p><small>“Cultivos vivos” o “probióticos” no son identificación clínica suficiente.</small></article>
        <article><span class="food-tag boundary">Solo educativo</span><h3>Kéfir, kombucha y fermentados tradicionales</h3><p>Pueden ser alimentos nutritivos, pero su composición microbiana, dosis y viabilidad son variables. Hoy no se pueden asignar a una indicación clínica reproducible.</p><a href="https://pubmed.ncbi.nlm.nih.gov/34698580/" target="_blank" rel="noopener">Revisión de evidencia sobre kombucha ↗</a></article>
      </div>
      <section class="food-checklist"><h3>Campos de cada registro de alimento funcional</h3><ul><li>Matriz y tamaño de porción</li><li>Cepa/formulación exacta y dosis viable al final de vida útil</li><li>Condiciones de almacenamiento y frecuencia diaria</li><li>Otros activos: fibra, proteína, polifenoles, vitaminas o minerales</li><li>Evidencia de matriz equivalente frente a evidencia extrapolada de suplemento</li><li>Disponibilidad pública en México — nunca recomendación ni aval comercial</li></ul></section>`;
    $("#infoContent").innerHTML=content; $("#infoDialog").showModal(); return;
  }
  if (state.lang === "en") {
    const content = type === "method" ? `
      <h2>How evidence is presented</h2>
      <p>The unit of analysis is <strong>exact strain or formulation × indication × population × dose</strong>. We do not assign to a species a result reported for one strain.</p>
      <ul><li><strong>Search scope:</strong> indexed systematic reviews, meta-analyses, randomized trials and verifiable clinical studies relevant to the exact relation.</li><li><strong>Priority:</strong> meta-analyses first, then randomized trials and other clinical studies.</li><li><strong>Extraction:</strong> population, dose, duration, outcome, estimate, confidence interval and NNT/NNH when published.</li><li><strong>Exclusions:</strong> species-only extrapolation, untraceable formulations, promotional claims and records without a verifiable publication.</li><li><strong>Editorial review:</strong> each record shows the latest documentary review date; interface releases are logged separately.</li></ul>
      <p>ProbioIndex does not assign evidence grades or clinical recommendations. Inclusion describes a published result; it is not an individual prescription or an endorsement of a commercial product.</p>` : `
      <h2>Safety, contraindications, and precautions</h2>
      <p>In immunocompetent adults, events are usually gastrointestinal and mild; a live microorganism does not mean zero risk.</p>
      <ul><li>Avoid <i>S. boulardii</i> with a central venous catheter, critical illness, or severe immunosuppression because of an infrequent fungemia risk.</li><li>Individualize any live probiotic in intensive care, severely compromised intestine, intravascular prostheses, or advanced immunosuppression.</li><li>Confirm strain, end-of-shelf-life viability, and actual dose. Species name is not enough.</li></ul>
      <p>This tool does not prescribe and does not replace pharmacovigilance, diagnosis, or individual clinical assessment.</p>`;
    $("#infoContent").innerHTML=content; $("#infoDialog").showModal(); return;
  }
  const content = type === "method" ? `
    <h2>Cómo presentamos la evidencia</h2>
    <p>La unidad es <strong>cepa o formulación exacta × indicación × población × dosis</strong>. No atribuimos a una especie un resultado reportado para una cepa.</p>
    <ul><li><strong>Alcance de búsqueda:</strong> revisiones sistemáticas, metaanálisis, ECA y estudios clínicos verificables pertinentes para la relación exacta.</li><li><strong>Prioridad:</strong> metaanálisis primero, después ECA y otros estudios clínicos.</li><li><strong>Extracción:</strong> población, dosis, duración, desenlace, estimación, intervalo de confianza y NNT/NNH cuando están publicados.</li><li><strong>Exclusiones:</strong> extrapolación desde la especie, formulaciones no trazables, afirmaciones promocionales y registros sin publicación verificable.</li><li><strong>Revisión editorial:</strong> cada ficha muestra la fecha de la última revisión documental; las versiones de interfaz se registran por separado.</li></ul>
    <p>ProbioIndex no asigna graduaciones de evidencia ni recomendaciones clínicas. La inclusión describe un resultado publicado; no equivale a una prescripción individual ni a un aval comercial.</p>` : `
    <h2>Seguridad, contraindicaciones y precauciones</h2>
    <p>En adultos inmunocompetentes los eventos suelen ser gastrointestinales y leves; un microorganismo vivo no implica riesgo cero.</p>
    <ul><li>Evita <i>S. boulardii</i> con catéter venoso central, enfermedad crítica o inmunosupresión grave por riesgo infrecuente de fungemia.</li><li>Valora individualmente cualquier probiótico vivo en UCI, intestino severamente comprometido, prótesis intravasculares o inmunosupresión avanzada.</li><li>Confirma cepa, viabilidad al final de vida útil y dosis real. El nombre de la especie no basta.</li></ul>
    <p>La herramienta no emite prescripciones ni sustituye farmacovigilancia, diagnóstico o evaluación clínica individual.</p>`;
  $("#infoContent").innerHTML=content; $("#infoDialog").showModal();
}

function openAccess() {
  const dialog = $("#accessDialog");
  const copy = state.lang === "en" ? {
    kicker:"Professional access", title:"Evidence access, made available by your institution.",
    text:"Activate an invitation or explore ProbioIndex with a seven-day trial.",
    privacy:"Sponsors do not see your individual searches or clinical decisions.",
    independent:"Editorial evidence remains independent of sponsorship.",
    secure:"Your access can be managed from one professional account.",
    heading:"How would you like to access?", subheading:"Use the route that applies to you today.",
    code:"I have an invitation code", codeText:"Your institution, society or professional network may have shared a time-limited access code.",
    codePlaceholder:"Enter your code", redeem:"Activate", sponsored:"Sponsored", days:"7 days",
    trial:"Explore before subscribing", trialText:"Get seven days of full access to review the clinical database and its methodology.",
    trialButton:"Start 7-day trial", note:"Demo flow only. Access is not activated and no data are stored until the licensing infrastructure is connected.",
    activated:"Demo activated", success:"This is the future activation experience.", successText:"When the licensing system is live, your code or trial will create a private professional account and show its access term here.",
    return:"Return to ProbioIndex", codeRequired:"Enter an invitation code to continue."
  } : {
    kicker:"Acceso profesional", title:"Evidencia disponible a través de tu institución.",
    text:"Activa una invitación o explora ProbioIndex con una prueba de siete días.",
    privacy:"Los patrocinadores no ven tus búsquedas ni decisiones clínicas individuales.",
    independent:"La evidencia editorial permanece independiente del patrocinio.",
    secure:"Tu acceso podrá gestionarse desde una sola cuenta profesional.",
    heading:"¿Cómo quieres acceder?", subheading:"Elige la vía que corresponda hoy.",
    code:"Tengo un código de invitación", codeText:"Tu institución, sociedad o red profesional puede haber compartido un código de acceso temporal.",
    codePlaceholder:"Ingresa tu código", redeem:"Activar", sponsored:"Patrocinado", days:"7 días",
    trial:"Explorar antes de suscribirme", trialText:"Obtén siete días de acceso completo para revisar la base clínica y su metodología.",
    trialButton:"Iniciar prueba de 7 días", note:"Flujo de demostración. Aún no se activa acceso ni se almacenan datos; se conectará con la infraestructura de licencias.",
    activated:"Demostración activada", success:"Así se verá la activación de acceso.", successText:"Cuando el sistema de licencias esté listo, tu código o prueba creará una cuenta profesional privada y mostrará aquí la vigencia de tu acceso.",
    return:"Volver a ProbioIndex", codeRequired:"Ingresa un código de invitación para continuar."
  };
  const renderAccess = () => {
    $("#accessContent").innerHTML = `
      <div class="access-shell">
        <aside class="access-aside">
          <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
          <div class="access-kicker">${copy.kicker}</div>
          <h2>${copy.title}</h2><p>${copy.text}</p>
          <ul class="access-assurances"><li>${copy.privacy}</li><li>${copy.independent}</li><li>${copy.secure}</li></ul>
        </aside>
        <section class="access-main">
          <div class="access-toolbar"><button data-close aria-label="Cerrar">×</button></div>
          <h3>${copy.heading}</h3><p>${copy.subheading}</p>
          <div class="access-choice">
            <div class="access-choice-head"><div><h4>${copy.code}</h4><p>${copy.codeText}</p></div><span class="access-tag">${copy.sponsored}</span></div>
            <div class="code-row"><input id="licenseCode" autocomplete="off" placeholder="${copy.codePlaceholder}" aria-label="${copy.codePlaceholder}"><button class="primary-action" id="redeemCode">${copy.redeem}</button></div>
          </div>
          <div class="access-choice trial-choice">
            <div class="access-choice-head"><div><h4>${copy.trial}</h4><p>${copy.trialText}</p></div><span class="access-tag">${copy.days}</span></div>
            <button class="trial-button" id="startTrial">${copy.trialButton}</button>
          </div>
          <p class="access-note">${copy.note}</p>
        </section>
      </div>`;
    $("#accessContent").querySelector("[data-close]").addEventListener("click", () => dialog.close());
    const showSuccess = () => {
      $("#accessContent").innerHTML = `<section class="access-success"><div class="access-success-mark">✓</div><div class="access-kicker">${copy.activated}</div><h3>${copy.success}</h3><p>${copy.successText}</p><button class="primary-action" id="accessReturn">${copy.return}</button></section>`;
      $("#accessReturn").addEventListener("click", () => dialog.close());
    };
    $("#startTrial").addEventListener("click", showSuccess);
    $("#redeemCode").addEventListener("click", () => {
      const input = $("#licenseCode");
      if (!input.value.trim()) { input.setCustomValidity(copy.codeRequired); input.reportValidity(); return; }
      input.setCustomValidity(""); showSuccess();
    });
  };
  renderAccess();
  dialog.showModal();
}

$("#searchInput").addEventListener("input", event => {state.query=event.target.value; updateSuggestions(); render();});
$("#searchInput").addEventListener("keydown", event => {if(event.key==="Enter"){ $("#suggestions").classList.remove("visible"); document.querySelector(".workspace").scrollIntoView({behavior:"smooth"}); }});
$$(".mode-switch button").forEach(button => button.addEventListener("click", () => {
  state.mode=button.dataset.mode; state.query=""; state.selectedCondition=""; $("#searchInput").value="";
  $$(".mode-switch button").forEach(b=>{b.classList.toggle("active",b===button);b.setAttribute("aria-selected",String(b===button));});
  const en = state.lang === "en";
  $("#searchInput").placeholder=state.mode==="condition"?(en?"Search IBS, CDI, H. pylori…":"Busca SII, CDI, H. pylori…"):state.mode==="strain"?(en?"Search LGG, 299v, BB-12…":"Busca LGG, 299v, BB-12…"):state.mode==="compare"?(en?"Choose two strains to compare":"Elige dos cepas para comparar"):(en?"Browse food matrices with evidence":"Explora las matrices alimentarias con evidencia"); render();
}));
$$(".quick-links button").forEach(button => button.addEventListener("click",()=>{state.mode="condition";state.query=button.dataset.query;$("#searchInput").value=state.query;render();document.querySelector(".workspace").scrollIntoView({behavior:"smooth"});}));
$("#filterToggle").addEventListener("click",()=>{
  if (!window.matchMedia("(max-width: 620px)").matches) return;
  const filters=$(".filters"); const expanded=filters.classList.toggle("expanded");
  $("#filterToggle").setAttribute("aria-expanded",String(expanded));
});
$$('input[type="checkbox"]').forEach(input=>input.addEventListener("change",render));
$("#clearFilters").addEventListener("click",()=>{$$('input[type="checkbox"]').forEach(input=>input.checked=input.name!=="availability");render();});
$("#resetSearch").addEventListener("click",()=>{state.query="";$("#searchInput").value="";$$('input[type="checkbox"]').forEach(input=>input.checked=input.name!=="availability");render();});
$("#methodButton").addEventListener("click",()=>openInfo("method"));
$("#changesButton").addEventListener("click",()=>openInfo("changes"));
$("#libraryButton").addEventListener("click",openLibrary);
$("#safetyButton").addEventListener("click",()=>openInfo("safety"));
$("#languageButton").addEventListener("click",()=>{state.lang=state.lang==="es"?"en":"es";const url=new URL(window.location.href);if(state.lang==="en")url.searchParams.set("lang","en");else url.searchParams.delete("lang");history.replaceState(history.state,"",url);applyLanguage();const record=url.searchParams.get("record");if(record&&$("#detailDialog").open)openDetail(record,false);});
$$('[data-close]').forEach(button=>button.addEventListener("click",()=>button.closest("dialog").close()));
document.addEventListener("keydown",event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){event.preventDefault();$("#searchInput").focus();}});

$("#mexicoCount").textContent=evidenceWithEfficacy.filter(isMexicoAvailable).length;
$("#totalRelations").textContent=evidenceWithEfficacy.length;
$("#totalEntities").textContent=new Set(evidenceWithEfficacy.map(x=>`${x.genus}|${x.species}|${x.strain}`)).size;
$("#totalContexts").textContent=new Set(evidenceWithEfficacy.map(x=>x.condition)).size;
$("#detailDialog").addEventListener("close",()=>{const url=new URL(window.location.href);if(url.searchParams.has("record")){url.searchParams.delete("record");history.replaceState({},"",url);}});
window.addEventListener("popstate",()=>{const id=new URL(window.location.href).searchParams.get("record");if(id)openDetail(id,false);else if($("#detailDialog").open)$("#detailDialog").close();});
const initialUrl=new URL(window.location.href);
if(initialUrl.searchParams.get("lang")==="en"){state.lang="en";applyLanguage();}else render();
const initialRecord=initialUrl.searchParams.get("record");
if(initialRecord)requestAnimationFrame(()=>openDetail(initialRecord,false));
setTimeout(()=>syncLibraryFromAccount(librarySession()),0);
