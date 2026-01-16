/**
 * Tipos e interfaces para la tienda GlossyCandy
 */

export interface Product {
  id: string;
  name: string;
  price: string;
  image?: string;
  brand?: string;
  description?: string;
  content?: string;
  tag?: string; // Etiqueta personalizada (ej: "Ojos", "Rostro", "Labios", etc.)
}

export interface CarouselImage {
  src: string;
  alt: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface Category {
  name: string;
  icon: string;
  href: string;
}

/**
 * Número de WhatsApp para compras
 * Formato: código país + número sin espacios ni guiones
 */
export const WHATSAPP_NUMBER = "593997393838";

// Imágenes del carrusel
export const carouselImages: CarouselImage[] = [
  { src: "/images/carousel/carpor.jpg", alt: "Paleta de sombras 1" },
  { src: "/images/carousel/car2.jpg", alt: "Paleta de sombras 2" },
  { src: "/images/carousel/car3.png", alt: "Paleta de sombras 3" },
];

// Items de navegación con rutas reales
export const navigationItems: NavigationItem[] = [
  { name: "Maquillaje", href: "/maquillaje" },
  { name: "Cuidado facial", href: "/cuidado-facial" },
  { name: "Cuidado corporal", href: "/cuidado-corporal" },
  { name: "Fragancias", href: "/fragancias" },
  { name: "Accesorios", href: "/accesorios" },
];

// Categorías con iconos
export const categories: Category[] = [
  { name: "MAQUILLAJE", icon: "/images/iconos/icono1.png", href: "/maquillaje" },
  { name: "CUIDADO FACIAL", icon: "/images/iconos/icono2.png", href: "/cuidado-facial" },
  { name: "CUIDADO CORPORAL", icon: "/images/iconos/icono3.png", href: "/cuidado-corporal" },
  { name: "FRAGANCIAS", icon: "/images/iconos/icono4.png", href: "/fragancias" },
  { name: "ACCESORIOS", icon: "/images/iconos/icono5.png", href: "/accesorios" },
];

// Productos - Novedades
export const novedadesProducts: Product[] = [
  { 
    id: "nov-001",
    name: "Pinzas de Depilar Pusheen", 
    price: "2,50", 
    image: "/images/products/novedades/Glossy Candy1.svg",
    brand: "Pusheen",
    description: "Pinzas de depilar con diseño adorable de Pusheen. Perfectas para darle un toque kawaii a tu rutina de belleza.",
    content: "1 unidad",
    tag: "Oferta"
  },
  { 
    id: "nov-002",
    name: "Ambientador mikado - Nube de Colores", 
    price: "3,50", 
    image: "/images/products/novedades/colores.svg",
    brand: "Magic Beauty",
    description: "Colorete que cambia de color según el PH de tu piel, adaptándose a tu tono natural para un rubor perfecto.",
    content: "5g",
    tag: "Nuevo Producto"
  },
  { 
    id: "nov-003",
    name: "Ushas Make-Up Remover", 
    price: "1,50", 
    image: "/images/products/novedades/prod3.svg",
    brand: "Kawaii Fresh",
    description: "Delicioso ambientador con aroma a batido de fresa que mantendrá tu coche con un olor dulce y agradable.",
    content: "8ml",
    tag: "Edición Limitada"
  },
  { 
    id: "nov-004",
    name: "Sérum Facial Naranja + Carbón", 
    price: "4,99", 
    image: "/images/products/novedades/prod4.svg",
    brand: "Natural Glow",
    description: "Sérum facial con vitamina C de naranja y carbón activado para una piel radiante y libre de impurezas.",
    content: "30ml",
    tag: "2x1"
  },
];

// Productos - Maquillaje
// ═══════════════════════════════════════════════════════════════════════════
// MAQUILLAJE - Organizado por Tags
// ═══════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────────
// ROSTRO (maq1 - maq3)
// ─────────────────────────────────────────────────────────────────────────────
const maquillaje_Rostro: Product[] = [
  { 
    id: "maq-001",
    name: "BRONCEADOR BRONZER PODWER ", 
    price: "2,50", 
    image: "/images/products/maquillaje/maq1.svg",
    brand: "KARITE",
    description: "Disponible en 3 tonos marrón  ; Polvo bronceador con formula suave y sedosa aporta calidez y un aspecto saludable a tu piel contiene minerales naturales. ",
    content: "5g",
    tag: "Rostro"
  },
  { 
    id: "maq-002",
    name: "Esmalte de uñas Crema My Melody", 
    price: "2,99", 
    image: "/images/products/maquillaje/maq2.svg",
    brand: "Sanrio Beauty",
    description: "Esmalte cremoso con diseño kawaii de My Melody. Colores vibrantes y larga duración.",
    content: "10ml",
    tag: "Rostro"
  },
  { 
    id: "maq-003",
    name: "HIGHLIGHT ILUMINADOR DE ROSTRO", 
    price: "2,50", 
    image: "/images/products/maquillaje/maq3.svg",
    brand: "USHA",
    description: "Disponible en 3 tonos marrón Iluminador en polvo ayuda a dar brillo a las mejillas y realzar los puntos altos del rostro su fórmula sedosa y suave",
    content: "8g",
    tag: "Rostro"
  },
  // ↓ Agregar más productos de ROSTRO aquí ↓
];

// ─────────────────────────────────────────────────────────────────────────────
// LABIALES (maq4 - maq15)
// ─────────────────────────────────────────────────────────────────────────────
const maquillaje_Labiales: Product[] = [
  { 
    id: "maq-004",
    name: "Paleta de Sombras Teléfono Barbie", 
    price: "8,95", 
    image: "/images/products/maquillaje/maq4.svg",
    brand: "Barbie Beauty",
    description: "Paleta de sombras con forma de teléfono retro Barbie. Incluye 12 tonos pigmentados y versátiles.",
    content: "12 colores",
    tag: "Labiales"
  },
  { 
    id: "maq-005",
    name: "ACEITE LABIAL SANDIA", 
    price: "4,50", 
    image: "/images/products/maquillaje/maq5.svg",
    brand: "THE FRUIT COMPANY",
    description: "Aceite labial con aroma a sandia contiene vitamina E y aceite de jojoba que proporciona hidratación y nutrientes a tus labios producto vegano libre de crueldad animal . .",
    content: "1 Unidad",
    tag: "Labiales"
  },
  { 
    id: "maq-006",
    name: "ACEITE LABIAL MELOCOTON", 
    price: "4,50", 
    image: "/images/products/maquillaje/maq6.svg",
    brand: "THE FRUIT COMPANY",
    description: "Aceite labial con aroma a melocotón contiene vitamina E y aceite de jojoba que proporciona hidratación y nutrientes a tus labios producto vegano libre de crueldad animal . .",
    content: "1 Unidad",
    tag: "Labiales"
  },
  { 
    id: "maq-007",
    name: "ACEITE LABIAL MORA", 
    price: "4,50", 
    image: "/images/products/maquillaje/maq7.svg",
    brand: "THE FRUIT COMPANY",
    description: "Aceite labial con aroma a mora contiene vitamina E y aceite de jojoba que proporciona hidratación y nutrientes a tus labios producto vegano libre de crueldad animal . .",
    content: "1 Unidad",
    tag: "Labiales"
  },
  { 
    id: "maq-008",
    name: "ACEITE LABIAL FRESA NATA", 
    price: "4,50", 
    image: "/images/products/maquillaje/maq8.svg",
    brand: "THE FRUIT COMPANY",
    description: "Aceite labial con aroma a fresa nata contiene vitamina E y aceite de jojoba que proporciona hidratación y nutrientes a tus labios producto vegano libre de crueldad animal . .",
    content: "1 Unidad",
    tag: "Labiales"
  },
  { 
    id: "maq-009",
    name: "Paleta de Sombras Telafone Barbie", 
    price: "8,95", 
    image: "/images/products/maquillaje/maq9.svg",
    brand: "Barbie Beauty",
    description: "Paleta de sombras con forma de telafone retro Barbie. Incluye 12 tonos pigmentados y versátiles.",
    content: "12 colores",
    tag: "Labiales"
  },
  { 
    id: "maq-010",
    name: "Paleta de Sombras Telafone Barbie", 
    price: "8,95", 
    image: "/images/products/maquillaje/maq10.svg",
    brand: "Barbie Beauty",
    description: "Paleta de sombras con forma de telafone retro Barbie. Incluye 12 tonos pigmentados y versátiles.",
    content: "12 colores",
    tag: "Labiales"
  },
  { 
    id: "maq-011",
    name: "Paleta de Sombras Telafone Barbie", 
    price: "8,95", 
    image: "/images/products/maquillaje/maq11.svg",
    brand: "Barbie Beauty",
    description: "Paleta de sombras con forma de telafone retro Barbie. Incluye 12 tonos pigmentados y versátiles.",
    content: "12 colores",
    tag: "Labiales"
  },
  { 
    id: "maq-012",
    name: "Paleta de Sombras Telafone Barbie", 
    price: "8,95", 
    image: "/images/products/maquillaje/maq12.svg",
    brand: "Barbie Beauty",
    description: "Paleta de sombras con forma de telafone retro Barbie. Incluye 12 tonos pigmentados y versátiles.",
    content: "12 colores",
    tag: "Labiales"
  },
  { 
    id: "maq-013",
    name: "TINTA DE LABIOS", 
    price: "2,50", 
    image: "/images/products/maquillaje/maq13.svg",
    brand: "USHA",
    description: "Labios de impacto y empaque en forma de botella de vino tinta labial con alta pigmentación acabado natural y duradero. ",
    content: "3 tonos",
    tag: "Labiales"
  },
  { 
    id: "maq-014",
    name: "P.H.A.T SÉRUM ", 
    price: "5,00", 
    image: "/images/products/maquillaje/maq14.svg",
    brand: "ITALIA DELUXE",
    description: "Hidrata y nutre los labios dejandolos con un acabado ultra glossy sin ser pegajoso tiene ingredientes reparadores como el ácido hialurónico,aceite de girasol, aceite de jojoba y vitamina E.",
    content: "1 Unidad",
    tag: "Labiales"
  },
  { 
    id: "maq-015",
    name: "LIPGLOSS ", 
    price: "3,00", 
    image: "/images/products/maquillaje/maq15.svg",
    brand: "USHA",
    description: "Brillo labial hidratante formula ligera no pegajosa ideal para cualquiera momento del día su diseño adorable sus envases con carita de gatito perfecto para llevarlos en tu bolso . ",
    content: "1 Unidad",
    tag: "Labiales"
  },
  {
    id: "maq-020",
    name: " ACEITE LABIAL JUICY BOMB", 
    price: "2,25", 
    image: "/images/products/maquillaje/maq20.svg",
    brand: "ESSENCE",
    description: "Aceite labial con aroma a vainilla proporciona hidratación y nutrientes a tus labios dejándolos brillantes sin sensación pegajosa",
    content: "10 ml",
    tag: "Labiales"
  },
  {
    id: "maq-021",
    name: "ACEITE LABIAL JUICY BOMB", 
    price: "2,25", 
    image: "/images/products/maquillaje/maq21.svg",
    brand: "ESSENCE",
    description: "Aceite labial con aroma a vainilla proporciona hidratación y nutrientes a tus labios dejándolos brillantes sin sensación pegajosa",
    content: "10 ml",
    tag: "Labiales"
  },
  {
    id: "maq-022",
    name: "ACEITE LABIAL JUICY BOMB", 
    price: "2,25", 
    image: "/images/products/maquillaje/maq22.svg",
    brand: "ESSENCE", 
    description: "Aceite labial con aroma a vainilla proporciona hidratación y nutrientes a tus labios dejándolos brillantes sin sensación pegajosa",
    content: "10 ml",
    tag: "Labiales"
  },
  {
    id: "maq-023",
    name: "P.H.A.T  JUICY LIP GLOW OIL ",
    price: "5,00",
    image: "/images/products/maquillaje/maq23.svg",
    brand: "ITALIA DELUXE",
    description: "Hidratante labial o aplícalo después de la aplicación del lápiz labial para un efecto brillante.",
    content: "10 ml",
    tag: "Labiales"
  },
  { 
    id: "maq-024",
    name: "P.H.A.T  JUICY LIP GLOW OIL ",
    price: "5,00", 
    image: "/images/products/maquillaje/maq24.svg",
    brand: "ITALIA DELUXE",
    description: "Hidratante labial o aplícalo luego de la aplicación del lápiz labial para un efecto brillante.",
    content: "10 ml",
    tag: "Labiales"
  },
  { 
    id: "maq-025",
    name: "P.H.A.T  JUICY LIP GLOW OIL ",
    price: "5,00", 
    image: "/images/products/maquillaje/maq25.svg",
    brand: "ITALIA DELUXE",
    description: "Hidratante labial o aplícalo luego de la aplicación del lápiz labial para un efecto brillante.",
    content: "10 ml",
    tag: "Labiales"
  },
  {
    id: "maq-026",
    name: "LABIAL LIQUIDO SUPER BEST MATTE",
    price: "3,00", 
    image: "/images/products/maquillaje/maq26.svg",
    brand: "USHA",
    description: "Labial liquido super Best acabado matte con una gran pigmentación y duración a prueba de agua.",
    content: "6 Tonos",
    tag: "Labiales" 
  },
  {
    id: "maq-027",
    name: "LIP OIL MÁGICO FRESH JUICY",
    price: "3,50", 
    image: "/images/products/maquillaje/maq27.svg",
    brand: "USHA",
    description: "Brillo labial hidratantes frutales magico combina los beneficios de un aceite labial nutritivo con la capacidad de dar un toque de color según el ph.",
    content: "3 Aromas",
    tag: "Labiales" 
  },
  {
    id: "maq-028",
    name: "P.H.A.T  JUICY LIP GLOW OIL ",
    price: "7,00", 
    image: "/images/products/maquillaje/maq28.svg",
    brand: "USHA",
    description: "Hidratante labial o aplícalo después de la aplicación del lápiz labial para un efecto brillante. ",
    content: "Tonos 10 - 11",
    tag: "Labiales"
  },
  {
    id: "maq-029",
    name: "LIPGLOSS",
    price: "7,00",  
    image: "/images/products/maquillaje/maq29.svg",
    brand: "FEBBLE",  
    description: "Proporciona un acabado brillante e hidratante dejando los labios con un aspecto jugoso reacciona dependiendo al pH de los labios creando un tono rosa .",
    content: "1 Unidad",
    tag: "Labiales"
  },
  {
    id: "maq-030",
    name: "MASCARILLA LABIAL LIP MASK FRUTA SANDÍA  ",
    price: "2,50", 
    image: "/images/products/maquillaje/maq30.svg",
    brand: "USHA", 
    description: "Tratamiento hidratante y nutritivo para los labios con extractos naturales de frutas diseñado para suavizar los labios secos o agrietados con un agradable aroma a sandía, ideal para el cuidado diario por el cambio del clima. ",
    content: "1 Unidad",
    tag: "Labiales"
  },
  {
    id: "maq-031",
    name: "MASCARILLA LABIAL LIP MASK FRUTA UVA  ",
    price: "2,50", 
    image: "/images/products/maquillaje/maq31.svg",
    brand: "USHA",
    description: "Tratamiento hidratante y nutritivo para los labios con extractos naturales de frutas diseñado para suavizar los labios secos o agrietados con un agradable aroma a sandía, ideal para el cuidado diario por el cambio del clima. ",
    content: "1 Unidad",
    tag: "Labiales"
  },
  {
    id: "maq-032",
    name: "MASCARILLA LABIAL LIP MASK FRUTA ARÁNDANOS",
    price: "2,50", 
    image: "/images/products/maquillaje/maq32.svg",
    brand: "USHA",
    description: "Tratamiento hidratante y nutritivo para los labios con extractos naturales de frutas diseñado para suavizar los labios secos o agrietados con un agradable aroma a sandía, ideal para el cuidado diario por el cambio del clima. ",
    content: "1 Unidad",
    tag: "Labiales"
  },
  { 
    id: "maq-033",
    name: "MASCARILLA DE LABIOS", 
    price: "0,75", 
    image: "/images/products/cuidado-facial/fac7.svg",
    brand: "DEAR SHE STRAWBERRY",
    description: "Mascarilla de colágeno para labios proporciona hidratación profunda para combatir la resequedad dejando tus labios suaves y sedosos ",
    content: "1 Unidad",
    tag: "Labiales"
  },
  {
    id: "maq-034",
    name: "MASCARILLA DE LABIOS", 
    price: "0,75", 
    image: "/images/products/maquillaje/maq33.svg",
    brand: "DEAR SHE STRAWBERRY",
    description: "Mascarilla de colágeno para labios proporciona hidratación profunda para combatir la resequedad dejando tus labios suaves y sedosos.",
    content: "1 Unidad",
    tag: "Labiales"
  },
  {
    id: "maq-035",
    name: "MASCARILLA DE LABIOS", 
    price: "0,75", 
    image: "/images/products/maquillaje/maq34.svg",
    brand: "DEAR SHE STRAWBERRY",
    description: "Mascarilla de colágeno para labios proporciona hidratación profunda para combatir la resequedad dejando tus labios suaves y sedosos.",
    content: "1 Unidad",
    tag: "Labiales"
  },
  // ↓ Agregar más productos de LABIALES aquí ↓
];

// ─────────────────────────────────────────────────────────────────────────────
// OJOS (maq16 - maq17)
// ─────────────────────────────────────────────────────────────────────────────
const maquillaje_Ojos: Product[] = [
  { 
    id: "maq-016",
    name: "GEL DE CEJAS", 
    price: "3,00", 
    image: "/images/products/maquillaje/maq16.svg",
    brand: "MELU BY RUBY ROSE",
    description: "Gel incoloro para fijar y moldear las cejas logrando un aspecto natural y definido sus ingredientes extracto de almendra y avena. ",
    content: "1 Unidad",
    tag: "Ojos"
  },
  { 
    id: "maq-017",
    name: "SÉRUM DE PESTAÑAS", 
    price: "3,00", 
    image: "/images/products/maquillaje/maq17.svg",
    brand: "BIOAQUA",
    description: "Tratamiento nutritivo para fortalecer alargar y dar volumen a las pestañas y cejas con ingredientes naturales como vitamina E y proteínas de avena hidrolizada. ",
    content: "1 Unidad",
    tag: "Ojos"
  },
  {
    id: "maq-018",
    name: "RIZADOR DE PESTAÑAS", 
    price: "1,75", 
    image: "/images/products/maquillaje/maq18.svg",
    brand: "PESTAÑAS Y CEJAS",
    description: " Rizadores de pestañas cola de piña. ",
    content: "1 Unidad",
    tag: "Ojos"
  },
  {
    id: "maq-019",
    name: "MASCARA DE PESTAÑAS", 
    price: "3,50", 
    image: "/images/products/maquillaje/maq19.svg",
    brand: "FEBBLE",
    description: " Mascara de pestañas diseñadas para realzar y definir las pestañas proporcionando volumen y longitud.  ",
    content: "1 Unidad",
    tag: "Ojos"
  }
  // ↓ Agregar más productos de OJOS aquí ↓
];

// ═══════════════════════════════════════════════════════════════════════════
// COMBINAR TODOS - El orden aquí define cómo se ven en la web
// ═══════════════════════════════════════════════════════════════════════════
export const maquillajeProducts: Product[] = [
  ...maquillaje_Rostro,
  ...maquillaje_Labiales,
  ...maquillaje_Ojos,
];

// ═══════════════════════════════════════════════════════════════════════════
// CUIDADO FACIAL - Organizado por Tags
// ═══════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────────
// ROSTRO
// ─────────────────────────────────────────────────────────────────────────────
const cuidadoFacial_Rostro: Product[] = [
  { 
    id: "fac-001",
    name: "SÉRUM FACIAL ALOE VERA", 
    price: "6,00", 
    image: "/images/products/cuidado-facial/fac1.svg",
    brand: "USHA",
    description: "Sérum facial con áloe vera hidratante y calmante,ideal para pieles sensibles con propiedades antiinflamatorias. ",
    content: "30 ml",
    tag: "Rostro"
  },
  { 
    id: "fac-002",
    name: "SÉRUM FACIAL  ÁCIDO HIALURÓNICO ", 
    price: "6,00", 
    image: "/images/products/cuidado-facial/fac2.svg",
    brand: "USHA",
    description: "Sérum facial con ácido hialurónico hidrata profundamente y revitaliza la piel rellenando las líneas de expresión con rápida absorción y sensación fresca ",
    content: "30 ml",
    tag: "Rostro"
  },
  { 
    id: "fac-003",
    name: "SÉRUM FACIAL COLÁGENO", 
    price: "6,00", 
    image: "/images/products/cuidado-facial/fac3.svg",
    brand: "USHA",
    description: "Sérum facial con colágeno ayuda a mantener la piel más firme y elástica previniendo arrugas. ",
    content: "30 ml",
    tag: "Rostro"
  },
  { 
    id: "fac-004",
    name: "SÉRUM FACIAL VITAMINA C ", 
    price: "6,00", 
    image: "/images/products/cuidado-facial/fac4.svg",
    brand: "USHA",
    description: "Sérum facial vitamina C nutritivo que ayuda a devolver el brillo y la protección antioxidantes de la piel.",
    content: "50 ml",
    tag: "Rostro"
  },
  { 
    id: "cor-014",
    name: "TOALLITAS BIODEGRADABLES", 
    price: "3,50", 
    image: "/images/products/cuidado-corporal/corp14.svg",
    brand: "THE FRUIT COMPANY",
    description: "Son ideales para usar en manos,cara y WC con su irresistible aroma a  moras contiene aloe vera, vitamina E y camomila para limpiar y cuidar tu piel 100% biodegradables y desechables por el WC.",
    content: "1 Paquete",
    tag: "Rostro"
  },
  { 
    id: "cor-015",
    name: "TOALLITAS BIODEGRADABLES", 
    price: "3,50", 
    image: "/images/products/cuidado-corporal/corp15.svg",
    brand: "THE FRUIT COMPANY",
    description: "Son ideales para usar en manos,cara y WC con su irresistible aroma a  moras contiene aloe vera, vitamina E y camomila para limpiar y cuidar tu piel 100% biodegradables y desechables por el WC.",
    content: "1 Paquete",
    tag: "Rostro"
  },
  { 
    id: "cor-016",
    name: "TOALLITAS HÚMEDAS ", 
    price: "3,50", 
    image: "/images/products/cuidado-corporal/corp16.svg",
    brand: "THE FRUIT COMPANY",
    description: "Son ideales para usar en manos,cara y WC con su irresistible aroma a  moras contiene aloe vera, vitamina E y camomila para limpiar y cuidar tu piel 100% biodegradables y desechables por el WC.",
    content: "1 Paquete",
    tag: "Rostro"
  },
  { 
    id: "cor-001",
    name: "TOALLITAS HÚMEDAS LATAS", 
    price: "1,25", 
    image: "/images/products/cuidado-corporal/corp1.svg",
    brand: "LITTLE",
    description: "Mini toallitas húmedas portátiles en latas con diseño de astronauta ideales para limpieza rápida de manos y caras las encuentras en 4 diferentes colores .",
    content: "1 Lata",
    tag: "Rostro"
  },
  // ↓ Agregar más productos de ROSTRO aquí ↓
];

// ─────────────────────────────────────────────────────────────────────────────
// MASCARILLAS
// ─────────────────────────────────────────────────────────────────────────────
const cuidadoFacial_Mascarillas: Product[] = [
  { 
    id: "fac-008",
    name: "MASCARILLA FACIAL RICE  ", 
    price: "0,75", 
    image: "/images/products/cuidado-facial/fac8.svg",
    brand: "KARITE",
    description: "Mascarilla en velo facial aporta vitamina E,B1 y B3  ayudan a revitalizar e hidratación de la piel contiene ingredientes naturales que dejarán tu piel con suavidad y delicadeza. ",
    content: "50ml",
    tag: "Mascarillas"
  },
  { 
    id: "fac-009",
    name: "MASCARILLA FACIAL RICE  ", 
    price: "0,75", 
    image: "/images/products/cuidado-facial/fac9.svg",
    brand: "KARITE",
    description: "Mascarilla en velo facial aporta vitamina E,B1 y B3  ayudan a revitalizar e hidratación de la piel contiene ingredientes naturales que dejarán tu piel con suavidad y delicadeza. ",
    content: "50ml",
    tag: "Mascarillas"
  },
  { 
    id: "fac-005",
    name: "MASCARILLA FACIAL RICE  ", 
    price: "0,75", 
    image: "/images/products/cuidado-facial/fac5.svg",
    brand: "KARITE",
    description: "Mascarilla en velo facial aporta vitamina E,B1 y B3  ayudan a revitalizar e hidratación de la piel contiene ingredientes naturales que dejarán tu piel con suavidad y delicadeza. ",
    content: "30ml",
    tag: "Mascarillas"
  },
  { 
    id: "fac-006",
    name: "MASCARILLA FACIAL RICE  ", 
    price: "0,75", 
    image: "/images/products/cuidado-facial/fac6.svg",
    brand: "KARITE",
    description: "Mascarilla en velo facial aporta vitamina E,B1 y B3  ayudan a revitalizar e hidratación de la piel contiene ingredientes naturales que dejarán tu piel con suavidad y delicadeza. ",
    content: "30ml",
    tag: "Mascarillas"
  },
  // ↓ Agregar más productos de MASCARILLAS aquí ↓
];

// ═══════════════════════════════════════════════════════════════════════════
// COMBINAR TODOS - El orden aquí define cómo se ven en la web
// ═══════════════════════════════════════════════════════════════════════════
export const cuidadoFacialProducts: Product[] = [
  ...cuidadoFacial_Rostro,
  ...cuidadoFacial_Mascarillas,
];


// ═══════════════════════════════════════════════════════════════════════════
// CUIDADO CORPORAL - Organizado por Tags
// ═══════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────────
// MANOS (corp8 - corp16)
// ─────────────────────────────────────────────────────────────────────────────
const corporal_Manos: Product[] = [
  { 
    id: "cor-008",
    name: "CREMA DE MANOS MANZANA", 
    price: "4,50", 
    image: "/images/products/cuidado-corporal/corp8.svg",
    brand: "THE FRUIT COMPANY",
    description: "Crema de manos de rápida absorción con aroma a manzana su textura hidratante sin dejar sensación pegajosa contiene aloe vera, vitamina E,camomila y manteca de karite .",
    content: "50 ml",
    tag: "Manos"
  },
  { 
    id: "cor-009",
    name: "CREMA DE MANOS MELÓN", 
    price: "4,50", 
    image: "/images/products/cuidado-corporal/corp9.svg",
    brand: "THE FRUIT COMPANY",
    description: "Crema de manos de rápida absorción con aroma a melón su textura hidratante sin dejar sensación pegajosa contiene aloe vera, vitamina E,camomila y manteca de karite .",
    content: "50 ml",
    tag: "Manos"
  },
  { 
    id: "cor-010",
    name: "CREMA DE MANOS COCO", 
    price: "4,50", 
    image: "/images/products/cuidado-corporal/corp10.svg",
    brand: "THE FRUIT COMPANY",
    description: "Crema de manos de rápida absorción con aroma a coco su textura hidratante sin dejar sensación pegajosa contiene aloe vera, vitamina E,camomila y manteca de karite .",
    content: "50 ml",
    tag: "Manos"
  },
  { 
    id: "cor-011",
    name: "CREMA DE MANOS MORA", 
    price: "4,50", 
    image: "/images/products/cuidado-corporal/corp11.svg",
    brand: "THE FRUIT COMPANY",
    description: "Crema de manos de rápida absorción con aroma a mora su textura hidratante sin dejar sensación pegajosa contiene aloe vera, vitamina E,camomila y manteca de karite .",
    content: "50 ml",
    tag: "Manos"
  },
  { 
    id: "cor-012",
    name: "CREMA DE MANOS FRESA NATA", 
    price: "4,50", 
    image: "/images/products/cuidado-corporal/corp12.svg",
    brand: "THE FRUIT COMPANY",
    description: "Crema de manos de rápida absorción con aroma a fresa nata su textura hidratante sin dejar sensación pegajosa contiene aloe vera, vitamina E,camomila y manteca de karite .",
    content: "50 ml",
    tag: "Manos"
  },
  { 
    id: "cor-013",
    name: "CREMA DE MANOS PIÑA", 
    price: "4,50", 
    image: "/images/products/cuidado-corporal/corp13.svg",
    brand: "THE FRUIT COMPANY",
    description: "Crema de manos de rápida absorción con aroma a piña su textura hidratante sin dejar sensación pegajosa contiene aloe vera, vitamina E,camomila y manteca de karite .",
    content: "50 ml",
    tag: "Manos"
  },
  { 
    id: "cor-002",
    name: "Spray Limpiador y Perfumante Kuromi", 
    price: "4,99", 
    image: "/images/products/cuidado-corporal/corp2.svg",
    brand: "Sanrio Beauty",
    description: "Spray con el estilo rebelde de Kuromi. Fragancia intensa y efectiva limpieza.",
    content: "100ml",
    tag: "Manos"
  },
  { 
    id: "cor-003",
    name: "Spray Limpiador Cinnamoroll", 
    price: "4,99", 
    image: "/images/products/cuidado-corporal/corp3.svg",
    brand: "Sanrio Beauty",
    description: "Spray suave con aroma dulce inspirado en Cinnamoroll. Perfecto para uso diario.",
    content: "100ml",
    tag: "Manos"
  },
  { 
    id: "cor-004",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp4.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Manos"
  },
  { 
    id: "cor-005",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp5.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Manos"
  },
  { 
    id: "cor-006",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp6.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Manos"
  },
  { 
    id: "cor-007",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp7.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Manos"
  },
  // ↓ Agregar más productos de MANOS aquí ↓
];

// ─────────────────────────────────────────────────────────────────────────────
// DUCHA (corp17 - corp24)
// ─────────────────────────────────────────────────────────────────────────────
const corporal_Ducha: Product[] = [
  { 
    id: "cor-017",
    name: "GEL DE DUCHA SANDÍA ", 
    price: "15,00", 
    image: "/images/products/cuidado-corporal/corp17.svg",
    brand: "THE FRUIT COMPANY",
    description: "Gel de ducha con intenso aroma a sandía dejando un agradable aroma en tu piel durante todo el dia con un toque frutal sandía , plátano y cereza aplicar sobre la piel húmeda masajear hasta crear espuma y enjuagar .",
    content: "600 ml ",
    tag: "Ducha"
  },
  { 
    id: "cor-018",
    name: "GEL DE DUCHA MORA", 
    price: "15,00", 
    image: "/images/products/cuidado-corporal/corp18.svg",
    brand: "THE FRUIT COMPANY",
    description: "Gel de ducha con intenso aroma a mora dejando un agradable aroma en tu piel durante todo el dia con un toque frutal mora , plátano y cereza aplicar sobre la piel húmeda masajear hasta crear espuma y enjuagar .",
    content: "600 ml ",
    tag: "Ducha"
  },
  { 
    id: "cor-019",
    name: "GEL DE DUCHA FRESA NATA", 
    price: "15,00", 
    image: "/images/products/cuidado-corporal/corp19.svg",
    brand: "THE FRUIT COMPANY",
    description: "Gel de ducha con intenso aroma a fresa nata dejando un agradable aroma en tu piel durante todo el dia con un toque frutal fresa , plátano y cereza aplicar sobre la piel húmeda masajear hasta crear espuma y enjuagar .",
    content: "600 ml ",
    tag: "Ducha"
  },
  { 
    id: "cor-020",
    name: "GEL DE DUCHA MELÓN ", 
    price: "15,00", 
    image: "/images/products/cuidado-corporal/corp20.svg",
    brand: "THE FRUIT COMPANY",
    description: "Gel de ducha con intenso aroma a melón dejando un agradable aroma en tu piel durante todo el dia con un toque frutal melón , plátano y cereza aplicar sobre la piel húmeda masajear hasta crear espuma y enjuagar .",
    content: "600 ml ",
    tag: "Ducha"
  },
  { 
    id: "cor-021",
    name: "EXFOLIANTE CORPORAL 2 EN 1 SANDÍA  ", 
    price: "15,00", 
    image: "/images/products/cuidado-corporal/corp21.svg",
    brand: "THE FRUIT COMPANY",
    description: "Exfoliante corporal 2 en 1 tiene dos funciones exfolia y enjabona limpiando a profundidad dejando un delicioso aroma a sandía , fórmula 100% biodegradable contiene sales marinas y azúcar, aplícalo sobre la piel húmeda y masajea para eliminar la piel seca.",
    content: "400 ml",
    tag: "Ducha"
  },
  { 
    id: "cor-022",
    name: "EXFOLIANTE CORPORAL 2 EN 1 MELÓN", 
    price: "15,00", 
    image: "/images/products/cuidado-corporal/corp22.svg",
    brand: "THE FRUIT COMPANY",
    description: "Exfoliante corporal 2 en 1 tiene dos funciones exfolia y enjabona limpiando a profundidad dejando un delicioso aroma a melón , fórmula 100% biodegradable contiene sales marinas y azúcar, aplícalo sobre la piel húmeda y masajea para eliminar la piel seca.",
    content: "400 ml",
    tag: "Ducha"
  },
  { 
    id: "cor-023",
    name: "VEXFOLIANTE CORPORAL 2 EN 1 PIÑA", 
    price: "15,00", 
    image: "/images/products/cuidado-corporal/corp23.svg",
    brand: "THE FRUIT COMPANY",
    description: "Exfoliante corporal 2 en 1 tiene dos funciones exfolia y enjabona limpiando a profundidad dejando un delicioso aroma a piña , fórmula 100% biodegradable contiene sales marinas y azúcar, aplícalo sobre la piel húmeda y masajea para eliminar la piel seca.",
    content: "400 ml",
    tag: "Ducha"
  },
  { 
    id: "cor-024",
    name: "EXFOLIANTE CORPORAL 2 EN 1 FRESA", 
    price: "15,00", 
    image: "/images/products/cuidado-corporal/corp24.svg",
    brand: "THE FRUIT COMPANY",
    description: "Exfoliante corporal 2 en 1 tiene dos funciones exfolia y enjabona limpiando a profundidad dejando un delicioso aroma a fresa , fórmula 100% biodegradable contiene sales marinas y azúcar, aplícalo sobre la piel húmeda y masajea para eliminar la piel seca.",
    content: "400 ml",
    tag: "Ducha"
  },
  // ↓ Agregar más productos de DUCHA aquí ↓
];

// ─────────────────────────────────────────────────────────────────────────────
// CUERPO (corp25 - corp29)
// ─────────────────────────────────────────────────────────────────────────────
const corporal_Cuerpo: Product[] = [
  {
    id: "cor-025",
    name: "CREMA CORPORAL SANDÍA ", 
    price: "12,50", 
    image: "/images/products/cuidado-corporal/corp25.svg",
    brand: "THE FRUIT COMPANY",
    description: "Crema corporal con aroma a sandía su rápida absorción consigue hidratar en profundidad la piel durante 48 horas dejando una piel efecto seda y nutrida contiene aceite de aguacate,manteca de karite y vitamina E. ",
    content: "200 ml",
    tag: "Cuerpo"
  },
  { 
    id: "cor-026",
    name: "CREMA CORPORAL MELÓN", 
    price: "12,50", 
    image: "/images/products/cuidado-corporal/corp26.svg",
    brand: "THE FRUIT COMPANY",
    description: "Crema corporal con aroma a melón su rápida absorción consigue hidratar en profundidad la piel durante 48 horas dejando una piel efecto seda y nutrida contiene aceite de aguacate,manteca de karite y vitamina E. ",
    content: "200 ml",
    tag: "Cuerpo"
  },
  { 
    id: "cor-027",
    name: "CREMA CORPORAL MORA  ", 
    price: "12,50", 
    image: "/images/products/cuidado-corporal/corp27.svg",
    brand: "THE FRUIT COMPANY",
    description: "Crema corporal con aroma a mora su rápida absorción consigue hidratar en profundidad la piel durante 48 horas dejando una piel efecto seda y nutrida contiene aceite de aguacate,manteca de karite y vitamina E. ",
    content: "200 ml",
    tag: "Cuerpo"
  },
  { 
    id: "cor-028",
    name: "CREMA CORPORAL COCO ", 
    price: "12,50",  
    image: "/images/products/cuidado-corporal/corp28.svg",
    brand: "THE FRUIT COMPANY",
    description: "Crema corporal con aroma a coco su rápida absorción consigue hidratar en profundidad la piel durante 48 horas dejando una piel efecto seda y nutrida contiene aceite de aguacate,manteca de karite y vitamina E. ",
    content: "200 ml",
    tag: "Cuerpo"
  },
  { 
    id: "cor-029",
    name: "CREMA CORPORAL FRESA NATA", 
    price: "12,50", 
    image: "/images/products/cuidado-corporal/corp29.svg",
    brand: "THE FRUIT COMPANY",
    description: "Crema corporal con aroma a fresa nata su rápida absorción consigue hidratar en profundidad la piel durante 48 horas dejando una piel efecto seda y nutrida contiene aceite de aguacate,manteca de karite y vitamina E. ",
    content: "200 ml",
    tag: "Cuerpo"
  },
  {
    id: "cor-030",
    name: "MANTECA CORPORAL CHICLE DE FRESA ", 
    price: "15,00", 
    image: "/images/products/cuidado-corporal/corp30.svg",
    brand: "THE FRUIT COMPANY",
    description: "Crema corporal con aroma a chicle de fresa su rápida absorción consigue hidratar en profundidad la piel durante 48 horas dejando una piel efecto seda y nutrida contiene aceite de aguacate,manteca de karite y vitamina E. ",
    content: "250 ml",
    tag: "Cuerpo"
  },
  {
    id: "cor-031",
    name: "MANTECA CORPORAL NUBE DE COLORES", 
    price: "15,00", 
    image: "/images/products/cuidado-corporal/corp31.svg",
    brand: "THE FRUIT COMPANY",
    description: "Manteca corporal  nube de colores con delicioso aroma frutal a fresa, caramelo, vainilla contiene aceite de oliva ,aceite de jojoba y manteca de karite dejando un efecto en la piel hidratada y suave.",
    content: "250 ml",
    tag: "Cuerpo"
  },
  // ↓ Agregar más productos de CUERPO aquí ↓
];

// ═══════════════════════════════════════════════════════════════════════════
// COMBINAR TODOS - El orden aquí define cómo se ven en la web
// ═══════════════════════════════════════════════════════════════════════════
export const cuidadoCorporalProducts: Product[] = [
  ...corporal_Manos,
  ...corporal_Ducha,
  ...corporal_Cuerpo,
];

// ═══════════════════════════════════════════════════════════════════════════
// FRAGANCIAS - Organizado por Tags
// ═══════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────────
// PERFUMES
// ─────────────────────────────────────────────────────────────────────────────
const fragancias_Perfumes: Product[] = [
  { 
    id: "fra-001",
    name: "Perfume Floral Hello Kitty", 
    price: "12,50", 
    image: "/images/products/fragancias/fra1.svg",
    brand: "Sanrio Beauty",
    description: "Perfume con notas florales delicadas y dulces. Un aroma encantador inspirado en Hello Kitty.",
    content: "50ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-002",
    name: "Perfume Dulce My Melody", 
    price: "12,50", 
    image: "/images/products/fragancias/fra2.svg",
    brand: "Sanrio Beauty",
    description: "Fragancia dulce y femenina con notas de vainilla y frutas rojas, perfecta para el día a día.",
    content: "50ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-005",
    name: "Spray Corporal Vainilla", 
    price: "8,50", 
    image: "/images/products/fragancias/fra3.svg",
    brand: "Sweet Scents",
    description: "Spray corporal con aroma envolvente de vainilla. Perfecto para después del baño.",
    content: "200ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-006",
    name: "Perfume Frutal Cinnamoroll", 
    price: "12,50", 
    image: "/images/products/fragancias/fra4.svg",
    brand: "Sanrio Beauty",
    description: "Perfume frutal y fresco con notas de manzana y melocotón. Inspirado en la dulzura de Cinnamoroll.",
    content: "50ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-009",
    name: "BODY AND HAIR MIST BIKINI PARTY", 
    price: "15,00", 
    image: "/images/products/fragancias/fra5.svg",
    brand: "THE FRUIT COMPANY",
    description: "Splash corporal y para  cabello con glitter hidratante y refresca tu piel y cabello con su fórmula vegana enriquecida con un toque de brillo fragancia jugosa de fresa , manzanas y caña de azúcar ideal para usar en cualquier momento.",
    content: "200 ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-010",
    name: "BODY AND HAIR MIST ALOHA IT’S FRIDAY ", 
    price: "15,00", 
    image: "/images/products/fragancias/fra6.svg",
    brand: "THE FRUIT COMPANY",
    description: "Splash corporal y para  cabello con glitter hidratante y refresca tu piel y cabello con su fórmula vegana enriquecida con un toque de brillo fragancia jugosa de fresa , manzanas y caña de azúcar ideal para usar en cualquier momento.",
    content: "200 ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-011",
    name: "BODY AND HAIR MIST CORAL BEACH ", 
    price: "15,00", 
    image: "/images/products/fragancias/fra7.svg",
    brand: "THE FRUIT COMPANY",
    description: "Splash corporal y para  cabello con glitter hidratante y refresca tu piel y cabello con su fórmula vegana enriquecida con un toque de brillo fragancia jugosa de fresa , manzanas y caña de azúcar ideal para usar en cualquier momento.",
    content: "200 ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-012",
    name: "Perfume Frutal Cinnamoroll", 
    price: "12,50", 
    image: "/images/products/fragancias/fra8.svg",
    brand: "Sanrio Beauty", 
    description: "Perfume frutal y fresco con notas de manzana y melocotón. Inspirado en la dulzura de Cinnamoroll.",
    content: "50ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-013",
    name: "Perfume Floral Hello Kitty", 
    price: "12,50", 
    image: "/images/products/fragancias/fra9.svg",
    brand: "Sanrio Beauty", 
    description: "Perfume con notas florales delicadas y dulces. Un aroma encantador inspirado en Hello Kitty.",
    content: "50ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-014",
    name: "Perfume Dulce My Melody", 
    price: "12,50", 
    image: "/images/products/fragancias/fra10.svg",
    brand: "Sanrio Beauty", 
    description: "Fragancia dulce y femenina con notas de vainilla y frutas rojas, perfecta para el día a día.",
    content: "50ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-015",
    name: "Spray Corporal Vainilla", 
    price: "8,50", 
    image: "/images/products/fragancias/fra11.svg",
    brand: "Sweet Scents", 
    description: "Spray corporal con aroma envolvente de vainilla. Perfecto para luego del baño.",
    content: "200ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-016",
    name: "Perfume Frutal Cinnamoroll", 
    price: "12,50", 
    image: "/images/products/fragancias/fra12.svg",
    brand: "Sanrio Beauty", 
    description: "Perfume frutal y fresco con notas de manzana y melocotón. Inspirado en la dulzura de Cinnamoroll.",
    content: "50ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-017",
    name: "Perfume Floral Hello Kitty", 
    price: "12,50", 
    image: "/images/products/fragancias/fra13.svg",
    brand: "Sanrio Beauty", 
    description: "Perfume con notas florales delicadas y dulces. Un aroma encantador inspirado en Hello Kitty.",
    content: "50ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-018",
    name: "Perfume Dulce My Melody", 
    price: "12,50", 
    image: "/images/products/fragancias/fra14.svg",
    brand: "Sanrio Beauty", 
    description: "Fragancia dulce y femenina con notas de vainilla y frutas rojas, perfecta para el día a día.",
    content: "50ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-019",
    name: "Spray Corporal Vainilla", 
    price: "8,50", 
    image: "/images/products/fragancias/fra15.svg",
    brand: "Sweet Scents", 
    description: "Spray corporal con aroma envolvente de vainilla. Perfecto para luego del baño.",
    content: "200ml",
    tag: "Perfumes"
  },
  // ↓ Agregar más PERFUMES aquí ↓
];

// ─────────────────────────────────────────────────────────────────────────────
// VELAS
// ─────────────────────────────────────────────────────────────────────────────
const fragancias_Velas: Product[] = [
  { 
    id: "fra-026",
    name: "Velas Aromáticas Pack 3", 
    price: "9,99", 
    image: "/images/products/fragancias/fra26.svg", 
    brand: "Cozy Home",
    description: "Set de 3 velas aromáticas con fragancias variadas: lavanda, vainilla y rosa. Perfectas para crear ambiente.",
    content: "3 x 80g",
    tag: "Velas"
  },  
  { 
    id: "fra-027",
    name: "Velas Aromáticas Pack 3", 
    price: "9,99", 
    image: "/images/products/fragancias/fra27.svg",
    brand: "Cozy Home",
    description: "Set de 3 velas aromáticas con fragancias variadas: lavanda, vainilla y rosa. Perfectas para crear ambiente.", 
    content: "3 x 80g",
    tag: "Velas"
  },
  { 
    id: "fra-028",
    name: "Velas Aromáticas Pack 3", 
    price: "9,99",  
    image: "/images/products/fragancias/fra28.svg",
    brand: "Cozy Home", 
    description: "Set de 3 velas aromáticas con fragancias variadas: lavanda, vainilla y rosa. Perfectas para crear ambiente.",
    content: "3 x 80g",
    tag: "Velas"
  },
  // ↓ Agregar más VELAS aquí ↓
];

// ─────────────────────────────────────────────────────────────────────────────
// AMBIENTADORES
// ─────────────────────────────────────────────────────────────────────────────
const fragancias_Ambientadores: Product[] = [
  { 
    id: "fra-003",
    name: "Ambientador de Coche Batido de Fresa Kawaii", 
    price: "1,50", 
    image: "/images/products/fragancias/fra16.svg",
    brand: "Kawaii Fresh",
    description: "Ambientador con delicioso aroma a batido de fresa para mantener tu coche con un olor irresistible.",
    content: "8ml",
    tag: "Ambientadores"
  },
  { 
    id: "fra-004",
    name: "Ambientador de Coche Limón Kawaii", 
    price: "1,50", 
    image: "/images/products/fragancias/fra17.svg",
    brand: "Kawaii Fresh",
    description: "Ambientador cítrico refrescante que elimina malos olores y deja tu auto con frescura duradera.",
    content: "8ml",
    tag: "Ambientadores"
  },
  { 
    id: "fra-020",
    name: "Ambientador de Coche Batido de Fresa Kawaii", 
    price: "1,50", 
    image: "/images/products/fragancias/fra18.svg",
    brand: "Kawaii Fresh",
    description: "Ambientador con delicioso aroma a batido de fresa para mantener tu coche con un olor irresistible.",
    content: "8ml",
    tag: "Ambientadores"
  },
  { 
    id: "fra-021",
    name: "Ambientador de Coche Limón Kawaii", 
    price: "1,50", 
    image: "/images/products/fragancias/fra19.svg",
    brand: "Kawaii Fresh",
    description: "Ambientador cítrico refrescante que elimina malos olores y deja tu auto con frescura duradera.",
    content: "8ml",
    tag: "Ambientadores"
  },
  { 
    id: "fra-007",
    name: "Aceite Esencial Lavanda", 
    price: "6,99", 
    image: "/images/products/fragancias/fra20.svg",
    brand: "Aromatherapy Plus",
    description: "Aceite esencial puro de lavanda para aromaterapia. Ideal para relajación y mejor sueño.",
    content: "15ml",
    tag: "Ambientadores"
  },
  { 
    id: "fra-008",
    name: "Velas Aromáticas Pack 3", 
    price: "9,99", 
    image: "/images/products/fragancias/fra21.svg",
    brand: "Cozy Home",
    description: "Set de 3 velas aromáticas con fragancias variadas: lavanda, vainilla y rosa. Perfectas para crear ambiente.",
    content: "3 x 80g",
    tag: "Ambientadores"
  },
  { 
    id: "fra-022",
    name: "Aceite Esencial Lavanda", 
    price: "6,99", 
    image: "/images/products/fragancias/fra22.svg",
    brand: "Aromatherapy Plus",
    description: "Aceite esencial puro de lavanda para aromaterapia. Ideal para relajación y mejor sueño.",
    content: "15ml",
    tag: "Ambientadores"
  }, 
  { 
    id: "fra-023",
    name: "Velas Aromáticas Pack 3", 
    price: "9,99", 
    image: "/images/products/fragancias/fra23.svg",
    brand: "Cozy Home",
    description: "Set de 3 velas aromáticas con fragancias variadas: lavanda, vainilla y rosa. Perfectas para crear ambiente.",
    content: "3 x 80g",
    tag: "Ambientadores"
  },
  { 
    id: "fra-024",
    name: "Velas Aromáticas Pack 3", 
    price: "9,99", 
    image: "/images/products/fragancias/fra24.svg",
    brand: "Cozy Home",
    description: "Set de 3 velas aromáticas con fragancias variadas: lavanda, vainilla y rosa. Perfectas para crear ambiente.",
    content: "3 x 80g",
    tag: "Ambientadores"
  },
  { 
    id: "fra-025",
    name: "Velas Aromáticas Pack 3", 
    price: "9,99", 
    image: "/images/products/fragancias/fra25.svg",
    brand: "Cozy Home",
    description: "Set de 3 velas aromáticas con fragancias variadas: lavanda, vainilla y rosa. Perfectas para crear ambiente.",
    content: "3 x 80g",
    tag: "Ambientadores"
  },
  // ↓ Agregar más AMBIENTADORES aquí ↓
];

// ═══════════════════════════════════════════════════════════════════════════
// COMBINAR TODOS - El orden aquí define cómo se ven en la web
// ═══════════════════════════════════════════════════════════════════════════
export const fraganciasProducts: Product[] = [
  ...fragancias_Perfumes,
  ...fragancias_Ambientadores,
  ...fragancias_Velas,
  
];

// Productos - Accesorios
export const accesoriosProducts: Product[] = [
  { 
    id: "acc-001",
    name: "SET DE ESPONJA PARA POLVO", 
    price: "2,50", 
    image: "/images/products/accesorios/ac1.svg",
    brand: "AMY BEAUTY",
    description: "Disponible en 4 colores ; Esponjas  de maquillaje AMY BEAUTY utilizadas para aplicar polvo suelto o compacto y base líquida.",
    content: "1 unidad"
  },
  { 
    id: "acc-002",
    name: "SET DE ESPONJA PARA POLVO ", 
    price: "2,50", 
    image: "/images/products/accesorios/ac2.svg",
    brand: "AMY BEAUTY",
    description: "Disponible en 4 colores ; Esponjas  de maquillaje AMY BEAUTY utilizadas para aplicar polvo suelto o compacto y base líquida.",
    content: "5 pinceles"
  },
  { 
    id: "acc-003",
    name: "SET DE ESPONJA PARA POLVO", 
    price: "2,50", 
    image: "/images/products/accesorios/ac3.svg",
    brand: "AMY BEAUTY",
    description: "Disponible en 4 colores ; Esponjas  de maquillaje AMY BEAUTY utilizadas para aplicar polvo suelto o compacto y base líquida.",
    content: "1 unidad"
  },
  { 
    id: "acc-004",
    name: "SET DE ESPONJA PARA POLVO", 
    price: "2,50", 
    image: "/images/products/accesorios/ac4.svg",
    brand: "AMY BEAUTY",
    description: "Disponible en 4 colores ; Esponjas  de maquillaje AMY BEAUTY utilizadas para aplicar polvo suelto o compacto y base líquida.",
    content: "1 unidad"
  },
  { 
    id: "acc-005",
    name: "Lima de Uñas Gatito Pusheen", 
    price: "1,50", 
    image: "/images/products/accesorios/ac5.svg",
    brand: "Pusheen",
    description: "Lima de uñas con forma de gatito Pusheen. Doble cara para dar forma y suavizar.",
    content: "1 unidad"
  },
  { 
    id: "acc-006",
    name: "ESPONJA DESMAQUILLANTE ", 
    price: "1,50", 
    image: "/images/products/accesorios/ac6.svg",
    brand: "AMY BEAUTY",
    description: "Accesorio cosmético reutilizables y lavables para eliminar el maquillaje e impurezas de los poros con material de microfibra suave para la piel. ",
    content: "1 unidad"
  },
  { 
    id: "acc-007",
    name: "ESPONJA DESMAQUILLANTE ", 
    price: "1,50", 
    image: "/images/products/accesorios/ac7.svg",
    brand: "AMY BEAUTY",
    description: "Accesorio cosmético reutilizables y lavables para eliminar el maquillaje e impurezas de los poros con material de microfibra suave para la piel. ",
    content: "1 unidad"
  },
];

// Función helper para obtener todos los productos
export const getAllProducts = (): Product[] => {
  return [
    ...novedadesProducts,
    ...maquillajeProducts,
    ...cuidadoFacialProducts,
    ...cuidadoCorporalProducts,
    ...fraganciasProducts,
    ...accesoriosProducts,
  ];
};

// Función helper para buscar un producto por ID
export const getProductById = (id: string): Product | undefined => {
  return getAllProducts().find(product => product.id === id);
};
