// Tipos e interfaces
export interface Product {
  id: string;
  name: string;
  price: string;
  image?: string;
  brand?: string;
  description?: string;
  content?: string;
}

// Número de WhatsApp para compras (cambiar por el número real)
export const WHATSAPP_NUMBER = "593997393838"; // Formato: código país + número sin espacios ni guiones

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

// Categorías con iconos - Colores pastel variados
export const categories: Category[] = [
  { name: "MAQUILLAJE", icon: "/images/iconos/icono1.png", gradient: "from-rose-100 to-rose-200", href: "/maquillaje" },
  { name: "CUIDADO FACIAL", icon: "/images/iconos/icono2.png", gradient: "from-teal-100 to-teal-200", href: "/cuidado-facial" },
  { name: "CUIDADO CORPORAL", icon: "/images/iconos/icono3.png", gradient: "from-sky-100 to-sky-200", href: "/cuidado-corporal" },
  { name: "FRAGANCIAS", icon: "/images/iconos/icono4.png", gradient: "from-violet-100 to-violet-200", href: "/fragancias" },
  { name: "ACCESORIOS", icon: "/images/iconos/icono5.png", gradient: "from-amber-100 to-amber-200", href: "/accesorios" },
  { name: "LABIALES", icon: "/images/iconos/icono6.png", gradient: "from-fuchsia-100 to-fuchsia-200", href: "/labiales" },
];

// Productos - Novedades
export const novedadesProducts: Product[] = [
  { 
    id: "nov-001",
    name: "Pinzas de Depilar Pusheen", 
    price: "2,50", 
    image: "/images/products/novedades/prod1.svg",
    brand: "Pusheen",
    description: "Pinzas de depilar con diseño adorable de Pusheen. Perfectas para darle un toque kawaii a tu rutina de belleza.",
    content: "1 unidad"
  },
  { 
    id: "nov-002",
    name: "Ambientador mikado - Nube de Colores", 
    price: "3,50", 
    image: "/images/products/novedades/prod2.svg",
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
  { 
    id: "nov-005",
    name: "Parches Anti Imperfecciones Acné", 
    price: "4,50", 
    image: "/images/products/parches-acne.jpg",
    brand: "Clear Skin",
    description: "Parches hidrocoloides que ayudan a reducir las imperfecciones durante la noche. Invisibles y efectivos.",
    content: "36 parches"
  },
  { 
    id: "nov-006",
    name: "Lima de Uñas Gatito Pusheen", 
    price: "1,50", 
    image: "/images/products/lima-pusheen.jpg",
    brand: "Pusheen",
    description: "Lima de uñas con forma de gatito Pusheen. Suave pero efectiva para dar forma a tus uñas.",
    content: "1 unidad"
  },
  { 
    id: "nov-007",
    name: "Esmalte de uñas Crema My Melody", 
    price: "2,99", 
    image: "/images/products/esmalte-melody.jpg",
    brand: "Sanrio Beauty",
    description: "Esmalte cremoso con diseño de My Melody. Larga duración y acabado brillante.",
    content: "10ml"
  },
  { 
    id: "nov-008",
    name: "Ambientador de Coche Limón Kawaii", 
    price: "1,50", 
    image: "/images/products/ambientador-limon.jpg",
    brand: "Kawaii Fresh",
    description: "Refrescante ambientador con aroma cítrico de limón. Perfecto para mantener tu coche con olor fresco.",
    content: "8ml"
  },
];

// Productos - Maquillaje
export const maquillajeProducts: Product[] = [
  { 
    id: "maq-001",
    name: "Colorete Mágico PH", 
    price: "3,50", 
    image: "/images/products/colorete-ph.jpg",
    brand: "Magic Beauty",
    description: "Colorete que reacciona al PH de tu piel, creando un rubor personalizado y natural.",
    content: "5g"
  },
  { 
    id: "maq-002",
    name: "Esmalte de uñas Crema My Melody", 
    price: "2,99", 
    image: "/images/products/esmalte-melody.jpg",
    brand: "Sanrio Beauty",
    description: "Esmalte cremoso con diseño kawaii de My Melody. Colores vibrantes y larga duración.",
    content: "10ml"
  },
  { 
    id: "maq-003",
    name: "Iluminador Gelatina Rostro y Escote", 
    price: "3,50", 
    image: "/images/products/iluminador-gelatina.jpg",
    brand: "Glow Lab",
    description: "Iluminador con textura de gelatina que se funde con la piel para un brillo natural y radiante.",
    content: "15g"
  },
  { 
    id: "maq-004",
    name: "Paleta de Sombras Teléfono Barbie", 
    price: "8,95", 
    image: "/images/products/paleta-barbie.jpg",
    brand: "Barbie Beauty",
    description: "Paleta de sombras con forma de teléfono retro Barbie. Incluye 12 tonos pigmentados y versátiles.",
    content: "12 colores"
  },
];

// Productos - Cuidado Facial
export const cuidadoFacialProducts: Product[] = [
  { 
    id: "fac-001",
    name: "Sérum Facial Naranja + Carbón", 
    price: "4,99", 
    image: "/images/products/serum-naranja-carbon.jpg",
    brand: "Natural Glow",
    description: "Sérum con vitamina C y carbón activado para iluminar y purificar tu piel al mismo tiempo.",
    content: "30ml"
  },
  { 
    id: "fac-002",
    name: "Parches Anti Imperfecciones", 
    price: "4,50", 
    image: "/images/products/parches-imperfecciones.jpg",
    brand: "Clear Skin",
    description: "Parches hidrocoloides que absorben impurezas y reducen la inflamación durante la noche.",
    content: "36 parches"
  },
  { 
    id: "fac-003",
    name: "Sérum Facial Kiwi + Carbón", 
    price: "4,99", 
    image: "/images/products/serum-kiwi-carbon.jpg",
    brand: "Natural Glow",
    description: "Sérum revitalizante con extracto de kiwi y carbón activado para una piel fresca y limpia.",
    content: "30ml"
  },
  { 
    id: "fac-004",
    name: "Sérum Nutritivo Facial Hello Kitty", 
    price: "9,90", 
    image: "/images/products/serum-hellokitty.jpg",
    brand: "Sanrio Beauty",
    description: "Sérum nutritivo con diseño adorable de Hello Kitty. Hidratación profunda y vitaminas esenciales.",
    content: "50ml"
  },
];

// Productos - Cuidado Corporal
export const cuidadoCorporalProducts: Product[] = [
  { 
    id: "cor-001",
    name: "Spray Limpiador y Perfumante Hello Kitty", 
    price: "4,99", 
    image: "/images/products/spray-hellokitty.jpg",
    brand: "Sanrio Beauty",
    description: "Spray multiusos con fragancia delicada de Hello Kitty. Limpia y perfuma superficies.",
    content: "100ml"
  },
  { 
    id: "cor-002",
    name: "Spray Limpiador y Perfumante Kuromi", 
    price: "4,99", 
    image: "/images/products/spray-kuromi.jpg",
    brand: "Sanrio Beauty",
    description: "Spray con el estilo rebelde de Kuromi. Fragancia intensa y efectiva limpieza.",
    content: "100ml"
  },
  { 
    id: "cor-003",
    name: "Spray Limpiador Cinnamoroll", 
    price: "4,99", 
    image: "/images/products/spray-cinnamoroll.jpg",
    brand: "Sanrio Beauty",
    description: "Spray suave con aroma dulce inspirado en Cinnamoroll. Perfecto para uso diario.",
    content: "100ml"
  },
  { 
    id: "cor-004",
    name: "Bomba de Baño Efervescente Hello Kitty", 
    price: "3,75", 
    image: "/images/products/bomba-bano-hellokitty.jpg",
    brand: "Sanrio Beauty",
    description: "Bomba de baño efervescente con forma de Hello Kitty. Aromas relajantes y colores vibrantes.",
    content: "150g"
  },
];

// Productos - Fragancias
export const fraganciasProducts: Product[] = [
  { 
    id: "fra-001",
    name: "Perfume Floral Hello Kitty", 
    price: "12,50", 
    image: "/images/products/perfume-hellokitty.jpg",
    brand: "Sanrio Beauty",
    description: "Perfume con notas florales delicadas y dulces. Un aroma encantador inspirado en Hello Kitty.",
    content: "50ml"
  },
  { 
    id: "fra-002",
    name: "Perfume Dulce My Melody", 
    price: "12,50", 
    image: "/images/products/perfume-melody.jpg",
    brand: "Sanrio Beauty",
    description: "Fragancia dulce y femenina con notas de vainilla y frutas rojas, perfecta para el día a día.",
    content: "50ml"
  },
  { 
    id: "fra-003",
    name: "Ambientador de Coche Batido de Fresa Kawaii", 
    price: "1,50", 
    image: "/images/products/ambientador-fresa.jpg",
    brand: "Kawaii Fresh",
    description: "Ambientador con delicioso aroma a batido de fresa para mantener tu coche con un olor irresistible.",
    content: "8ml"
  },
  { 
    id: "fra-004",
    name: "Ambientador de Coche Limón Kawaii", 
    price: "1,50", 
    image: "/images/products/ambientador-limon.jpg",
    brand: "Kawaii Fresh",
    description: "Ambientador cítrico refrescante que elimina malos olores y deja tu auto con frescura duradera.",
    content: "8ml"
  },
  { 
    id: "fra-005",
    name: "Spray Corporal Vainilla", 
    price: "8,50", 
    image: "/images/products/spray-vainilla.jpg",
    brand: "Sweet Scents",
    description: "Spray corporal con aroma envolvente de vainilla. Perfecto para después del baño.",
    content: "200ml"
  },
  { 
    id: "fra-006",
    name: "Perfume Frutal Cinnamoroll", 
    price: "12,50", 
    image: "/images/products/perfume-cinnamoroll.jpg",
    brand: "Sanrio Beauty",
    description: "Perfume frutal y fresco con notas de manzana y melocotón. Inspirado en la dulzura de Cinnamoroll.",
    content: "50ml"
  },
  { 
    id: "fra-007",
    name: "Aceite Esencial Lavanda", 
    price: "6,99", 
    image: "/images/products/aceite-lavanda.jpg",
    brand: "Aromatherapy Plus",
    description: "Aceite esencial puro de lavanda para aromaterapia. Ideal para relajación y mejor sueño.",
    content: "15ml"
  },
  { 
    id: "fra-008",
    name: "Velas Aromáticas Pack 3", 
    price: "9,99", 
    image: "/images/products/velas-pack.jpg",
    brand: "Cozy Home",
    description: "Set de 3 velas aromáticas con fragancias variadas: lavanda, vainilla y rosa. Perfectas para crear ambiente.",
    content: "3 x 80g"
  },
];

// Productos - Accesorios
export const accesoriosProducts: Product[] = [
  { 
    id: "acc-001",
    name: "Pinzas de Depilar Pusheen", 
    price: "2,50", 
    image: "/images/products/pinzas-pusheen.jpg",
    brand: "Pusheen",
    description: "Pinzas de depilar de alta precisión con adorable diseño de Pusheen. Agarre cómodo y efectivo.",
    content: "1 unidad"
  },
  { 
    id: "acc-002",
    name: "Set de Pinceles Maquillaje Hello Kitty", 
    price: "8,99", 
    image: "/images/products/pinceles-hellokitty.jpg",
    brand: "Sanrio Beauty",
    description: "Set de 5 pinceles esenciales con diseño de Hello Kitty. Cerdas suaves y mango ergonómico.",
    content: "5 pinceles"
  },
  { 
    id: "acc-003",
    name: "Esponja de Maquillaje Forma Corazón", 
    price: "3,50", 
    image: "/images/products/esponja-corazon.jpg",
    brand: "Beauty Tools",
    description: "Esponja de maquillaje en forma de corazón para aplicación perfecta de base y corrector.",
    content: "1 unidad"
  },
  { 
    id: "acc-004",
    name: "Porta Brochas de Viaje Kuromi", 
    price: "5,99", 
    image: "/images/products/porta-brochas.jpg",
    brand: "Sanrio Beauty",
    description: "Estuche portátil para brochas con diseño de Kuromi. Protege tus herramientas de maquillaje.",
    content: "1 unidad"
  },
  { 
    id: "acc-005",
    name: "Lima de Uñas Gatito Pusheen", 
    price: "1,50", 
    image: "/images/products/lima-pusheen.jpg",
    brand: "Pusheen",
    description: "Lima de uñas con forma de gatito Pusheen. Doble cara para dar forma y suavizar.",
    content: "1 unidad"
  },
  { 
    id: "acc-006",
    name: "Cepillo para Pelo Hello Kitty", 
    price: "6,50", 
    image: "/images/products/cepello-hellokitty.jpg",
    brand: "Sanrio Beauty",
    description: "Cepillo desenredante con diseño de Hello Kitty. Cerdas flexibles que no dañan el cabello.",
    content: "1 unidad"
  },
  { 
    id: "acc-007",
    name: "Espejo Compacto My Melody", 
    price: "4,99", 
    image: "/images/products/espejo-melody.jpg",
    brand: "Sanrio Beauty",
    description: "Espejo compacto con doble cara (normal y aumento) decorado con My Melody. Ideal para el bolso.",
    content: "1 unidad"
  },
  { 
    id: "acc-008",
    name: "Bolsa de Maquillaje Cinnamoroll", 
    price: "7,50", 
    image: "/images/products/bolsa-maquillaje.jpg",
    brand: "Sanrio Beauty",
    description: "Bolsa organizadora de maquillaje con diseño de Cinnamoroll. Múltiples compartimentos.",
    content: "1 unidad"
  },
];

// Productos - Labiales
export const labialesProducts: Product[] = [
  { 
    id: "lab-001",
    name: "Labial Mate Rosa Barbie", 
    price: "3,50", 
    image: "/images/products/labial-rosa.jpg",
    brand: "Barbie Beauty",
    description: "Labial mate de alta pigmentación en tono rosa Barbie. Larga duración y acabado aterciopelado.",
    content: "4g"
  },
  { 
    id: "lab-002",
    name: "Labial Brillo Fresa Kawaii", 
    price: "2,99", 
    image: "/images/products/labial-fresa.jpg",
    brand: "Kawaii Lips",
    description: "Gloss labial con delicioso aroma a fresa y brillo cristalino. Hidratante y no pegajoso.",
    content: "5ml"
  },
  { 
    id: "lab-003",
    name: "Set de Labiales Hello Kitty", 
    price: "8,50", 
    image: "/images/products/set-labiales-hellokitty.jpg",
    brand: "Sanrio Beauty",
    description: "Set de 4 mini labiales con empaque de Hello Kitty. Tonos variados para cualquier ocasión.",
    content: "4 x 2g"
  },
  { 
    id: "lab-004",
    name: "Labial Hidratante Cereza", 
    price: "4,25", 
    image: "/images/products/labial-cereza.jpg",
    brand: "Fruity Lips",
    description: "Labial hidratante con extracto de cereza y vitamina E. Nutre mientras da color.",
    content: "4.5g"
  },
  { 
    id: "lab-005",
    name: "Bálsamo Labial Vainilla", 
    price: "2,50", 
    image: "/images/products/balsamo-vainilla.jpg",
    brand: "Sweet Lips",
    description: "Bálsamo labial ultra hidratante con aroma a vainilla. Protege y suaviza los labios.",
    content: "10g"
  },
  { 
    id: "lab-006",
    name: "Labial Tinte Rojo Intenso", 
    price: "5,99", 
    image: "/images/products/labial-rojo.jpg",
    brand: "Glam Lips",
    description: "Tinte labial de larga duración en rojo intenso. Efecto segunda piel que no transfiere.",
    content: "6ml"
  },
  { 
    id: "lab-007",
    name: "Gloss Labial Melocotón", 
    price: "3,75", 
    image: "/images/products/gloss-melocoton.jpg",
    brand: "Fruity Lips",
    description: "Gloss jugoso con aroma y sabor a melocotón. Da volumen y brillo espectacular.",
    content: "8ml"
  },
  { 
    id: "lab-008",
    name: "Labial Metalizado Rosa Oro", 
    price: "4,50", 
    image: "/images/products/labial-oro.jpg",
    brand: "Glam Lips",
    description: "Labial con acabado metalizado rosa dorado. Perfecto para looks de noche y eventos especiales.",
    content: "4g"
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
    ...labialesProducts,
  ];
};

// Función helper para buscar un producto por ID
export const getProductById = (id: string): Product | undefined => {
  return getAllProducts().find(product => product.id === id);
};
