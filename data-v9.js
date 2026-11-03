(() => {
  const commonL27 = {
    area:"Metabolismo y composición corporal", genus:"Anaerobutyricum", species:"soehngenii",
    strain:"L2-7 (DSM 17630)", former:"Antes: Eubacterium hallii L2-7",
    ageGroup:"adult", mexicoAvailable:false, kind:"bacteria", status:"prueba", grade:"baja", gradeLabel:"Baja",
    interventionType:"Microorganismo vivo de nueva generación · cepa única"
  };
  const records = [
    {
      ...commonL27, id:"as-l27-metabolic-syndrome-oral",
      aliases:["A. soehngenii L2-7","Eubacterium hallii L2-7","DSM 17630","L2-7","síndrome metabólico","sensibilidad a la insulina"],
      condition:"Sensibilidad a la insulina en síndrome metabólico", conditionShort:"Síndrome metabólico · L2-7 oral",
      keywords:["síndrome metabólico","resistencia a la insulina","sensibilidad a la insulina","glucosa","L2-7"], intent:"Coadyuvante",
      effect:"Un estudio fase I/II administró L2-7 por vía oral durante cuatro semanas y evaluó seguridad, tolerabilidad y sensibilidad periférica a la insulina.",
      outcome:"Sensibilidad periférica a la insulina y seguridad",
      metric:"La abundancia fecal alcanzada se correlacionó con el cambio en sensibilidad a la insulina",
      absolute:"Sin comparación de eficacia frente a placebo", nnt:"No aplica",
      dose:"10⁷, 10⁹ o 10¹¹ UFC/día", doseDetail:"10 mL una vez al día durante cuatro semanas; tres grupos de dosis sin brazo placebo.",
      duration:"4 semanas", population:"24 hombres con sobrepeso u obesidad, resistencia a la insulina y síndrome metabólico.",
      caveat:"Estudio exploratorio de dosis y seguridad sin placebo. La correlación entre abundancia fecal y sensibilidad a la insulina no demuestra por sí sola un efecto clínico comparativo.",
      studies:[{design:"Estudio fase I/II de dosis y metabolismo",n:"24",year:"2020",result:"No se registraron eventos adversos graves. La abundancia fecal de L2-7 se correlacionó con el cambio en sensibilidad periférica a la insulina.",limitation:"Muestra pequeña, solo hombres y ausencia de placebo; el análisis de eficacia fue correlacional.",url:"https://pubmed.ncbi.nlm.nih.gov/32221294/"}],
      en:{condition:"Peripheral insulin sensitivity in metabolic syndrome",conditionShort:"Metabolic syndrome · oral L2-7",interventionType:"Live next-generation microorganism · single strain",effect:"A phase I/II study administered oral L2-7 for four weeks and evaluated safety, tolerability, and peripheral insulin sensitivity.",outcome:"Peripheral insulin sensitivity and safety",metric:"Achieved fecal abundance correlated with change in insulin sensitivity",absolute:"No placebo efficacy comparison",nnt:"Not applicable",dose:"10⁷, 10⁹, or 10¹¹ CFU/day",doseDetail:"10 mL once daily for four weeks; three dose groups without placebo.",duration:"4 weeks",population:"24 men with overweight or obesity, insulin resistance, and metabolic syndrome.",caveat:"Exploratory dose and safety study without placebo. The association between fecal abundance and insulin sensitivity does not establish a comparative clinical effect.",studies:[{design:"Phase I/II dose-ranging metabolic study",n:"24",year:"2020",result:"No serious adverse events were recorded. Fecal abundance of L2-7 correlated with change in peripheral insulin sensitivity.",limitation:"Small sample, men only, no placebo group, and correlational efficacy analysis.",url:"https://pubmed.ncbi.nlm.nih.gov/32221294/"}]}
    },
    {
      ...commonL27, id:"as-l27-metabolic-syndrome-duodenal",
      aliases:["A. soehngenii L2-7","Eubacterium hallii L2-7","DSM 17630","L2-7","GLP-1","infusión duodenal"],
      condition:"Respuesta de GLP-1 y variabilidad glucémica en síndrome metabólico", conditionShort:"Síndrome metabólico · L2-7 duodenal",
      keywords:["síndrome metabólico","GLP-1","variabilidad glucémica","infusión duodenal","L2-7"], intent:"Coadyuvante",
      interventionType:"Microorganismo vivo · infusión duodenal experimental",
      effect:"Un ECA cruzado comparó una infusión duodenal única de L2-7 con placebo y midió GLP-1 posprandial y variabilidad glucémica durante 24 horas.",
      outcome:"GLP-1 posprandial y variabilidad glucémica en 24 horas",
      metric:"Aumento de GLP-1 y reducción de la desviación absoluta mediana de glucosa; p<0.05",
      absolute:"Una administración; los 12 participantes recibieron ambas intervenciones", nnt:"No publicado",
      dose:"10¹¹ células en una infusión", doseDetail:"10 mL con 10¹⁰ células/mL, administrados distalmente a la papila de Vater mediante sonda duodenal.",
      duration:"Evaluación hasta 24 horas; cruce tras 4 semanas", population:"12 hombres con obesidad y síndrome metabólico, sin tratamiento farmacológico.",
      caveat:"La vía duodenal es experimental y no equivale a una cápsula o alimento. Se evaluó una respuesta metabólica aguda en una muestra pequeña.",
      studies:[{design:"ECA fase II, doble ciego, cruzado y controlado con placebo",n:"12",year:"2022",result:"Aumentó la respuesta posprandial de GLP-1 y disminuyó la variabilidad glucémica durante las 24 horas posteriores; cambió la expresión de 73 genes duodenales.",limitation:"Muestra pequeña, solo hombres, administración invasiva y desenlaces metabólicos de corto plazo.",url:"https://pubmed.ncbi.nlm.nih.gov/34697034/"}],
      en:{condition:"GLP-1 response and glycemic variability in metabolic syndrome",conditionShort:"Metabolic syndrome · duodenal L2-7",interventionType:"Live microorganism · experimental duodenal infusion",effect:"A crossover RCT compared a single duodenal infusion of L2-7 with placebo and measured postprandial GLP-1 and 24-hour glycemic variability.",outcome:"Postprandial GLP-1 and 24-hour glycemic variability",metric:"Higher GLP-1 and lower median absolute glucose deviation; p<0.05",absolute:"Single administration; all 12 participants received both interventions",nnt:"Not reported",dose:"10¹¹ cells in one infusion",doseDetail:"10 mL containing 10¹⁰ cells/mL, delivered distal to the papilla of Vater through a duodenal tube.",duration:"Assessment through 24 hours; crossover after 4 weeks",population:"12 men with obesity and untreated metabolic syndrome.",caveat:"Duodenal delivery is experimental and is not equivalent to a capsule or food. The study measured an acute metabolic response in a small sample.",studies:[{design:"Phase II double-blind, placebo-controlled crossover RCT",n:"12",year:"2022",result:"Postprandial GLP-1 increased and glycemic variability decreased during the next 24 hours; expression of 73 duodenal genes also changed.",limitation:"Small sample, men only, invasive delivery, and short-term metabolic outcomes.",url:"https://pubmed.ncbi.nlm.nih.gov/34697034/"}]}
    },
    {
      ...commonL27, id:"as-l27-t2d-glycemic-variability",
      aliases:["A. soehngenii L2-7","Eubacterium hallii L2-7","DSM 17630","L2-7","diabetes tipo 2","variabilidad glucémica"],
      condition:"Variabilidad glucémica en diabetes tipo 2 tratada con metformina", conditionShort:"Diabetes tipo 2 · L2-7",
      keywords:["diabetes tipo 2","metformina","variabilidad glucémica","MAGE","presión arterial","L2-7"], intent:"Coadyuvante",
      effect:"Un ECA doble ciego administró L2-7 por vía oral durante 14 días a hombres con diabetes tipo 2 tratados con metformina.",
      outcome:"Variabilidad glucémica medida por monitorización continua",
      metric:"MAGE −16.82%; desviación estándar glucémica −7.96%; ambas frente a placebo",
      absolute:"MODD −3.9%; presión arterial media −10.24%", nnt:"No publicado",
      dose:"1 × 10¹⁰ células activas/día", doseDetail:"Un vial oral de 10 mL al día; placebo con el mismo vehículo sin la cepa.",
      duration:"14 días", population:"25 hombres neerlandeses con diabetes tipo 2 y tratamiento estable con metformina.",
      caveat:"No hubo diferencias en excursiones posprandiales de glucosa o insulina, HOMA-IR, GLP-1 ni antropometría. La muestra fue pequeña, masculina y de dos semanas.",
      studies:[{design:"ECA doble ciego, controlado con placebo",n:"25",year:"2024",result:"MAGE disminuyó 16.82%, la desviación estándar glucémica 7.96%, MODD 3.9% y la presión arterial media 10.24% frente a placebo.",limitation:"Muestra pequeña, solo hombres blancos tratados con metformina, 14 días y múltiples desenlaces.",url:"https://pubmed.ncbi.nlm.nih.gov/39139405/"}],
      en:{condition:"Glycemic variability in metformin-treated type 2 diabetes",conditionShort:"Type 2 diabetes · L2-7",interventionType:"Live next-generation microorganism · single strain",effect:"A double-blind RCT administered oral L2-7 for 14 days to men with type 2 diabetes receiving stable metformin therapy.",outcome:"Glycemic variability measured by continuous monitoring",metric:"MAGE −16.82%; glucose standard deviation −7.96%; both versus placebo",absolute:"MODD −3.9%; mean arterial pressure −10.24%",nnt:"Not reported",dose:"1 × 10¹⁰ active cells/day",doseDetail:"One 10 mL oral vial daily; placebo contained the same vehicle without the strain.",duration:"14 days",population:"25 Dutch men with type 2 diabetes receiving stable metformin therapy.",caveat:"No differences were recorded in postprandial glucose or insulin excursions, HOMA-IR, GLP-1, or anthropometry. The sample was small, exclusively male, and lasted two weeks.",studies:[{design:"Double-blind, placebo-controlled RCT",n:"25",year:"2024",result:"MAGE decreased by 16.82%, glucose standard deviation by 7.96%, MODD by 3.9%, and mean arterial pressure by 10.24% versus placebo.",limitation:"Small sample, White men receiving metformin, 14-day duration, and multiple outcomes.",url:"https://pubmed.ncbi.nlm.nih.gov/39139405/"}]}
    },
    {
      id:"as-ch106-prediabetes", area:"Metabolismo y composición corporal", genus:"Anaerobutyricum", species:"soehngenii", strain:"CH106",
      former:"Derivada isogénica sensible a tetraciclina de L2-7", kind:"bacteria",
      aliases:["A. soehngenii CH106","CH-106","CH106","prediabetes","resistencia a la insulina","variabilidad glucémica","CONGA-1"],
      condition:"Control glucémico en prediabetes con resistencia a la insulina", conditionShort:"Prediabetes · CH106",
      keywords:["prediabetes","resistencia a la insulina","HbA1c","variabilidad glucémica","CONGA-1","presión diastólica","CH106"],
      intent:"Coadyuvante", status:"prueba", grade:"baja", gradeLabel:"Baja", ageGroup:"adult", mexicoAvailable:false,
      interventionType:"Microorganismo vivo de nueva generación · cepa única",
      effect:"Un ECA multicéntrico administró CH106 encapsulada durante 12 semanas a adultos con hiperglucemia, obesidad central y riesgo de diabetes tipo 2.",
      outcome:"Variabilidad y control glucémico por monitorización continua",
      metric:"Coeficiente de variación glucémica −1 punto porcentual; CONGA-1 −6% frente a placebo",
      absolute:"Presión diastólica −3 mmHg; HbA1c −1 mmol/mol al incluir la semana 16", nnt:"No publicado",
      dose:"1 × 10⁹ AFU/día", doseDetail:"Una cápsula diaria con células liofilizadas activas durante 12 semanas.",
      duration:"12 semanas y evaluación tras 4 semanas de lavado",
      population:"98 adultos de 21 a 69 años con HbA1c de 5.5–8.0%, obesidad central y resistencia a la insulina; Europa y Estados Unidos.",
      caveat:"CH106 es una derivada de L2-7 y se mantiene como cepa distinta. Varios autores eran empleados, recibían fondos o eran fundadores/asesores de Caelus Health. El cambio de HbA1c se registró al incluir el periodo de lavado.",
      studies:[
        {design:"ECA multicéntrico, doble ciego y controlado con placebo",n:"98",year:"2025",result:"El coeficiente de variación glucémica disminuyó 1 punto porcentual, CONGA-1 6% y la presión diastólica 3 mmHg; HbA1c disminuyó 1 mmol/mol al incluir la semana 16.",limitation:"Participación industrial declarada; algunos resultados dependieron del centro o del periodo posterior a la intervención.",url:"https://pubmed.ncbi.nlm.nih.gov/40371708/"},
        {design:"Evaluación de seguridad de nuevo alimento",n:"Datos humanos y toxicológicos",year:"2026",result:"EFSA concluyó que CH106 es segura hasta 2 × 10⁹ AFU/día para adultos, excluyendo embarazo y lactancia.",limitation:"Evaluación de seguridad; no establece eficacia ni disponibilidad comercial en México.",url:"https://doi.org/10.2903/j.efsa.2026.10255"}
      ],
      en:{condition:"Glycemic control in prediabetes with insulin resistance",conditionShort:"Prediabetes · CH106",interventionType:"Live next-generation microorganism · single strain",effect:"A multicenter RCT administered encapsulated CH106 for 12 weeks to adults with hyperglycemia, central obesity, and risk of type 2 diabetes.",outcome:"Glycemic variability and control by continuous monitoring",metric:"Glycemic coefficient of variation −1 percentage point; CONGA-1 −6% versus placebo",absolute:"Diastolic blood pressure −3 mmHg; HbA1c −1 mmol/mol when week 16 was included",nnt:"Not reported",dose:"1 × 10⁹ AFU/day",doseDetail:"One capsule containing active freeze-dried cells daily for 12 weeks.",duration:"12 weeks plus assessment after a 4-week washout",population:"98 adults aged 21–69 years with HbA1c 5.5–8.0%, central obesity, and insulin resistance in Europe and the U.S.",caveat:"CH106 is derived from L2-7 and is retained as a distinct strain. Several authors were employed by, received funds from, or were founders/advisers of Caelus Health. The HbA1c difference was recorded when the washout period was included.",studies:[{design:"Multicenter double-blind, placebo-controlled RCT",n:"98",year:"2025",result:"Glycemic coefficient of variation decreased by 1 percentage point, CONGA-1 by 6%, and diastolic blood pressure by 3 mmHg; HbA1c decreased by 1 mmol/mol when week 16 was included.",limitation:"Declared industry involvement; some results depended on study site or the post-intervention period.",url:"https://pubmed.ncbi.nlm.nih.gov/40371708/"},{design:"Novel-food safety assessment",n:"Human and toxicology data",year:"2026",result:"EFSA concluded that CH106 is safe up to 2 × 10⁹ AFU/day for adults, excluding pregnancy and lactation.",limitation:"Safety assessment; it does not establish efficacy or commercial availability in Mexico.",url:"https://doi.org/10.2903/j.efsa.2026.10255"}]}
    }
  ];
  window.PROBIOCLIN_V3 = [...(window.PROBIOCLIN_V3 || []), ...records];
})();
