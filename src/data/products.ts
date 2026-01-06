// Tipos e interfaces
export interface Product {
  name: string;
  price: string;
  image?: string;
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
  gradient: string;
  href: string;
}

// Imágenes del carrusel
export const carouselImages: CarouselImage[] = [
  { src: "/images/carousel/imagen1.jpg", alt: "Paleta de sombras 1" },
  { src: "/images/carousel/imagen2.jpg", alt: "Paleta de sombras 2" },
  { src: "/images/carousel/imagen3.jpg", alt: "Paleta de sombras 3" },
  { src: "/images/carousel/imagen4.jpg", alt: "Paleta de sombras 4" },
];

// Items de navegación con rutas reales
export const navigationItems: NavigationItem[] = [
  { name: "Maquillaje", href: "/maquillaje" },
  { name: "Cuidado facial", href: "/cuidado-facial" },
  { name: "Cuidado corporal", href: "/cuidado-corporal" },
  { name: "Fragancias", href: "/fragancias" },
  { name: "Accesorios", href: "/accesorios" },
  { name: "Labiales", href: "/labiales" },
];

// Categorías con iconos
export const categories: Category[] = [
  { name: "MAQUILLAJE", icon: "/images/iconos/icono1.png", gradient: "from-pink-50 to-pink-100", href: "/maquillaje" },
  { name: "CUIDADO FACIAL", icon: "/images/iconos/icono2.png", gradient: "from-green-50 to-green-100", href: "/cuidado-facial" },
  { name: "CUIDADO CORPORAL", icon: "/images/iconos/icono3.png", gradient: "from-blue-50 to-blue-100", href: "/cuidado-corporal" },
  { name: "FRAGANCIAS", icon: "/images/iconos/icono4.png", gradient: "from-purple-50 to-purple-100", href: "/fragancias" },
  { name: "ACCESORIOS", icon: "/images/iconos/icono5.png", gradient: "from-yellow-50 to-yellow-100", href: "/accesorios" },
  { name: "LABIALES", icon: "/images/iconos/icono6.png", gradient: "from-red-50 to-red-100", href: "/labiales" },
];

// Productos - Novedades
export const novedadesProducts: Product[] = [
  { name: "Pinzas de Depilar Pusheen", price: "2,50", image: "/images/products/novedades/colores.svg" },
  { name: "Colorete Mágico PH", price: "3,50", image: "/images/products/novedades/ambientador.svg" },
  { name: "Ambientador de Coche Batido de Fresa Kawaii", price: "1,50", image: "/images/products/ambientador-fresa.jpg" },
  { name: "Sérum Facial Naranja + Carbón", price: "4,99", image: "/images/products/serum-naranja.jpg" },
  { name: "Parches Anti Imperfecciones Acné", price: "4,50", image: "/images/products/parches-acne.jpg" },
  { name: "Lima de Uñas Gatito Pusheen", price: "1,50", image: "/images/products/lima-pusheen.jpg" },
  { name: "Esmalte de uñas Crema My Melody", price: "2,99", image: "/images/products/esmalte-melody.jpg" },
  { name: "Ambientador de Coche Limón Kawaii", price: "1,50", image: "/images/products/ambientador-limon.jpg" },
];

// Productos - Maquillaje
export const maquillajeProducts: Product[] = [
  { name: "Colorete Mágico PH", price: "3,50", image: "/images/products/colorete-ph.jpg" },
  { name: "Esmalte de uñas Crema My Melody", price: "2,99", image: "/images/products/esmalte-melody.jpg" },
  { name: "Iluminador Gelatina Rostro y Escote", price: "3,50", image: "/images/products/iluminador-gelatina.jpg" },
  { name: "Paleta de Sombras Teléfono Barbie", price: "8,95", image: "/images/products/paleta-barbie.jpg" },
];

// Productos - Cuidado Facial
export const cuidadoFacialProducts: Product[] = [
  { name: "Sérum Facial Naranja + Carbón", price: "4,99", image: "/images/products/serum-naranja-carbon.jpg" },
  { name: "Parches Anti Imperfecciones", price: "4,50", image: "/images/products/parches-imperfecciones.jpg" },
  { name: "Sérum Facial Kiwi + Carbón", price: "4,99", image: "/images/products/serum-kiwi-carbon.jpg" },
  { name: "Sérum Nutritivo Facial Hello Kitty", price: "9,90", image: "/images/products/serum-hellokitty.jpg" },
];

// Productos - Cuidado Corporal
export const cuidadoCorporalProducts: Product[] = [
  { name: "Spray Limpiador y Perfumante Hello Kitty", price: "4,99", image: "/images/products/spray-hellokitty.jpg" },
  { name: "Spray Limpiador y Perfumante Kuromi", price: "4,99", image: "/images/products/spray-kuromi.jpg" },
  { name: "Spray Limpiador Cinnamoroll", price: "4,99", image: "/images/products/spray-cinnamoroll.jpg" },
  { name: "Bomba de Baño Efervescente Hello Kitty", price: "3,75", image: "/images/products/bomba-bano-hellokitty.jpg" },
];

// Productos - Fragancias
export const fraganciasProducts: Product[] = [
  { name: "Perfume Floral Hello Kitty", price: "12,50", image: "/images/products/perfume-hellokitty.jpg" },
  { name: "Perfume Dulce My Melody", price: "12,50", image: "/images/products/perfume-melody.jpg" },
  { name: "Ambientador de Coche Batido de Fresa Kawaii", price: "1,50", image: "/images/products/ambientador-fresa.jpg" },
  { name: "Ambientador de Coche Limón Kawaii", price: "1,50", image: "/images/products/ambientador-limon.jpg" },
  { name: "Spray Corporal Vainilla", price: "8,50", image: "/images/products/spray-vainilla.jpg" },
  { name: "Perfume Frutal Cinnamoroll", price: "12,50", image: "/images/products/perfume-cinnamoroll.jpg" },
  { name: "Aceite Esencial Lavanda", price: "6,99", image: "/images/products/aceite-lavanda.jpg" },
  { name: "Velas Aromáticas Pack 3", price: "9,99", image: "/images/products/velas-pack.jpg" },
];

// Productos - Accesorios
export const accesoriosProducts: Product[] = [
  { name: "Pinzas de Depilar Pusheen", price: "2,50", image: "/images/products/pinzas-pusheen.jpg" },
  { name: "Set de Pinceles Maquillaje Hello Kitty", price: "8,99", image: "/images/products/pinceles-hellokitty.jpg" },
  { name: "Esponja de Maquillaje Forma Corazón", price: "3,50", image: "/images/products/esponja-corazon.jpg" },
  { name: "Porta Brochas de Viaje Kuromi", price: "5,99", image: "/images/products/porta-brochas.jpg" },
  { name: "Lima de Uñas Gatito Pusheen", price: "1,50", image: "/images/products/lima-pusheen.jpg" },
  { name: "Cepillo para Pelo Hello Kitty", price: "6,50", image: "/images/products/cepello-hellokitty.jpg" },
  { name: "Espejo Compacto My Melody", price: "4,99", image: "/images/products/espejo-melody.jpg" },
  { name: "Bolsa de Maquillaje Cinnamoroll", price: "7,50", image: "/images/products/bolsa-maquillaje.jpg" },
];

// Productos - Labiales
export const labialesProducts: Product[] = [
  { name: "Labial Mate Rosa Barbie", price: "3,50", image: "/images/products/labial-rosa.jpg" },
  { name: "Labial Brillo Fresa Kawaii", price: "2,99", image: "/images/products/labial-fresa.jpg" },
  { name: "Set de Labiales Hello Kitty", price: "8,50", image: "/images/products/set-labiales-hellokitty.jpg" },
  { name: "Labial Hidratante Cereza", price: "4,25", image: "/images/products/labial-cereza.jpg" },
  { name: "Bálsamo Labial Vainilla", price: "2,50", image: "/images/products/balsamo-vainilla.jpg" },
  { name: "Labial Tinte Rojo Intenso", price: "5,99", image: "/images/products/labial-rojo.jpg" },
  { name: "Gloss Labial Melocotón", price: "3,75", image: "/images/products/gloss-melocoton.jpg" },
  { name: "Labial Metalizado Rosa Oro", price: "4,50", image: "/images/products/labial-oro.jpg" },
];
