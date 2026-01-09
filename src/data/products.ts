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
    content: "1 unidad"
  },
  { 
    id: "nov-002",
    name: "Ambientador mikado - Nube de Colores", 
    price: "3,50", 
    image: "/images/products/novedades/colores.svg",
    brand: "Magic Beauty",
    description: "Colorete que cambia de color según el PH de tu piel, adaptándose a tu tono natural para un rubor perfecto.",
    content: "5g"
  },
  { 
    id: "nov-003",
    name: "Ushas Make-Up Remover", 
    price: "1,50", 
    image: "/images/products/novedades/prod3.svg",
    brand: "Kawaii Fresh",
    description: "Delicioso ambientador con aroma a batido de fresa que mantendrá tu coche con un olor dulce y agradable.",
    content: "8ml"
  },
  { 
    id: "nov-004",
    name: "Sérum Facial Naranja + Carbón", 
    price: "4,99", 
    image: "/images/products/novedades/prod4.svg",
    brand: "Natural Glow",
    description: "Sérum facial con vitamina C de naranja y carbón activado para una piel radiante y libre de impurezas.",
    content: "30ml"
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
    name: "Colorete Mágico PH", 
    price: "3,50", 
    image: "/images/products/maquillaje/maq1.svg",
    brand: "Magic Beauty",
    description: "Colorete que reacciona al PH de tu piel, creando un rubor personalizado y natural.",
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
    name: "Iluminador Gelatina Rostro y Escote", 
    price: "3,50", 
    image: "/images/products/maquillaje/maq3.svg",
    brand: "Glow Lab",
    description: "Iluminador con textura de gelatina que se funde con la piel para un brillo natural y radiante.",
    content: "15g",
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
    name: "Paleta de Sombras Teléfono Barbie", 
    price: "8,95", 
    image: "/images/products/maquillaje/maq5.svg",
    brand: "Barbie Beauty",
    description: "Paleta de sombras con forma de teléfono retro Barbie. Incluye 12 tonos pigmentados y versátiles.",
    content: "12 colores",
    tag: "Labiales"
  },
  { 
    id: "maq-006",
    name: "Paleta de Sombras Teléfono Barbie", 
    price: "8,95", 
    image: "/images/products/maquillaje/maq6.svg",
    brand: "Barbie Beauty",
    description: "Paleta de sombras con forma de teléfono retro Barbie. Incluye 12 tonos pigmentados y versátiles.",
    content: "12 colores",
    tag: "Labiales"
  },
  { 
    id: "maq-007",
    name: "Paleta de Sombras Teléfono Barbie", 
    price: "8,95", 
    image: "/images/products/maquillaje/maq7.svg",
    brand: "Barbie Beauty",
    description: "Paleta de sombras con forma de teléfono retro Barbie. Incluye 12 tonos pigmentados y versátiles.",
    content: "12 colores",
    tag: "Labiales"
  },
  { 
    id: "maq-008",
    name: "Paleta de Sombras Teléfono Barbie", 
    price: "8,95", 
    image: "/images/products/maquillaje/maq8.svg",
    brand: "Barbie Beauty",
    description: "Paleta de sombras con forma de teléfono retro Barbie. Incluye 12 tonos pigmentados y versátiles.",
    content: "12 colores",
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
    name: "Paleta de Sombras Telafone Barbie", 
    price: "8,95", 
    image: "/images/products/maquillaje/maq13.svg",
    brand: "Barbie Beauty",
    description: "Paleta de sombras con forma de telafone retro Barbie. Incluye 12 tonos pigmentados y versátiles.",
    content: "12 colores",
    tag: "Labiales"
  },
  { 
    id: "maq-014",
    name: "Paleta de Sombras Telafone Barbie", 
    price: "8,95", 
    image: "/images/products/maquillaje/maq14.svg",
    brand: "Barbie Beauty",
    description: "Paleta de sombras con forma de telafone retro Barbie. Incluye 12 tonos pigmentados y versátiles.",
    content: "12 colores",
    tag: "Labiales"
  },
  { 
    id: "maq-015",
    name: "Paleta de Sombras Telafone Barbie", 
    price: "8,95", 
    image: "/images/products/maquillaje/maq15.svg",
    brand: "Barbie Beauty",
    description: "Paleta de sombras con forma de telafone retro Barbie. Incluye 12 tonos pigmentados y versátiles.",
    content: "12 colores",
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
    name: "Paleta de Sombras Telafone Barbie", 
    price: "8,95", 
    image: "/images/products/maquillaje/maq16.svg",
    brand: "Barbie Beauty",
    description: "Paleta de sombras con forma de telafone retro Barbie. Incluye 12 tonos pigmentados y versátiles.",
    content: "12 colores",
    tag: "Ojos"
  },
  { 
    id: "maq-017",
    name: "Paleta de Sombras Telafone Barbie", 
    price: "8,95", 
    image: "/images/products/maquillaje/maq17.svg",
    brand: "Barbie Beauty",
    description: "Paleta de sombras con forma de telafone retro Barbie. Incluye 12 tonos pigmentados y versátiles.",
    content: "12 colores",
    tag: "Ojos"
  },
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

// Productos - Cuidado Facial
export const cuidadoFacialProducts: Product[] = [
  { 
    id: "fac-001",
    name: "Sérum Facial Naranja + Carbón", 
    price: "4,99", 
    image: "/images/products/cuidado-facial/fac1.svg",
    brand: "Natural Glow",
    description: "Sérum con vitamina C y carbón activado para iluminar y purificar tu piel al mismo tiempo.",
    content: "30ml",
    tag: "Rostro"
  },
  { 
    id: "fac-002",
    name: "Parches Anti Imperfecciones", 
    price: "4,50", 
    image: "/images/products/cuidado-facial/fac2.svg",
    brand: "Clear Skin",
    description: "Parches hidrocoloides que absorben impurezas y reducen la inflamación durante la noche.",
    content: "36 parches",
    tag: "Rostro"
  },
  { 
    id: "fac-003",
    name: "Sérum Facial Kiwi + Carbón", 
    price: "4,99", 
    image: "/images/products/cuidado-facial/fac3.svg",
    brand: "Natural Glow",
    description: "Sérum revitalizante con extracto de kiwi y carbón activado para una piel fresca y limpia.",
    content: "30ml",
    tag: "Rostro"
  },
  { 
    id: "fac-004",
    name: "Sérum Nutritivo Facial Hello Kitty", 
    price: "9,90", 
    image: "/images/products/cuidado-facial/fac4.svg",
    brand: "Sanrio Beauty",
    description: "Sérum nutritivo con diseño adorable de Hello Kitty. Hidratación profunda y vitaminas esenciales.",
    content: "50ml",
    tag: "Rostro"
  },
  { 
    id: "fac-005",
    name: "Sérum Facial Kiwi + Carbón", 
    price: "4,99", 
    image: "/images/products/cuidado-facial/fac5.svg",
    brand: "Natural Glow",
    description: "Sérum revitalizante con extracto de kiwi y carbón activado para una piel fresca y limpia.",
    content: "30ml",
    tag: "Rostro"
  },
  { 
    id: "fac-006",
    name: "Sérum Facial Kiwi + Carbón", 
    price: "4,99", 
    image: "/images/products/cuidado-facial/fac6.svg",
    brand: "Natural Glow",
    description: "Sérum revitalizante con extracto de kiwi y carbón activado para una piel fresca y limpia.",
    content: "30ml",
    tag: "Rostro"
  },
  { 
    id: "fac-007",
    name: "Sérum Facial Kiwi + Carbón", 
    price: "4,99", 
    image: "/images/products/cuidado-facial/fac7.svg",
    brand: "Natural Glow",
    description: "Sérum revitalizante con extracto de kiwi y carbón activado para una piel fresca y limpia.",
    content: "30ml",
    tag: "Rostro"
  },
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
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp8.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Manos"
  },
  { 
    id: "cor-009",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp9.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Manos"
  },
  { 
    id: "cor-010",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp10.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Manos"
  },
  { 
    id: "cor-011",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp11.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Manos"
  },
  { 
    id: "cor-012",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp12.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Manos"
  },
  { 
    id: "cor-013",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp13.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Manos"
  },
  { 
    id: "cor-014",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp14.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Manos"
  },
  { 
    id: "cor-015",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp15.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Manos"
  },
  { 
    id: "cor-016",
    name: "Bomba de Baño ", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp16.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Manos"
  },
  { 
    id: "cor-001",
    name: "Latas de toallitas húmedas  desmaquillante", 
    price: "1,50", 
    image: "/images/products/cuidado-corporal/corp1.svg",
    brand: "Sanrio Beauty",
    description: "Perfectas para limpiar y eliminar la suciedad de tus manos y cara, son perfectas para llevar en tu bolso.",
    content: "100ml",
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
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp17.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Ducha"
  },
  { 
    id: "cor-018",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp18.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Ducha"
  },
  { 
    id: "cor-019",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp19.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Ducha"
  },
  { 
    id: "cor-020",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp20.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Ducha"
  },
  { 
    id: "cor-021",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp21.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Ducha"
  },
  { 
    id: "cor-022",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp22.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Ducha"
  },
  { 
    id: "cor-023",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp23.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Ducha"
  },
  { 
    id: "cor-024",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp24.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
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
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp25.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Cuerpo"
  },
  { 
    id: "cor-026",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp26.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Cuerpo"
  },
  { 
    id: "cor-027",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp27.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Cuerpo"
  },
  { 
    id: "cor-028",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75",  
    image: "/images/products/cuidado-corporal/corp28.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
    tag: "Cuerpo"
  },
  { 
    id: "cor-029",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/cuidado-corporal/corp29.svg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g",
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
    name: "Perfume Floral Hello Kitty", 
    price: "12,50", 
    image: "/images/products/fragancias/fra5.svg",
    brand: "Sanrio Beauty",
    description: "Perfume con notas florales delicadas y dulces. Un aroma encantador inspirado en Hello Kitty.",
    content: "50ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-010",
    name: "Perfume Dulce My Melody", 
    price: "12,50", 
    image: "/images/products/fragancias/fra6.svg",
    brand: "Sanrio Beauty",
    description: "Fragancia dulce y femenina con notas de vainilla y frutas rojas, perfecta para el día a día.",
    content: "50ml",
    tag: "Perfumes"
  },
  { 
    id: "fra-011",
    name: "Spray Corporal Vainilla", 
    price: "8,50", 
    image: "/images/products/fragancias/fra7.svg",
    brand: "Sweet Scents",
    description: "Spray corporal con aroma envolvente de vainilla. Perfecto para luego del baño.",
    content: "200ml",
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
    id: "fra-007",
    name: "Aceite Esencial Lavanda", 
    price: "6,99", 
    image: "/images/products/fragancias/fra20.svg",
    brand: "Aromatherapy Plus",
    description: "Aceite esencial puro de lavanda para aromaterapia. Ideal para relajación y mejor sueño.",
    content: "15ml",
    tag: "Velas"
  },
  { 
    id: "fra-008",
    name: "Velas Aromáticas Pack 3", 
    price: "9,99", 
    image: "/images/products/fragancias/fra21.svg",
    brand: "Cozy Home",
    description: "Set de 3 velas aromáticas con fragancias variadas: lavanda, vainilla y rosa. Perfectas para crear ambiente.",
    content: "3 x 80g",
    tag: "Velas"
  },
  { 
    id: "fra-022",
    name: "Aceite Esencial Lavanda", 
    price: "6,99", 
    image: "/images/products/fragancias/fra22.svg",
    brand: "Aromatherapy Plus",
    description: "Aceite esencial puro de lavanda para aromaterapia. Ideal para relajación y mejor sueño.",
    content: "15ml",
    tag: "Velas"
  }, 
  { 
    id: "fra-023",
    name: "Velas Aromáticas Pack 3", 
    price: "9,99", 
    image: "/images/products/fragancias/fra23.svg",
    brand: "Cozy Home",
    description: "Set de 3 velas aromáticas con fragancias variadas: lavanda, vainilla y rosa. Perfectas para crear ambiente.",
    content: "3 x 80g",
    tag: "Velas"
  },
  { 
    id: "fra-024",
    name: "Velas Aromáticas Pack 3", 
    price: "9,99", 
    image: "/images/products/fragancias/fra24.svg",
    brand: "Cozy Home",
    description: "Set de 3 velas aromáticas con fragancias variadas: lavanda, vainilla y rosa. Perfectas para crear ambiente.",
    content: "3 x 80g",
    tag: "Velas"
  },
  { 
    id: "fra-025",
    name: "Velas Aromáticas Pack 3", 
    price: "9,99", 
    image: "/images/products/fragancias/fra25.svg",
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
  // ↓ Agregar más AMBIENTADORES aquí ↓
];

// ═══════════════════════════════════════════════════════════════════════════
// COMBINAR TODOS - El orden aquí define cómo se ven en la web
// ═══════════════════════════════════════════════════════════════════════════
export const fraganciasProducts: Product[] = [
  ...fragancias_Perfumes,
  ...fragancias_Velas,
  ...fragancias_Ambientadores,
];

// Productos - Accesorios
export const accesoriosProducts: Product[] = [
  { 
    id: "acc-001",
    name: "Pinzas de Depilar Pusheen", 
    price: "2,50", 
    image: "/images/products/accesorios/ac1.svg",
    brand: "Pusheen",
    description: "Pinzas de depilar de alta precisión con adorable diseño de Pusheen. Agarre cómodo y efectivo.",
    content: "1 unidad"
  },
  { 
    id: "acc-002",
    name: "Set de Pinceles Maquillaje Hello Kitty", 
    price: "8,99", 
    image: "/images/products/accesorios/ac2.svg",
    brand: "Sanrio Beauty",
    description: "Set de 5 pinceles esenciales con diseño de Hello Kitty. Cerdas suaves y mango ergonómico.",
    content: "5 pinceles"
  },
  { 
    id: "acc-003",
    name: "Esponja de Maquillaje Forma Corazón", 
    price: "3,50", 
    image: "/images/products/accesorios/ac3.svg",
    brand: "Beauty Tools",
    description: "Esponja de maquillaje en forma de corazón para aplicación perfecta de base y corrector.",
    content: "1 unidad"
  },
  { 
    id: "acc-004",
    name: "Porta Brochas de Viaje Kuromi", 
    price: "5,99", 
    image: "/images/products/accesorios/ac4.svg",
    brand: "Sanrio Beauty",
    description: "Estuche portátil para brochas con diseño de Kuromi. Protege tus herramientas de maquillaje.",
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
    name: "Cepillo para Pelo Hello Kitty", 
    price: "6,50", 
    image: "/images/products/accesorios/ac6.svg",
    brand: "Sanrio Beauty",
    description: "Cepillo desenredante con diseño de Hello Kitty. Cerdas flexibles que no dañan el cabello.",
    content: "1 unidad"
  },
  { 
    id: "acc-007",
    name: "Espejo Compacto My Melody", 
    price: "4,99", 
    image: "/images/products/accesorios/ac7.svg",
    brand: "Sanrio Beauty",
    description: "Espejo compacto con doble cara (normal y aumento) decorado con My Melody. Ideal para el bolso.",
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
