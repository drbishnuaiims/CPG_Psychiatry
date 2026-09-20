/*
=========================================================
  CPG PSYCHIATRY — GUIDELINE REGISTRY

  ADD NEW GUIDELINES HERE.

  Copy one object, change the fields, and create the
  matching HTML page inside the /cpg/ folder.

  IMPORTANT:
  - "url" must exactly match the HTML filename.
  - Keep URLs relative to the website root.
=========================================================
*/

const GUIDELINES = [

  /* =====================================================
     MAJOR DEPRESSIVE DISORDER
  ===================================================== */

  {
    title: "Major Depressive Disorder",

    shortTitle: "Depression",

    authors: "",

    year: "2026",

    journal: "",

    category: "Mood Disorders",

    description:
      "Practical clinical recommendations for assessment and management of major depressive disorder.",

    tags: [
      "depression",
      "MDD",
      "major depressive disorder",
      "mood disorders",
      "antidepressants"
    ],

    keywords: [
      "depression",
      "major depressive disorder",
      "MDD",
      "antidepressants",
      "SSRIs",
      "mood disorders"
    ],

    url: "cpg/depression.html",

    readTime: "8 min read"
  },


  /* =====================================================
     SCHIZOPHRENIA
  ===================================================== */

  {
    title: "Clinical Practice Guidelines for Management of Schizophrenia",

    shortTitle: "Schizophrenia",

    authors:
      "Grover S, Chakrabarti S, Kulhara P, Avasthi A",

    year: "2017",

    journal: "Indian Journal of Psychiatry",

    category: "Schizophrenia",

    description:
      "Clinical Practice Guidelines for the assessment and management of schizophrenia, including pharmacological, psychosocial and treatment-resistant illness management.",

    tags: [
      "schizophrenia",
      "psychosis",
      "antipsychotics",
      "clozapine",
      "treatment resistance"
    ],

    keywords: [
      "schizophrenia",
      "psychosis",
      "antipsychotics",
      "clozapine",
      "treatment resistance",
      "ECT",
      "psychosocial interventions",
      "Indian Psychiatric Society"
    ],

    url: "cpg/schizophrenia.html",

    readTime: "15 min read"
  },


  /* =====================================================
     AUTISM SPECTRUM DISORDER
  ===================================================== */

  {
    title: "Clinical Practice Guidelines for Autism Spectrum Disorders",

    shortTitle: "Autism Spectrum Disorder",

    authors:
      "Subramanyam AA, Mukherjee A, Dave M, Chavda K",

    year: "2019",

    journal: "Indian Journal of Psychiatry",

    category: "Autism Spectrum Disorder",

    description:
      "Clinical Practice Guidelines covering assessment, screening, diagnosis, comorbidities, behavioural and educational interventions, pharmacological management and long-term care in autism spectrum disorders.",

    tags: [
      "autism",
      "ASD",
      "autism spectrum disorder",
      "child psychiatry",
      "neurodevelopmental disorders"
    ],

    keywords: [
      "autism spectrum disorder",
      "ASD",
      "autism",
      "child psychiatry",
      "neurodevelopmental disorders",
      "M-CHAT",
      "M-CHAT-R",
      "ADOS",
      "ADI",
      "CARS",
      "ABC",
      "ISAA",
      "ABA",
      "PECS",
      "TEACCH",
      "SCERTS",
      "ESDM",
      "DIR Floortime",
      "social skills training",
      "sensory integration",
      "risperidone",
      "aripiprazole",
      "methylphenidate",
      "atomoxetine",
      "ADHD",
      "intellectual disability",
      "Indian Psychiatric Society"
    ],

    url: "cpg/autism-spectrum-disorder-subramanyam-2019.html",

    readTime: "20 min read"
  },


  /* =====================================================
     ADHD
  ===================================================== */

  {
    title: "Attention-Deficit/Hyperactivity Disorder",

    shortTitle: "ADHD",

    authors: "",

    year: "2026",

    journal: "",

    category: "Neurodevelopmental Disorders",

    description:
      "Clinical practice notes for assessment and management of ADHD across age groups.",

    tags: [
      "ADHD",
      "attention",
      "hyperactivity",
      "neurodevelopmental",
      "stimulants"
    ],

    keywords: [
      "ADHD",
      "attention deficit hyperactivity disorder",
      "inattention",
      "hyperactivity",
      "impulsivity",
      "stimulants",
      "methylphenidate",
      "atomoxetine",
      "alpha-2 agonists",
      "neurodevelopmental disorders"
    ],

    url: "cpg/adhd.html",

    readTime: "7 min read"
  }

];