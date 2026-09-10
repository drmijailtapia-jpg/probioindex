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
  const exact = [item.genus,item.species,item.strain].join("|");
  if (mexicoStrains.has(exact)) return true;
  return /HN019|K12|M18|BB-12|BB536|LP-33|HA4597|MucT pasteurizada|35624|DDS-1|Shirota|CNCM I-745|GG \(ATCC 53103\)|DSM 17938|GR-1 \+ RC-14|BPL1|PS128|KE-99|299v/.test([item.genus,item.species,item.strain].join(" "));
}

const statusMeta = {
  considerar:{label:"Puede considerarse", description:"El balance puede ser favorable en el contexto y población estudiados."},
  prueba:{label:"Prueba monitorizada", description:"Puede ensayarse con objetivo, plazo y regla de suspensión definidos."},
  "no-rutinario":{label:"No rutinario", description:"La evidencia o aplicabilidad no respalda incorporación sistemática."},
  insuficiente:{label:"No recomendado por ahora", description:"La información disponible todavía no permite una decisión clínica favorable."},
  evitar:{label:"Evitar en este contexto", description:"El riesgo contextual supera la señal de beneficio disponible."}
};

const certaintyLabel = item => ({moderada:"Evidencia favorable",baja:"Evidencia limitada","muy baja":"Evidencia incipiente"}[item.grade] || "Información insuficiente");
const directionLabel = item => {
  if (item.status === "evitar") return "Señal de daño";
  if (item.status === "insuficiente") return "Información insuficiente";
  if (item.status === "no-rutinario") return /no demost|sin beneficio|no alcanz|negativ|no mejor|no reduj|no respalda/i.test(item.effect || "") ? "Sin beneficio consistente" : "Resultados mixtos";
  return "Señal favorable";
};

const state = {mode:"condition", query:"", lang:"es"};
const functionalFoods = [
  {title:"Leche fermentada con Lacticaseibacillus paracasei Shirota",type:"Bebida láctea fermentada · cepa declarada",benefit:"Heces duras o fragmentadas",effect:"Un ECA en matriz de bebida fermentada mostró menor persistencia de heces Bristol 1–2. La utilidad clínica se limita a ese desenlace, no a ‘salud intestinal’ general.",regimen:"≈8 × 10⁹ UFC/día durante 28 días",certainty:"Evidencia limitada",note:"Matriz y cepa identificables; la disponibilidad local no convierte cualquier leche fermentada en equivalente.",url:"https://doi.org/10.1016/j.tjnut.2025.02.021"},
  {title:"Yogurt con Lactobacillus acidophilus NCFM + Bifidobacterium lactis HN019 + polidextrosa",type:"Yogurt simbiótico · formulación exacta",benefit:"Estreñimiento crónico",effect:"Un ECA encontró menor tiempo de tránsito colónico a dos semanas frente a yogurt control. El efecto pertenece a la combinación completa: yogurt + polidextrosa + dos cepas.",regimen:"180 mL cada mañana durante 14 días",certainty:"Evidencia limitada",note:"No extrapolar a NCFM, HN019, yogurt o fibra por separado. Aún requiere comprobar una matriz equivalente disponible en México.",url:"https://pubmed.ncbi.nlm.nih.gov/25056655/"},
  {title:"Alimento o bebida con Lactiplantibacillus plantarum 299v",type:"Matriz alimentaria con cepa declarada",benefit:"Absorción de hierro no hemo",effect:"La síntesis específica de Lp299v señala mayor absorción de hierro no hemo. No demuestra corrección de anemia ni sustituye hierro oral o intravenoso indicado.",regimen:"≈1 × 10⁹ UFC con una comida o suplemento de hierro",certainty:"Evidencia limitada",note:"La evidencia procede principalmente de comidas de prueba o preparaciones fermentadas; verificar dosis viable y matriz antes de vincular un alimento comercial.",url:"https://pubmed.ncbi.nlm.nih.gov/31816981/"},
  {title:"Kéfir",type:"Leche fermentada tradicional · cultivo mixto",benefit:"Resistencia a la insulina; estreñimiento funcional",effect:"Un metaanálisis de 6 ECA (314 participantes) encontró menor insulina y HOMA-IR, sin efecto consistente en peso, HbA1c, glucosa en ayuno o lípidos. Un estudio piloto no controlado en 20 personas con estreñimiento sugirió mayor frecuencia y mejor consistencia de heces.",regimen:"ECA: variable; estudio de estreñimiento: 500 mL/día durante 4 semanas",certainty:"Evidencia limitada",note:"La mezcla microbiana y el contenido nutricional cambian entre kéfires. No es tratamiento de diabetes ni de estreñimiento; los hallazgos gastrointestinales requieren ECA confirmatorios.",url:"https://pubmed.ncbi.nlm.nih.gov/37102491/"},
  {title:"Kombucha",type:"Té fermentado · bacterias acéticas, lácticas y levaduras",benefit:"Glucosa en ayuno en diabetes tipo 2",effect:"Un ECA piloto cruzado, doble ciego (n=12) observó descenso de glucosa en ayuno tras 4 semanas frente al valor basal; no aporta certeza suficiente para un desenlace clínico ni para recomendarla como manejo de diabetes.",regimen:"240 mL/día durante 4 semanas",certainty:"Evidencia incipiente",note:"El estudio evaluó una bebida específica, con aproximadamente 1.5% de alcohol. Azúcar residual, acidez, alcohol y microbiota varían ampliamente entre productos y preparaciones caseras.",url:"https://pubmed.ncbi.nlm.nih.gov/37588049/"},
  {title:"Chucrut lactofermentado",type:"Vegetal fermentado · matriz rica en fibra",benefit:"Síntomas de síndrome de intestino irritable",effect:"Un ECA piloto doble ciego (n=34) observó mejoría de síntomas a 6 semanas tanto con chucrut pasteurizado como no pasteurizado, sin diferencia entre ellos. Esto no apoya atribuir el efecto a bacterias vivas por sí solas.",regimen:"Suplemento diario durante 6 semanas; la porción no queda estandarizada para práctica clínica",certainty:"Evidencia incipiente",note:"Puede ser relevante la fibra y la matriz vegetal. En SII, valorar tolerancia individual, sodio y carga de FODMAPs; no sustituye un abordaje dietético o farmacológico indicado.",url:"https://pubmed.ncbi.nlm.nih.gov/30256365/"},
  {title:"Kimchi fermentado",type:"Vegetal fermentado tradicional · alto sodio",benefit:"Parámetros cardiometabólicos en sobrepeso",effect:"Un ECA cruzado pequeño (n=22) comparó kimchi fresco frente a fermentado: ambos redujeron peso y grasa corporal; el fermentado mostró mejoras adicionales en relación cintura-cadera y glucosa en ayuno. No confirma efecto de pérdida de peso ni permite separar fermentación, energía, fibra, sodio y patrón dietético.",regimen:"300 g/día durante 4 semanas",certainty:"Evidencia limitada",note:"La dosis es alta y no es directamente transferible. Considerar su carga de sodio y no presentarlo como intervención para obesidad, prediabetes o dislipidemia.",url:"https://pubmed.ncbi.nlm.nih.gov/21745625/"},
  {title:"Patrón alimentario alto en fermentados variados",type:"Intervención dietética mixta · no producto individual",benefit:"Diversidad de microbiota y marcadores inflamatorios en adultos sanos",effect:"Un ECA de 10 semanas comparó dieta rica en fermentados diversos con dieta alta en fibra. El grupo de fermentados aumentó la diversidad microbiana y redujo múltiples proteínas inflamatorias; no demuestra beneficio terapéutico de un alimento específico ni manejo de una patología.",regimen:"Aumento gradual hasta 6 porciones/día; 4 semanas de escalamiento y 6 de mantenimiento",certainty:"Evidencia limitada",note:"Incluyó yogurt, kéfir, cottage cheese fermentado, kombucha y vegetales fermentados. Es una señal sobre un patrón dietético en adultos sanos, no una prescripción universal ni una equivalencia entre productos.",url:"https://pubmed.ncbi.nlm.nih.gov/34256014/"}
];
const functionalFoodsEn = [
  {title:"Fermented milk with Lacticaseibacillus paracasei Shirota",type:"Fermented dairy drink · declared strain",benefit:"Hard or lumpy stools",effect:"An RCT in a fermented-drink matrix found less persistence of Bristol type 1–2 stools. Clinical usefulness is limited to that endpoint, not general ‘gut health’.",regimen:"≈8 × 10⁹ CFU/day for 28 days",certainty:"Limited evidence",note:"Matrix and strain are identifiable; local availability does not make every fermented milk equivalent."},
  {title:"Yogurt with Lactobacillus acidophilus NCFM + Bifidobacterium lactis HN019 + polydextrose",type:"Synbiotic yogurt · exact formulation",benefit:"Chronic constipation",effect:"An RCT found shorter colonic transit time at two weeks than with control yogurt. The effect belongs to the entire combination: yogurt + polydextrose + two strains.",regimen:"180 mL each morning for 14 days",certainty:"Limited evidence",note:"Do not extrapolate to NCFM, HN019, yogurt, or fiber separately. An equivalent matrix available in Mexico still needs confirmation."},
  {title:"Food or beverage with Lactiplantibacillus plantarum 299v",type:"Food matrix with declared strain",benefit:"Non-heme iron absorption",effect:"The Lp299v-specific synthesis signals greater non-heme iron absorption. It does not demonstrate correction of anemia and does not replace indicated oral or intravenous iron.",regimen:"≈1 × 10⁹ CFU with a meal or iron supplement",certainty:"Limited evidence",note:"Evidence mainly comes from test meals or fermented preparations; verify viable dose and matrix before linking a commercial food."},
  {title:"Kefir",type:"Traditional fermented milk · mixed culture",benefit:"Insulin resistance; functional constipation",effect:"A meta-analysis of 6 RCTs (314 participants) found lower insulin and HOMA-IR, with no consistent effect on weight, HbA1c, fasting glucose, or lipids. An uncontrolled pilot in 20 people with constipation suggested increased stool frequency and better consistency.",regimen:"RCTs: variable; constipation study: 500 mL/day for 4 weeks",certainty:"Limited evidence",note:"Microbial mix and nutritional content vary across kefirs. It is not a diabetes or constipation treatment; gastrointestinal findings need confirmatory RCTs."},
  {title:"Kombucha",type:"Fermented tea · acetic/lactic bacteria and yeasts",benefit:"Fasting glucose in type 2 diabetes",effect:"A double-blind randomized crossover pilot (n=12) observed lower fasting glucose after 4 weeks compared with baseline; it is far too small to establish a clinical outcome or support kombucha as diabetes management.",regimen:"240 mL/day for 4 weeks",certainty:"Emerging evidence",note:"The study tested one specific beverage, containing about 1.5% alcohol. Residual sugar, acidity, alcohol, and microbiota vary substantially across products and home preparations."},
  {title:"Lacto-fermented sauerkraut",type:"Fermented vegetable · fiber-rich matrix",benefit:"Irritable bowel syndrome symptoms",effect:"A double-blind pilot RCT (n=34) found symptom improvement at 6 weeks with both pasteurized and unpasteurized sauerkraut, without a difference between them. This does not support assigning the effect to live bacteria alone.",regimen:"Daily supplement for 6 weeks; serving is not standardized for clinical practice",certainty:"Emerging evidence",note:"Fiber and the vegetable matrix may matter. In IBS, consider individual tolerance, sodium, and FODMAP load; it does not replace indicated dietary or pharmacologic care."},
  {title:"Fermented kimchi",type:"Traditional fermented vegetable · high sodium",benefit:"Cardiometabolic parameters in overweight",effect:"A small crossover RCT (n=22) compared fresh versus fermented kimchi: both lowered weight and body fat; fermented kimchi had additional changes in waist-to-hip ratio and fasting glucose. It does not confirm a weight-loss effect or disentangle fermentation, energy, fiber, sodium, and dietary pattern.",regimen:"300 g/day for 4 weeks",certainty:"Limited evidence",note:"This is a high dose and is not directly transferable. Consider sodium load; do not present it as an obesity, prediabetes, or dyslipidemia intervention."},
  {title:"High-variety fermented-food dietary pattern",type:"Mixed dietary intervention · not one individual product",benefit:"Microbiome diversity and inflammatory markers in healthy adults",effect:"A 10-week RCT compared a diet rich in diverse fermented foods with a high-fiber diet. The fermented-food arm increased microbial diversity and reduced multiple inflammatory proteins; it does not establish a therapeutic benefit of any one food or disease management.",regimen:"Gradual increase to 6 servings/day; 4-week ramp-up and 6-week maintenance",certainty:"Limited evidence",note:"It included yogurt, kefir, fermented cottage cheese, kombucha, and fermented vegetables. This is a dietary-pattern signal in healthy adults, not a universal prescription or product equivalence."}
];
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const normalize = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const italicName = item => item.displayName || `<i>${item.genus} ${item.species}</i> ${item.strain}`;
const safetyFor = item => item.kind === "yeast" ? yeastSafety : bacterialSafety;
const safetyForEnglish = item => item.kind === "yeast" ? yeastSafetyEn : bacterialSafetyEn;
const english = {"Metodología":"Methodology","Alimentos funcionales":"Functional foods","Limpiar":"Clear","Filtrar evidencia":"Filter evidence","Disponibilidad":"Availability","Disponible en México":"Available in Mexico","Área clínica":"Clinical area","Certeza":"Certainty","Objetivo":"Intent","Población":"Population","Adultos":"Adults","Pediatría":"Pediatrics","Prevención":"Prevention","Tratamiento":"Treatment","Coadyuvante":"Adjunct","Considerar":"Consider","Prueba monitorizada":"Monitored trial","No rutinario":"Not routine","Evidencia insuficiente":"Insufficient evidence","Evitar":"Avoid","Moderada":"Moderate","Baja":"Low","Muy baja":"Very low","relaciones clínicas":"clinical relations","Vista general":"Overview","Dosis estudiada":"Studied dose","Duración":"Duration","Desenlace":"Outcome","Tipo de intervención":"Intervention type","Pauta y población de la evidencia":"Evidence regimen and population","Estudios determinantes":"Key studies","Contraindicaciones y precauciones":"Contraindications and precautions","Efectos adversos e interacciones":"Adverse effects and interactions","Límite de interpretación":"Interpretation limit","Microorganismo vivo":"Live microorganism","Gastrointestinal":"Gastrointestinal","EII y pouchitis":"IBD and pouchitis","Salud urogenital":"Urogenital health","Salud oral":"Oral health","Hepatología":"Hepatology","Metabolismo y composición corporal":"Metabolism and body composition","Salud mental":"Mental health","Alergología e inmunología":"Allergy and immunology","Neurología y cognición":"Neurology and cognition","Seguridad":"Safety","Gastroenteritis aguda":"Acute gastroenteritis","Antibióticos · pediatría":"Antibiotics · pediatrics","Cólico del lactante":"Infant colic","Prematuros · enterocolitis":"Preterm infants · NEC","Estreñimiento":"Constipation","SII · síntomas globales":"IBS · global symptoms","Después de antibióticos":"After antibiotics","H. pylori · tolerabilidad":"H. pylori · tolerability"};
const pediatricEnglish = {"Diarrea asociada a antibióticos en niños":"Antibiotic-associated diarrhea in children","Prevención de enterocolitis necrosante en prematuros":"Prevention of necrotizing enterocolitis in preterm infants","Gastroenteritis aguda pediátrica":"Acute pediatric gastroenteritis","Evidencia favorable":"Favorable evidence","Evidencia limitada":"Limited evidence","Evidencia incipiente":"Emerging evidence","Información insuficiente":"Insufficient information","Señal favorable":"Favorable signal","Resultados mixtos":"Mixed results","Sin beneficio consistente":"No consistent benefit","Señal de daño":"Signal of harm","Puede considerarse":"May be considered","No recomendado por ahora":"Not recommended for now","Evitar en este contexto":"Avoid in this context"};
const tx = value => state.lang === "en" ? (english[value] || pediatricEnglish[value] || value) : value;
const localize = (item, field) => state.lang === "en" && item.en && item.en[field] ? item.en[field] : item[field];
const localizedStudies = item => state.lang === "en" && item.en && item.en.studies ? item.en.studies : item.studies;
const ageGroup = item => item.ageGroup || "adult";
function editorialFor(item) {
  const pediatric = ageGroup(item) === "pediatric";
  const isNewIronRecord = item.id === "lp299v-iron-absorption";
  return {
    reviewedAt:"2026-09-06",
    reviewer: state.lang === "en" ? "ProbioIndex clinical editorial review" : "Revisión editorial clínica ProbioIndex",
    status: state.lang === "en" ? "Clinically reviewed" : "Revisión clínica completada",
    change: state.lang === "en"
      ? (isNewIronRecord ? "Strain-specific relation added; outcome boundary set to iron absorption, not anemia treatment." : pediatric ? "Pediatric population layer and safety boundary reviewed." : "Evidence, dose, safety context, and interpretation boundary reviewed.")
      : (isNewIronRecord ? "Relación específica de cepa añadida; el desenlace se limita a absorción de hierro, no tratamiento de anemia." : pediatric ? "Capa de población pediátrica y límite de seguridad revisados." : "Evidencia, dosis, contexto de seguridad y límite de interpretación revisados.")
  };
}
function applyLanguage() {
  document.documentElement.lang = state.lang;
  $("#accessButton").textContent = state.lang === "en" ? "Access" : "Acceso";
  $("#methodButton").textContent = state.lang === "en" ? "Methodology" : "Metodología";
  $("#languageButton").textContent = state.lang === "en" ? "Español" : "English";
  $("#mainTitle").textContent = state.lang === "en" ? "Probiotics and functional foods, with evidence in context." : "Probióticos y alimentos funcionales, con la evidencia en contexto.";
  $(".lede").textContent = state.lang === "en" ? "Find the strain studied for each condition, review the indications linked to a strain, or explore the potential benefits of functional foods." : "Encuentra la cepa estudiada para cada condición, revisa las indicaciones asociadas a una cepa o explora los posibles beneficios de alimentos funcionales.";
  $("#searchInput").placeholder = state.lang === "en" ? (state.mode === "condition" ? "Search IBS, pouchitis, vaginosis…" : state.mode === "strain" ? "Search L. plantarum, 299v, LGG…" : "Browse food matrices with evidence") : (state.mode === "condition" ? "Busca SII, pouchitis, vaginosis…" : state.mode === "strain" ? "Busca L. plantarum, 299v, LGG…" : "Explora las matrices alimentarias con evidencia");
  $(".last-updated").innerHTML = state.lang === "en" ? "Last updated: <time datetime=\"2026-09-06\">06 Sep 2026</time>" : "Última actualización: <time datetime=\"2026-09-06\">06 sep 2026</time>";
  $(".quick-links span").textContent = state.lang === "en" ? "Explore" : "Explorar";
  $$(".quick-links button").forEach(button => { const labels = {"antibióticos":["After antibiotics","Después de antibióticos"],"síndrome de intestino irritable":["IBS","SII"],"estreñimiento":["Constipation","Estreñimiento"],"pouchitis":["Pouchitis","Pouchitis"],"vaginosis":["Vaginosis","Vaginosis"],"periodontitis":["Periodontitis","Periodontitis"],"Helicobacter":["H. pylori","H. pylori"],"adiposidad":["Adiposity","Adiposidad"]}; button.textContent = labels[button.dataset.query][state.lang==="en"?0:1]; });
  const pulses = $$(".database-pulse span");
  if (pulses[0]) pulses[0].lastChild.textContent = state.lang === "en" ? " curated relations" : " relaciones curadas";
  if (pulses[1]) pulses[1].lastChild.textContent = state.lang === "en" ? " exact strains or formulations" : " cepas o formulaciones exactas";
  if (pulses[2]) pulses[2].lastChild.textContent = state.lang === "en" ? " clinical contexts" : " contextos clínicos";
  $("#filterToggle span").textContent = state.lang === "en" ? "Filter evidence" : "Filtrar evidencia"; $("#clearFilters").textContent = state.lang === "en" ? "Clear" : "Limpiar";
  $$(".mode-switch button")[0].textContent = state.lang === "en" ? "Condition → strain" : "Condición → cepa";
  $$(".mode-switch button")[1].textContent = state.lang === "en" ? "Strain → condition" : "Cepa → condición";
  $$(".mode-switch button")[2].textContent = state.lang === "en" ? "Functional foods" : "Alimentos funcionales";
  const areaLabels = {Gastrointestinal:"Gastrointestinal","EII y pouchitis":"IBD and pouchitis","Salud urogenital":"Urogenital health","Salud oral":"Oral health","Hepatología":"Hepatology","Metabolismo y composición corporal":"Metabolism and body composition","Salud mental":"Mental health","Alergología e inmunología":"Allergy and immunology","Neurología y cognición":"Neurology and cognition","Seguridad":"Safety","Pediatría":"Pediatrics"};
  $$('input[name="area"]').forEach(x=>x.parentElement.lastChild.textContent = state.lang==="en" ? areaLabels[x.value] : x.value);
  const intentLabels = {Prevención:"Prevention",Tratamiento:"Treatment",Coadyuvante:"Adjunct"};
  $$('input[name="intent"]').forEach(x=>x.parentElement.lastChild.textContent = state.lang==="en" ? intentLabels[x.value] : x.value);
  const statusLabels = {considerar:"May be considered",prueba:"Monitored trial","no-rutinario":"Not routine",insuficiente:"Not recommended for now",evitar:"Avoid in this context"};
  $$('input[name="status"]').forEach(x=>x.parentElement.lastChild.textContent = state.lang==="en" ? statusLabels[x.value] : statusMeta[x.value].label);
  const gradeLabels = {moderada:"Evidencia favorable",baja:"Evidencia limitada","muy baja":"Evidencia incipiente"};
  $$('input[name="grade"]').forEach(x=>x.parentElement.lastChild.textContent = (state.lang==="en" ? ({moderada:"Favorable evidence",baja:"Limited evidence","muy baja":"Emerging evidence"}[x.value]) : gradeLabels[x.value]));
  $$("legend").forEach(x=>x.textContent=tx(x.textContent));
  $$('input[name="population"]').forEach(x=>x.parentElement.lastChild.textContent=tx(x.value==="adult"?"Adultos":"Pediatría"));
  $$('input[name="availability"]').forEach(x=>x.parentElement.lastChild.textContent=tx("Disponible en México"));
  $(".scope-note strong").textContent = state.lang === "en" ? "Scope v0.6" : "Alcance v0.6";
  $(".scope-note p").textContent = state.lang === "en" ? "Exact strain or formulation · Clinical evidence and public availability in Mexico." : "Cepa o formulación exacta · Evidencia clínica y disponibilidad pública en México.";
  $(".legend").innerHTML = `<span class="dot"></span>${state.lang === "en" ? "Independent clinical editorial review" : "Revisión editorial clínica independiente"}`;
  $$("footer p")[0].textContent = state.lang === "en" ? "Clinical decision-support tool for health professionals. It does not replace clinical judgment, diagnosis, or individualized treatment." : "Herramienta de apoyo para profesionales de la salud. No sustituye juicio clínico, diagnóstico ni tratamiento individualizado.";
  $$("footer p")[1].innerHTML = state.lang === "en" ? "Last editorial review: <time datetime=\"2026-09-06\">06 Sep 2026</time>" : "Última revisión editorial: <time datetime=\"2026-09-06\">06 sep 2026</time>";
  $("#emptyState h3").textContent = state.lang === "en" ? "No exact relation found" : "No encontramos una relación exacta";
  $("#emptyState p").textContent = state.lang === "en" ? "Try another condition, review strain spelling, or switch to Spanish for the full current catalog. We do not infer efficacy from species alone." : "Prueba con otra condición o revisa la ortografía de la cepa. No inferimos eficacia desde la especie.";
  $("#resetSearch").textContent = state.lang === "en" ? "View all available evidence" : "Ver toda la evidencia";
  render();
}

function searchableText(item) {
  const primary = state.mode === "condition"
    ? [item.condition,item.conditionShort,item.en?.condition,item.en?.conditionShort,...item.keywords]
    : [item.genus,item.species,item.strain,...(item.aliases||[]),item.former||""];
  return normalize(primary.join(" "));
}

function clinicalArea(item) {
  if (item.area) return item.area;
  if (item.status === "evitar" || item.id.includes("safety") || item.id.includes("icu")) return "Seguridad";
  return "Gastrointestinal";
}

function activeValues(name) { return $$(`input[name="${name}"]:checked`).map(input => input.value); }

function render() {
  if (state.mode === "foods") { renderFunctionalFoods(); return; }
  $(".workspace").classList.remove("foods-view"); $(".filters").hidden=false;
  $(".results-header h2").lastChild.textContent = state.lang === "en" ? " clinical relations" : " relaciones clínicas";
  const q = normalize(state.query.trim());
  const grades = activeValues("grade");
  const intents = activeValues("intent");
  const statuses = activeValues("status");
  const areas = activeValues("area");
  const populations = activeValues("population");
  const availability = activeValues("availability");
  const filtered = evidence.filter(item => (state.lang !== "en" || item.en) && (!q || searchableText(item).includes(q)) && grades.includes(item.grade) && intents.includes(item.intent) && statuses.includes(item.status) && areas.includes(clinicalArea(item)) && populations.includes(ageGroup(item)) && (!availability.includes("mexico") || isMexicoAvailable(item)));
  $("#resultCount").textContent = filtered.length;
  $("#resultContext").textContent = state.query ? (state.lang==="en" ? `Results for “${state.query}”` : `Resultados para “${state.query}”`) : (state.lang==="en" ? "Overview" : "Vista general");
  const note = $("#translationNote");
  note.hidden = state.lang !== "en";
  if (state.lang === "en") note.textContent = "English edition: only clinically reviewed translations are shown. Remaining records stay available in Spanish while their editorial translation is completed.";
  $("#results").innerHTML = filtered.map(item => `
    <button class="evidence-card" data-id="${item.id}" aria-label="Abrir ficha de ${item.genus} ${item.species} ${item.strain}">
      <span class="card-strain"><strong>${italicName(item)}</strong><small>${state.lang==="en" ? (item.en?.interventionType || "Strain-level identification") : (item.interventionType || item.former || "Identificación a nivel de cepa")}</small></span>
      <span class="card-data"><span>${localize(item,"conditionShort")}</span><small>${tx(clinicalArea(item))} · ${tx(item.intent)}</small></span>
      <span class="card-data duration"><span>${localize(item,"dose")}</span><small>${localize(item,"duration")}</small></span>
      <span class="status ${item.status}">${tx(statusMeta[item.status].label)}</span>
      <span class="grade ${item.grade.replace(" ","-")}">${tx(certaintyLabel(item))}</span>
      <span class="arrow" aria-hidden="true">→</span>
    </button>`).join("");
  $("#emptyState").hidden = filtered.length > 0;
  $("#results").hidden = filtered.length === 0;
  $$(".evidence-card").forEach(card => card.addEventListener("click", () => openDetail(card.dataset.id)));
}

function renderFunctionalFoods() {
  const en = state.lang === "en";
  $(".workspace").classList.add("foods-view"); $(".filters").hidden=true;
  $("#translationNote").hidden=true;
  $("#resultContext").textContent=en ? "Food matrix × intervention × outcome" : "Matriz alimentaria × intervención × desenlace";
  $("#resultCount").textContent=functionalFoods.length;
  $(".results-header h2").lastChild.textContent=en ? " functional-food records" : " alimentos funcionales";
  $("#emptyState").hidden=true; $("#results").hidden=false;
  $("#results").innerHTML=`<div class="functional-food-grid">${functionalFoods.map((food,index)=>{const item=en?{...food,...functionalFoodsEn[index]}:food;return `<article class="functional-food-card"><span class="food-card-type">${item.type}</span><h3>${item.title}</h3><div class="food-benefit"><small>${en?"Possible clinical benefit":"Posible beneficio clínico"}</small><strong>${item.benefit}</strong></div><p>${item.effect}</p><dl><div><dt>${en?"Studied serving / regimen":"Porción o pauta estudiada"}</dt><dd>${item.regimen}</dd></div><div><dt>${en?"Evidence":"Evidencia"}</dt><dd>${item.certainty}</dd></div></dl><p class="food-note">${item.note}</p><a href="${food.url}" target="_blank" rel="noopener">${en?"View evidence":"Ver evidencia"} ↗</a></article>`}).join("")}</div>`;
}

function updateSuggestions() {
  const box = $("#suggestions");
  const q = normalize(state.query.trim());
  if (q.length < 2) { box.classList.remove("visible"); box.innerHTML=""; return; }
  const labels = [...new Set(evidence.filter(x => (state.lang !== "en" || x.en) && searchableText(x).includes(q)).map(x => state.mode === "condition" ? localize(x,"condition") : `${x.genus} ${x.species} ${x.strain}`))].slice(0,5);
  box.innerHTML = labels.map(label => `<button>${label}</button>`).join("");
  box.classList.toggle("visible", labels.length > 0);
  box.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    state.query=button.textContent; $("#searchInput").value=state.query; box.classList.remove("visible"); render();
    document.querySelector(".workspace").scrollIntoView({behavior:"smooth",block:"start"});
  }));
}

function openDetail(id) {
  const item = evidence.find(x => x.id === id);
  const safety = safetyFor(item);
  const safetyEn = safetyForEnglish(item);
  const adverse = item.adverse || safety.adverse;
  const avoid = item.avoid || safety.avoid;
  const interactions = item.interactions || safety.interactions;
  const dialog = $("#detailDialog");
  $("#detailContent").innerHTML = `
    <div class="detail-head">
      <div class="detail-toolbar"><span>${tx(clinicalArea(item))} · ${tx(item.intent)} · ${tx(ageGroup(item)==="pediatric"?"Pediatría":"Adultos")}</span><button data-close aria-label="${state.lang==="en"?"Close":"Cerrar"}">×</button></div>
      <div class="detail-badges"><span class="status ${item.status}">${tx(statusMeta[item.status].label)}</span><span class="grade ${item.grade.replace(" ","-")}">${tx(certaintyLabel(item))}</span><span class="direction-badge">${tx(directionLabel(item))}</span></div>
      <h2>${italicName(item)}</h2><p>${localize(item,"condition")}</p>
    </div>
    <div class="detail-body">
      <div class="clinical-callout"><strong>${state.lang==="en"?"Clinical position":"Conclusión clínica"}</strong><p>${localize(item,"effect")}</p><small>${state.lang==="en" ? ({considerar:"The benefit–risk balance may be favorable in the studied setting and population.",prueba:"May be tried with a predefined goal, timeframe and stopping rule.","no-rutinario":"Evidence or applicability does not support systematic incorporation.",insuficiente:"Available information does not yet support a favorable clinical decision.",evitar:"Contextual risk outweighs the available signal of benefit."}[item.status]) : statusMeta[item.status].description}</small></div>
      <div class="effect-panel">
        <div><small>${state.lang==="en"?"Effect":"Efecto"}</small><strong>${localize(item,"metric")}</strong></div>
        <div><small>${state.lang==="en"?"Absolute":"Absoluto"}</small><strong>${localize(item,"absolute")}</strong></div>
        <div><small>NNT / NNH</small><strong>${item.nnt}</strong></div>
      </div>
      <div class="detail-grid">
        <div class="detail-stat"><small>${state.lang==="en"?"Studied dose":"Dosis estudiada"}</small><strong>${localize(item,"dose")}</strong></div>
        <div class="detail-stat"><small>${state.lang==="en"?"Duration":"Duración"}</small><strong>${localize(item,"duration")}</strong></div>
        <div class="detail-stat"><small>${state.lang==="en"?"Outcome":"Desenlace"}</small><strong>${localize(item,"outcome")}</strong></div>
        <div class="detail-stat"><small>${state.lang==="en"?"Intervention type":"Tipo de intervención"}</small><strong>${localize(item,"interventionType") || (state.lang==="en"?"Live microorganism":"Microorganismo vivo")}</strong></div>
      </div>
      <section class="detail-section"><h3>${state.lang==="en"?"Evidence regimen and population":"Pauta y población de la evidencia"}</h3><p>${localize(item,"doseDetail")}</p><p><strong>${state.lang==="en"?"Population:":"Población:"}</strong> ${localize(item,"population")}</p></section>
      <section class="detail-section"><h3>${state.lang==="en"?"Key studies":"Estudios determinantes"}</h3><div class="study-table-wrap"><table class="study-table"><thead><tr><th>${state.lang==="en"?"Design":"Diseño"}</th><th>N / ${state.lang==="en"?"year":"año"}</th><th>${state.lang==="en"?"Result":"Resultado"}</th><th>${state.lang==="en"?"Limitation":"Límite"}</th></tr></thead><tbody>${localizedStudies(item).map(study => `<tr><td><a href="${study.url}" target="_blank" rel="noopener">${study.design} ↗</a></td><td>${study.n}<br><small>${study.year}</small></td><td>${study.result}</td><td>${study.limitation}</td></tr>`).join("")}</tbody></table></div></section>
      <section class="detail-section"><h3>${state.lang==="en"?"Contraindications and precautions":"Contraindicaciones y precauciones"}</h3><ul>${(state.lang==="en" ? (item.en?.avoid || safetyEn.avoid) : avoid).map(x=>`<li>${x}</li>`).join("")}</ul></section>
      <section class="detail-section"><h3>${state.lang==="en"?"Adverse effects and interactions":"Efectos adversos e interacciones"}</h3><ul>${(state.lang==="en" ? (item.en?.adverse || safetyEn.adverse) : adverse).map(x=>`<li>${x}</li>`).join("")}</ul><p><strong>${state.lang==="en"?"Interactions:":"Interacciones:"}</strong> ${state.lang==="en" ? (localize(item,"interactions") || safetyEn.interactions) : interactions}</p></section>
      <section class="detail-section"><h3>${state.lang==="en"?"Interpretation limit":"Límite de interpretación"}</h3><p>${localize(item,"caveat")}</p></section>
      <section class="detail-section editorial-section">
        <div class="editorial-heading"><div><span>${state.lang==="en"?"Editorial governance":"Gobernanza editorial"}</span><h3>${editorialFor(item).status}</h3></div><time datetime="${editorialFor(item).reviewedAt}">${state.lang==="en"?"06 Sep 2026":"06 sep 2026"}</time></div>
        <div class="editorial-grid"><div><small>${state.lang==="en"?"Reviewed by":"Revisado por"}</small><strong>${editorialFor(item).reviewer}</strong></div><div><small>${state.lang==="en"?"What changed":"Qué cambió"}</small><strong>${editorialFor(item).change}</strong></div></div>
        <p class="editorial-independence">${state.lang==="en"?"Funding or sponsorship does not determine inclusion, certainty, clinical position, or the text of this record.":"El financiamiento o patrocinio no determina la inclusión, certeza, posición clínica ni el texto de este registro."}</p>
      </section>
      <p class="review-stamp">${state.lang==="en"?"Editorial grading, not formal GRADE.":"Gradación editorial, no GRADE formal."}</p>
    </div>`;
  dialog.querySelector("[data-close]").addEventListener("click", () => dialog.close());
  dialog.showModal();
}

function openInfo(type) {
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
      <h2>How we read evidence</h2>
      <p>The unit of analysis is <strong>exact strain or formulation × indication × population × dose</strong>. We do not assign to a species an effect demonstrated by one strain.</p>
      <ul><li>We prioritize strain-specific meta-analyses and RCTs; guidelines contextualize the decision.</li><li>We separate <strong>certainty</strong> from <strong>clinical position</strong>: a signal of efficacy can still warrant avoidance when host risk is disproportionate.</li><li>We show absolute rates, RR/OR, 95% CI, and NNT when the publication permits it. “Not estimable” avoids false precision.</li><li>We include negative and discordant studies.</li></ul>
      <p>Editorial grading does not replace a full GRADE process or an individual recommendation.</p>` : `
      <h2>Safety, contraindications, and precautions</h2>
      <p>In immunocompetent adults, events are usually gastrointestinal and mild; a live microorganism does not mean zero risk.</p>
      <ul><li>Avoid <i>S. boulardii</i> with a central venous catheter, critical illness, or severe immunosuppression because of an infrequent fungemia risk.</li><li>Individualize any live probiotic in intensive care, severely compromised intestine, intravascular prostheses, or advanced immunosuppression.</li><li>Confirm strain, end-of-shelf-life viability, and actual dose. Species name is not enough.</li></ul>
      <p>This tool does not prescribe and does not replace pharmacovigilance, diagnosis, or individual clinical assessment.</p>`;
    $("#infoContent").innerHTML=content; $("#infoDialog").showModal(); return;
  }
  const content = type === "method" ? `
    <h2>Cómo leemos la evidencia</h2>
    <p>La unidad es <strong>cepa o formulación exacta × indicación × población × dosis</strong>. No atribuimos a una especie el efecto demostrado por una cepa.</p>
    <ul><li>Priorizamos metaanálisis específicos y ECA; las guías contextualizan la decisión.</li><li>Separamos <strong>certeza</strong> de <strong>conclusión clínica</strong>: una señal de eficacia puede seguir siendo “evitar” si el huésped tiene un riesgo desproporcionado.</li><li>Mostramos tasas absolutas, RR/OR, IC 95% y NNT cuando la publicación lo permite. “No estimable” evita falsa precisión.</li><li>Incluimos estudios negativos y evidencia discordante.</li></ul>
    <p>La gradación es editorial y no sustituye un proceso GRADE completo ni una recomendación individual.</p>` : `
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
  state.mode=button.dataset.mode; state.query=""; $("#searchInput").value="";
  $$(".mode-switch button").forEach(b=>{b.classList.toggle("active",b===button);b.setAttribute("aria-selected",String(b===button));});
  $("#searchInput").placeholder=state.mode==="condition"?"Busca SII, pouchitis, vaginosis…":state.mode==="strain"?"Busca L. plantarum, 299v, LGG…":"Explora las matrices alimentarias con evidencia"; render();
}));
$$(".quick-links button").forEach(button => button.addEventListener("click",()=>{state.mode="condition";state.query=button.dataset.query;$("#searchInput").value=state.query;render();document.querySelector(".workspace").scrollIntoView({behavior:"smooth"});}));
$("#filterToggle").addEventListener("click",()=>{
  if (!window.matchMedia("(max-width: 620px)").matches) return;
  const filters=$(".filters"); const expanded=filters.classList.toggle("expanded");
  $("#filterToggle").setAttribute("aria-expanded",String(expanded));
});
$$('input[type="checkbox"]').forEach(input=>input.addEventListener("change",render));
$("#clearFilters").addEventListener("click",()=>{$$('input[type="checkbox"]').forEach(input=>input.checked=true);render();});
$("#resetSearch").addEventListener("click",()=>{state.query="";$("#searchInput").value="";$$('input[type="checkbox"]').forEach(input=>input.checked=true);render();});
$("#methodButton").addEventListener("click",()=>openInfo("method"));
$("#safetyButton").addEventListener("click",()=>openInfo("safety"));
$("#accessButton").addEventListener("click",openAccess);
$("#languageButton").addEventListener("click",()=>{state.lang=state.lang==="es"?"en":"es";applyLanguage();});
$$('[data-close]').forEach(button=>button.addEventListener("click",()=>button.closest("dialog").close()));
document.addEventListener("keydown",event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){event.preventDefault();$("#searchInput").focus();}});

const counts=evidence.reduce((acc,item)=>((acc[item.grade]=(acc[item.grade]||0)+1),acc),{});
$("#mexicoCount").textContent=evidence.filter(isMexicoAvailable).length;
$("#moderateCount").textContent=counts.moderada||0; $("#lowCount").textContent=counts.baja||0; $("#veryLowCount").textContent=counts["muy baja"]||0;
$("#totalRelations").textContent=evidence.length;
$("#totalEntities").textContent=new Set(evidence.map(x=>`${x.genus}|${x.species}|${x.strain}`)).size;
$("#totalContexts").textContent=new Set(evidence.map(x=>x.condition)).size;
render();
