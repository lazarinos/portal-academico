export type MissionBlock = {
  title: string;
  description: string;
  highlights: string[];
};

export const missionVisionValues: MissionBlock[] = [
  {
    title: "Misión",
    description:
      "Formar profesionales técnicos altamente calificados que respondan a las necesidades productivas y sociales de la región con sentido ético y compromiso comunitario.",
    highlights: [
      "Modelo educativo centrado en proyectos reales",
      "Acompañamiento personalizado y tutorías permanentes",
    ],
  },
  {
    title: "Visión",
    description:
      "Ser el instituto tecnológico que lidera la innovación aplicada en el sur del país, articulando investigación, emprendimiento y responsabilidad social.",
    highlights: [
      "Vínculos estratégicos con empresas y gobiernos locales",
      "Laboratorios certificados y campus sostenible",
    ],
  },
  {
    title: "Valores",
    description:
      "Trabajamos con integridad, excelencia académica, cooperación interdisciplinaria y vocación de servicio para transformar vidas.",
    highlights: [
      "Gobernanza transparente",
      "Respeto por la diversidad cultural",
      "Innovación abierta y colaborativa",
    ],
  },
];

export type DocumentGroup = {
  title: string;
  scope: "Interno" | "Externo";
  description: string;
  docs: { name: string; code: string; version: string }[];
};

export const documentGroups: DocumentGroup[] = [
  {
    title: "Normativa interna",
    scope: "Interno",
    description:
      "Lineamientos que rigen la convivencia institucional, los procesos de gobierno y la administración académica.",
    docs: [
      {
        name: "CAP - Cuadro para Asignación de Personal",
        code: "CAP-2024",
        version: "Resolución 045-2024",
      },
      {
        name: "ROF - Reglamento de Organización y Funciones",
        code: "ROF-2024",
        version: "Vigente desde marzo 2024",
      },
      {
        name: "RI - Reglamento Interno del Estudiante",
        code: "RI-EST",
        version: "Edición 2024-II",
      },
    ],
  },
  {
    title: "Normativa externa",
    scope: "Externo",
    description:
      "Resoluciones del MINEDU, convenios y normas de acreditación que respaldan nuestra oferta académica.",
    docs: [
      {
        name: "Licenciamiento Institucional MINEDU",
        code: "RD 112-2023-MINEDU",
        version: "Vigente",
      },
      {
        name: "Convenio Marco CAP Puno",
        code: "CONV-017",
        version: "Renovado 2024",
      },
      {
        name: "Esquema de aseguramiento de la calidad (SINEACE)",
        code: "SINEACE-TEC",
        version: "Lineamiento 5",
      },
    ],
  },
];

export type CourseProgram = {
  name: string;
  modality: "Modular" | "Anual";
  duration: string;
  cost: string;
  schedule: string;
  start: string;
  certification: string;
  seats: number;
  summary: string;
  roles: string[];
};

export const coursePrograms: CourseProgram[] = [
  {
    name: "Gestion de la Produccion Lechera",
    modality: "Modular",
    duration: "12 semanas",
    cost: "S/ 420",
    schedule: "Noches - Mar/Jue",
    start: "02 junio",
    certification: "Certificado por modulo",
    seats: 30,
    summary:
      "Formacion en manejo de establos, control de calidad de leche y mejora genetica basica.",
    roles: [
      "Tecnico de produccion en plantas lacteas",
      "Supervisor de establos y centros de acopio",
      "Asistente de control de calidad y cadena fria",
    ],
  },
  {
    name: "Soporte de Redes y Ciberseguridad",
    modality: "Anual",
    duration: "11 meses",
    cost: "S/ 980",
    schedule: "Sabados intensivos",
    start: "13 julio",
    certification: "Titulo Profesional Tecnico",
    seats: 25,
    summary:
      "Laboratorios orientados a diagnostico de redes, configuracion de firewalls y respuesta a incidentes.",
    roles: [
      "Mesa de ayuda y soporte de redes",
      "Analista junior de seguridad",
      "Implementador de cableado estructurado",
    ],
  },
  {
    name: "Emergencias y Cuidados Prehospitalarios",
    modality: "Modular",
    duration: "16 semanas",
    cost: "S/ 580",
    schedule: "Viernes/Sabado",
    start: "20 mayo",
    certification: "Certificado homologado",
    seats: 28,
    summary:
      "Simulaciones de triage, soporte basico y traslado seguro en emergencias comunitarias.",
    roles: [
      "Tecnico en cuidados prehospitalarios",
      "Brigadista para empresas y minas",
      "Asistente en centros de simulacion",
    ],
  },
  {
    name: "Administracion Publica y Contrataciones",
    modality: "Anual",
    duration: "12 meses",
    cost: "S/ 1,250",
    schedule: "Virtual sincronico",
    start: "10 agosto",
    certification: "Diploma con mencion",
    seats: 35,
    summary:
      "Gestion publica con enfoque en contrataciones y control de procesos basados en normativa peruana.",
    roles: [
      "Asistente de logistica y contrataciones",
      "Analista de proyectos municipales",
      "Gestor de tramites y seguimiento documentario",
    ],
  },
  {
    name: "Diseno y Automatizacion Industrial",
    modality: "Anual",
    duration: "12 meses",
    cost: "S/ 1,380",
    schedule: "Semi presencial",
    start: "05 septiembre",
    certification: "Titulo Profesional",
    seats: 24,
    summary:
      "Modelado de procesos, uso de PLC y mantenimiento preventivo de lineas industriales.",
    roles: [
      "Programador de PLC junior",
      "Tecnico en mantenimiento industrial",
      "Disenador de celdas automatizadas",
    ],
  },
  {
    name: "Marketing Digital para Emprendimientos",
    modality: "Modular",
    duration: "8 semanas",
    cost: "S/ 360",
    schedule: "100% virtual",
    start: "27 mayo",
    certification: "Badge y microcredencial",
    seats: 60,
    summary:
      "Planificacion de campanas, pauta en redes y analitica para emprendimientos locales.",
    roles: [
      "Gestor de redes sociales",
      "Asistente de marketing digital",
      "Freelancer en publicidad digital",
    ],
  },
];

export type Convenio = {
  entity: string;
  focus: string;
  benefits: string[];
};

export const convenios: Convenio[] = [
  {
    entity: "Universidad Nacional del Altiplano",
    focus: "Movilidad académica y acceso a laboratorios especializados.",
    benefits: ["Convalidación automática de créditos", "Acceso a biblioteca virtual", "Laboratorios compartidos"],
  },
  {
    entity: "Hospital Regional Manuel Núñez",
    focus: "Internados clínicos y simulación de emergencias.",
    benefits: [
      "Rotaciones supervisadas",
      "Certificación conjunta en primeros auxilios",
      "Becas de investigación aplicada",
    ],
  },
  {
    entity: "Cámara de Comercio Binacional",
    focus: "Programas de empleabilidad y pasantías internacionales.",
    benefits: [
      "Convocatorias laborales cerradas",
      "Mentorías empresariales",
      "Acceso a ferias internacionales",
    ],
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  description?: string;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    alt: "Estudiantes colaborando",
    caption: "Laboratorio de innovación aplicada",
    description: "Nuestros estudiantes trabajan en proyectos multidisciplinarios utilizando tecnología de punta para resolver problemas reales de la comunidad.",
  },
  {
    src: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40",
    alt: "Laboratorio de ciencias",
    caption: "Prácticas en bioseguridad",
    description: "Contamos con laboratorios certificados donde los alumnos aprenden protocolos de seguridad y manejo de muestras biológicas bajo estándares internacionales.",
  },
  {
    src: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9",
    alt: "Auditorio con público",
    caption: "Convocatoria de proyectos 2024",
    description: "El auditorio principal es sede de eventos académicos, conferencias magistrales y la presentación anual de proyectos de innovación tecnológica.",
  },
  {
    src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    alt: "Taller técnico",
    caption: "Curso modular de automatización",
    description: "Los talleres de automatización están equipados con PLCs y sistemas robóticos para que los estudiantes adquieran competencias prácticas demandadas por la industria.",
  },
];

export type Announcement = {
  title: string;
  description: string;
  deadline: string;
  tags: string[];
};

export const announcements: Announcement[] = [
  {
    title: "Convocatoria regular 2024-II",
    description: "Inscripciones abiertas para carreras anuales con matrícula diferenciada por desempeño.",
    deadline: "Cierra 30 de mayo",
    tags: ["Anual", "Becas talento", "Modalidad virtual"],
  },
  {
    title: "Cursos modulares intensivos de invierno",
    description: "Programas certificados en seguridad industrial, emprendimiento digital y agroinnovación.",
    deadline: "Inicio 15 de junio",
    tags: ["Modular", "Fin de semana", "Certificación inmediata"],
  },
];

export type Service = {
  name: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    name: "Residencias y dormitorios",
    description: "Habitaciones equipadas, monitoreo 24/7 y acompañamiento psicológico.",
    features: ["Planes flexibles por ciclo", "Zonas de estudio colaborativas", "Wifi y lavandería incluidos"],
  },
  {
    name: "Comedor nutritivo",
    description: "Menús diseñados por nutricionistas, énfasis en insumos locales.",
    features: ["Planes mensuales", "Opción vegetariana", "Pago virtual"],
  },
  {
    name: "Bienestar integral",
    description: "Consultorios médicos, soporte psicopedagógico y actividades deportivas.",
    features: ["Atención prioritaria a becarios", "Clubes y talleres artísticos", "Cobertura básica de seguros"],
  },
];

export type GradeRecord = {
  student: string;
  program: string;
  average: number;
  progress: number;
  status: "Regular" | "Observado" | "Destacado";
};

export const gradeRecords: GradeRecord[] = [
  {
    student: "Lucía Gutiérrez",
    program: "Emergencias médicas",
    average: 18.2,
    progress: 0.82,
    status: "Destacado",
  },
  {
    student: "Óscar Aguilar",
    program: "Gestión pública",
    average: 15.6,
    progress: 0.64,
    status: "Regular",
  },
  {
    student: "María Vilca",
    program: "Automatización industrial",
    average: 14.8,
    progress: 0.58,
    status: "Observado",
  },
];

export type VideoResource = {
  title: string;
  duration: string;
  topic: string;
  level: string;
};

export const videoLibrary: VideoResource[] = [
  {
    title: "Bioseguridad aplicada al laboratorio clínico",
    duration: "12 min",
    topic: "Salud",
    level: "Intermedio",
  },
  {
    title: "Automatización con PLC: diagnóstico remoto",
    duration: "18 min",
    topic: "Industrial",
    level: "Avanzado",
  },
  {
    title: "Diseño de campañas en redes sociales",
    duration: "15 min",
    topic: "Gestión",
    level: "Básico",
  },
  {
    title: "Gestión documental para instituciones públicas",
    duration: "20 min",
    topic: "Administración",
    level: "Intermedio",
  },
];

export type EvaluationBlueprint = {
  title: string;
  questions: number;
  time: string;
  competency: string;
};

export const evaluationBlueprints: EvaluationBlueprint[] = [
  {
    title: "Evaluación de Bioseguridad II",
    questions: 25,
    time: "30 min",
    competency: "Protocolos sanitarios",
  },
  {
    title: "Simulacro de redes CISCO",
    questions: 18,
    time: "40 min",
    competency: "Diagnóstico y configuración",
  },
  {
    title: "Gestión de proyectos sostenibles",
    questions: 22,
    time: "35 min",
    competency: "Planificación y seguimiento",
  },
];

export type HeroStat = {
  label: string;
  value: string;
  detail: string;
};

export const heroStats: HeroStat[] = [
  {
    label: "Egresados certificados",
    value: "+4,800",
    detail: "en los últimos 5 años",
  },
  {
    label: "Convenios activos",
    value: "36",
    detail: "instituciones socias",
  },
  {
    label: "Programas en marcha",
    value: "22",
    detail: "entre modulares y anuales",
  },
];
