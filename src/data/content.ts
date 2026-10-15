import {
  Boxes,
  CalendarClock,
  CreditCard,
  FileSignature,
  FileCheck2,
  Fingerprint,
  Globe2,
  Headset,
  MessageCircle,
  PenLine,
  PhoneCall,
  Repeat,
  Scale,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sprout,
  Store,
  Target,
  TrendingUp,
  UserCheck,
  Video,
  Wallet,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------- tones --------------------------------- */

export type Tone = "lavender" | "mint" | "peach" | "sky" | "butter" | "rose" | "aqua";

// Full class strings so Tailwind can detect them statically.
export const toneBg: Record<Tone, string> = {
  lavender: "bg-lavender",
  mint: "bg-mint",
  peach: "bg-peach",
  sky: "bg-sky",
  butter: "bg-butter",
  rose: "bg-rose",
  aqua: "bg-aqua",
};

export const toneDeep: Record<Tone, string> = {
  lavender: "bg-lavender-deep",
  mint: "bg-mint-deep",
  peach: "bg-peach-deep",
  sky: "bg-sky-deep",
  butter: "bg-butter-deep",
  rose: "bg-rose-deep",
  aqua: "bg-aqua-deep",
};

/* ---------------------------------- types --------------------------------- */

export type Vertical = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  detail: string;
  icon: LucideIcon;
  tone: Tone;
  chips?: string[];
};

export type FilterGroup =
  | "pagos"
  | "legal"
  | "seguridad"
  | "datos"
  | "comercio"
  | "infra"
  | "operaciones";

export type Product = {
  code: string;
  name: string;
  category: string;
  group: FilterGroup;
  icon: LucideIcon;
  description: string;
};

export type Tier = {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  featured: boolean;
  cta: string;
  benefits: string[];
};

export const groupTone: Record<FilterGroup, Tone> = {
  pagos: "butter",
  legal: "lavender",
  seguridad: "rose",
  datos: "sky",
  comercio: "peach",
  infra: "aqua",
  operaciones: "mint",
};

/* -------------------------------- verticals ------------------------------- */

export const verticals: Vertical[] = [
  {
    id: "crm",
    index: "01",
    name: "CRM",
    tagline: "Ventas bajo control",
    detail:
      "Pipeline comercial, gestión de contactos, seguimiento automático de oportunidades y reportes en tiempo real. Tu fuerza de ventas, ordenada y medible.",
    icon: Target,
    tone: "lavender",
  },
  {
    id: "erp",
    index: "02",
    name: "ERP",
    tagline: "La empresa en un solo sistema",
    detail:
      "Compras, stock, finanzas, facturación y tableros de gestión integrados. Del depósito al balance sin planillas cruzadas.",
    icon: Boxes,
    tone: "mint",
  },
  {
    id: "turnero",
    index: "03",
    name: "Turnero",
    tagline: "Agenda que se llena sola",
    detail:
      "Reservas online 24/7, recordatorios automáticos por WhatsApp y reprogramación sin fricción. Menos ausentismo, agenda llena.",
    icon: CalendarClock,
    tone: "peach",
  },
  {
    id: "automatizaciones",
    index: "04",
    name: "Automatizaciones",
    tagline: "Procesos que corren solos",
    detail:
      "Flujos entre aplicaciones, IA aplicada a tareas repetitivas e integraciones a medida. Las horas de trabajo manual desaparecen.",
    icon: Workflow,
    tone: "sky",
  },
  {
    id: "pos",
    index: "05",
    name: "Punto de Venta",
    tagline: "Vendé en mostrador y online",
    detail:
      "POS ágil para retail y gastronomía: stock en vivo, multi-sucursal, caja y facturación electrónica. Pensado para el comercio real.",
    icon: ShoppingCart,
    tone: "butter",
  },
  {
    id: "whatsapp",
    index: "06",
    name: "Asistencia WhatsApp",
    tagline: "Todo tu negocio, en un chat",
    detail:
      "Bots de atención 24/7, fichaje de personal con GPS, cobranzas y comunicaciones formales sobre WhatsApp. Sin apps que nadie descarga.",
    icon: MessageCircle,
    tone: "aqua",
    chips: ["Bots 24/7", "Fichaje GPS", "Firma digital"],
  },
  {
    id: "pagos",
    index: "07",
    name: "Plataformas de Pago",
    tagline: "Cobrá por todos los medios",
    detail:
      "Links de pago, QR, tarjetas, transferencias inteligentes, antifraude y conciliación automática. Elegí entre una modalidad de marca blanca o desarrollar la marca del producto como partner, según disponibilidad y acuerdo.",
    icon: CreditCard,
    tone: "rose",
    chips: ["Gateway online", "Links de pago", "QR & transferencias"],
  },
];

/* -------------------------------- products -------------------------------- */

export const filterGroups: { id: FilterGroup | "all"; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "pagos", label: "Pagos" },
  { id: "legal", label: "Legal & Firma" },
  { id: "seguridad", label: "Seguridad & ID" },
  { id: "datos", label: "Datos & Pricing" },
  { id: "comercio", label: "Comercio" },
  { id: "infra", label: "Infraestructura" },
  { id: "operaciones", label: "Operaciones" },
];

export const products: Product[] = [
  {
    code: "SOL-01",
    name: "Fichaje WhatsApp",
    category: "RRHH · WhatsApp",
    group: "operaciones",
    icon: UserCheck,
    description:
      "Control de asistencia por WhatsApp con GPS anti-fraude: fichaje, turnos rotativos, horas extra y score de desempeño con IA. Sin apps ni hardware.",
  },
  {
    code: "SOL-02",
    name: "Pasarela de Pagos",
    category: "Pagos online",
    group: "pagos",
    icon: Wallet,
    description:
      "Suite completa de cobros con todos los medios de pago locales: tarjetas, efectivo y transferencias, con antifraude, KYC y 3DS en una única API.",
  },
  {
    code: "SOL-03",
    name: "Firma por WhatsApp",
    category: "Firma digital",
    group: "legal",
    icon: PenLine,
    description:
      "Firma de contratos con validez legal directo por WhatsApp: validación de identidad con selfie + DNI y trazabilidad completa en minutos.",
  },
  {
    code: "SOL-04",
    name: "Monitor de Precios",
    category: "Pricing inteligente",
    group: "datos",
    icon: TrendingUp,
    description:
      "Monitoreo de precios de la competencia y de cada seller en marketplaces: semáforo de precios, alertas automáticas y consultas por IA.",
  },
  {
    code: "SOL-05",
    name: "POS Comercio",
    category: "Punto de venta · Gestión",
    group: "comercio",
    icon: Store,
    description:
      "Punto de venta y gestión para comercios con stock sincronizado en vivo con el mayorista: precios de costo y ventas siempre actualizados.",
  },
  {
    code: "SOL-06",
    name: "Identidad Digital",
    category: "KYC · Onboarding",
    group: "seguridad",
    icon: Fingerprint,
    description:
      "Validación automática de identidad: prueba de vida, verificación de documentos oficiales, antecedentes y expediente digital en un solo flujo.",
  },
  {
    code: "SOL-07",
    name: "Cobros Inteligentes",
    category: "Cobros B2B",
    group: "pagos",
    icon: Repeat,
    description:
      "Transferencias inteligentes con conciliación automática y aviso instantáneo de cobro, sin contracargos y hasta 10 veces más baratas que tarjetas o QR.",
  },
  {
    code: "SOL-08",
    name: "Contratos con IA",
    category: "LegalTech · IA",
    group: "legal",
    icon: Scale,
    description:
      "Contratos con normativa argentina vigente redactados por IA en dos minutos. Más de 50 modelos diseñados por abogados, listos en Word.",
  },
  {
    code: "SOL-09",
    name: "Cloud VPS",
    category: "Infraestructura",
    group: "infra",
    icon: Server,
    description:
      "Servidores VPS en Argentina con NVMe Gen4, protección anti-DDoS y despliegue en 45 segundos. Baja latencia local y soporte 24/7 en español.",
  },
  {
    code: "SOL-10",
    name: "Firma Electrónica",
    category: "Firma digital",
    group: "legal",
    icon: FileSignature,
    description:
      "Firma electrónica por créditos con token SMS o biometría. Un crédito por documento sin importar cuántos firmantes tenga.",
  },
  {
    code: "SOL-11",
    name: "Ciber Riesgo",
    category: "Ciberseguridad",
    group: "seguridad",
    icon: ShieldCheck,
    description:
      "Análisis operacional de riesgo cibernético: visibilidad continua de amenazas para priorizar acciones y reducir la exposición del negocio.",
  },
  {
    code: "SOL-12",
    name: "Monitoreo de Obras",
    category: "Construcción · Video",
    group: "operaciones",
    icon: Video,
    description:
      "Seguimiento audiovisual de obras: timelapse de larga duración, vuelos con drones y cámaras 24/7 con acceso desde cualquier dispositivo.",
  },
  {
    code: "SOL-13",
    name: "Suite Comercial Agro",
    category: "Agro · CRM · Catálogo",
    group: "comercio",
    icon: Sprout,
    description:
      "Pack digital para el sector agropecuario que reúne CRM con integración a WhatsApp, sitio web responsive y catálogo interactivo. Incluye gestión de productos, fichas técnicas e inventario.",
  },
  {
    code: "SOL-14",
    name: "Central Telefónica IA",
    category: "Telefonía cloud · IA conversacional",
    group: "operaciones",
    icon: PhoneCall,
    description:
      "Telefonía empresarial en la nube con PBX, IVR, colas y enrutamiento de llamadas, grabaciones y agentes de voz con IA. Escalable para equipos y atención remota, sin central física.",
  },
  {
    code: "SOL-15",
    name: "Firma Digital Remota",
    category: "Firma digital · Identidad",
    group: "legal",
    icon: FileCheck2,
    description:
      "Firma documentos online desde cualquier lugar, con validación de identidad, protección de integridad y trazabilidad de la operación. Evita traslados y trámites presenciales.",
  },
  {
    code: "SOL-16",
    name: "Pagos Transfronterizos",
    category: "Pagos internacionales · API",
    group: "pagos",
    icon: Globe2,
    description:
      "APIs para enviar y recibir pagos internacionales en tiempo real mediante rieles de pago locales. Facilita integraciones regionales, con herramientas de prueba y soporte técnico.",
  },
  {
    code: "SOL-17",
    name: "Asistente de Finanzas",
    category: "Finanzas · IA conversacional",
    group: "datos",
    icon: Wallet,
    description:
      "Registra gastos e ingresos por texto, audio o foto de comprobantes, organiza categorías y genera resúmenes exportables a Excel o PDF. Incluye herramientas para trabajadores independientes: seguimiento de obras, presupuestos y clientes.",
  },
  {
    code: "SOL-18",
    name: "Conversión para Tiendas Online",
    category: "E-commerce · Conversión",
    group: "comercio",
    icon: TrendingUp,
    description:
      "Suite de más de 50 herramientas para tiendas online: prueba social, alertas de stock, promociones, combos, reseñas y recuperación de visitantes. Se configura desde un panel sin necesidad de tocar código.",
  },
  {
    code: "SOL-19",
    name: "Cobranzas Recurrentes",
    category: "Pagos · Suscripciones",
    group: "pagos",
    icon: Repeat,
    description:
      "Automatiza los cobros recurrentes y ayuda a recuperar pagos rechazados con reintentos y seguimiento del proceso. Pensado para mejorar la cobranza y reducir tareas manuales.",
  },
  {
    code: "SOL-20",
    name: "Gestión de Reservas y Espacios",
    category: "Reservas · Deportes · Pagos",
    group: "operaciones",
    icon: CalendarClock,
    description:
      "Gestión para canchas, estudios y espacios con reservas por WhatsApp, agenda y disponibilidad en tiempo real. Suma cobros con QR, control de caja, stock, clases y administración de torneos.",
  },
  {
    code: "SOL-21",
    name: "Suite de Gestión y Venta Digital",
    category: "ERP · E-commerce · Pagos",
    group: "comercio",
    icon: Boxes,
    description:
      "Suite modular para digitalizar negocios: gestión de finanzas, operaciones y contabilidad, tienda online y cobros digitales. Sus módulos pueden funcionar por separado o integrados según las necesidades de cada empresa.",
  },
  {
    code: "SOL-22",
    name: "Comunicaciones y Contact Center",
    category: "Comunicaciones cloud · Omnicanal",
    group: "operaciones",
    icon: Headset,
    description:
      "Plataforma de comunicaciones empresariales con telefonía, PBX y videoconferencias, más un contact center omnicanal para gestionar interacciones de voz y texto. Incluye automatización de flujos, integraciones con herramientas de trabajo y CRM, reportes y analíticas.",
  },
];

/* --------------------------------- partners ------------------------------- */

export const steps = [
  {
    index: "01",
    title: "Suscribite al programa",
    copy: "Elegí tu plan y activá tu cuenta de partner en menos de 24 horas. Sin código, sin servidores, sin equipo técnico.",
  },
  {
    index: "02",
    title: "Elegí cómo salir al mercado",
    copy: "Podés operar con marca blanca cuando esté disponible o representar la marca del producto como partner, con condiciones acordadas.",
  },
  {
    index: "03",
    title: "Desarrollá tu vertical",
    copy: "Armamos juntos la estrategia, el posicionamiento y el plan comercial para las soluciones que elijas.",
  },
  {
    index: "04",
    title: "Escalá con acompañamiento",
    copy: "Capacitación, materiales, demos, soporte y seguimiento dentro de un programa partner pensado para crecer.",
  },
];

export const tiers: Tier[] = [
  {
    name: "Starter",
    price: "USD 29",
    period: "/ mes",
    tagline: "Para dar el primer paso",
    featured: false,
    cta: "Empezar ahora",
    benefits: [
      "Elegí soluciones y modalidad según disponibilidad",
      "Marca blanca opcional en soluciones compatibles",
      "Alternativa de representar la marca del producto",
      "Panel de partners con gestión de licencias",
      "Soporte por email en el día",
      "Sin permanencia mínima",
    ],
  },
  {
    name: "Partner Pro",
    price: "USD 79",
    period: "/ mes",
    tagline: "El motor de tu negocio",
    featured: true,
    cta: "Postularme como Pro",
    benefits: [
      "Acceso ampliado al catálogo de soluciones",
      "Marca blanca o marca del producto, según acuerdo",
      "Plan de desarrollo comercial con acompañamiento",
      "Onboarding 1:1 y capacitación de producto",
      "Materiales y demos para tu mercado",
      "Soporte prioritario y revisiones de crecimiento",
    ],
  },
  {
    name: "Premium+",
    price: "A medida",
    tagline: "Escala regional",
    featured: false,
    cta: "Hablar con ventas",
    benefits: [
      "Todo lo incluido en Partner Pro",
      "Evaluación de exclusividad por vertical o territorio",
      "Plan integral para desarrollar una marca y su canal comercial",
      "Leads y oportunidades compartidas",
      "Estrategia, posicionamiento y go-to-market conjunto",
      "Account manager y seguimiento de objetivos",
      "Condiciones y revenue share a medida",
    ],
  },
];

export const perks = [
  "Marca blanca opcional",
  "Partner de marca",
  "Exclusividad acordada",
  "Desarrollo comercial conjunto",
  "Margen mayorista",
  "Sin permanencia",
  "Capacitación y soporte",
  "Materiales comerciales",
  "Plan de crecimiento",
];

export const heroMarquee = [
  "CRM",
  "ERP",
  "Turnero",
  "Automatizaciones",
  "Punto de Venta",
  "WhatsApp",
  "Plataformas de Pago",
  "Marca Blanca Opcional",
  "Partner de Marca",
];
