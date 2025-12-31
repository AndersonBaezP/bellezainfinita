"use client";

import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Componente de producto optimizado para móvil
function ProductCard({
  product,
}: { product: { name: string; price: string; image?: string } }) {
  return (
    <Card className="group overflow-hidden border hover:shadow-lg transition-all">
      <div className="relative">
        <button className="absolute top-2 left-2 z-10 bg-white rounded-full p-1.5 sm:p-2 hover:bg-pink-50">
          <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500" />
        </button>
        {product.image ? (
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/50 rounded-full"></div>
          </div>
        )}
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-xs sm:text-sm font-medium mb-2 line-clamp-2 h-8 sm:h-10">
          {product.name}
        </h3>
        <p className="text-pink-500 font-bold mb-2 sm:mb-3 text-sm">
          {product.price} $
        </p>
        <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white rounded-full text-xs sm:text-sm h-8 sm:h-10">
          Añadir al carrito
        </Button>
      </div>
    </Card>
  );
}

// Datos de imágenes para el carrusel
// Coloca tus imágenes en: public/carousel/
const carouselImages = [
  {
    src: "/images/carousel/imagen1.jpg",
    alt: "Paleta de sombras 1",
  },
  {
    src: "/images/carousel/imagen2.jpg",
    alt: "Paleta de sombras 2",
  },
  {
    src: "/images/carousel/imagen3.jpg",
    alt: "Paleta de sombras 3",
  },
  {
    src: "/images/carousel/imagen4.jpg",
    alt: "Paleta de sombras 4",
  },
];

// Ejemplo de cómo agregar más imágenes:
// Simplemente añade más objetos al array:
// {
//   src: "/images/carousel/imagen5.jpg",
//   alt: "Descripción imagen 5"
// },

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    skipSnaps: false,
    dragFree: false,
    containScroll: false,
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 3000); // Cambiar cada 3 segundos

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white text-center py-2 text-sm">
        Envío gratuito a partir de 50$ (Quito)
      </div>

      {/* Header */}
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/images/logos/logo2.svg"
                alt="BellezaInfinita Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
              />
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-pink-500">
                  GlossyCandy
                </h1>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md relative">
              <Input
                type="search"
                placeholder="Buscar..."
                className="pr-10 rounded-full"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="md:hidden">
                <Menu className="w-6 h-6" />
              </button>
              <button className="hidden md:block">
                <User className="w-6 h-6 text-pink-500" />
              </button>
              <button className="hidden md:block relative">
                <Heart className="w-6 h-6 text-pink-500" />
              </button>
              <button className="relative">
                <ShoppingCart className="w-6 h-6 text-pink-500" />
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex justify-center gap-6 mt-4 text-sm">
            <a href="#" className="hover:text-pink-500 font-medium">
              Maquillaje
            </a>
            <a href="#" className="hover:text-pink-500 font-medium">
              Cuidado facial
            </a>
            <a href="#" className="hover:text-pink-500 font-medium">
              Cuidado corporal
            </a>
            <a href="#" className="hover:text-pink-500 font-medium">
              Fragancias
            </a>
            <a href="#" className="hover:text-pink-500 font-medium">
              Accesorios
            </a>
            <a href="#" className="hover:text-pink-500 font-medium">
              Labiales
            </a>
            <a href="#" className="hover:text-pink-500 font-medium">
              Papelería
            </a>
          </nav>
        </div>
      </header>

      {/* Carrusel de Imágenes */}
      <section className="container mx-auto px-4 py-6 sm:py-8">
        <div className="relative">
          <div
            className="overflow-hidden rounded-2xl sm:rounded-3xl"
            ref={emblaRef}
          >
            <div className="flex">
              {carouselImages.map((image, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                  <div className="relative aspect-video sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores sutiles */}
          <div className="flex justify-center gap-1.5 mt-4">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-pink-400 w-6 opacity-80"
                    : "bg-gray-300 w-1.5 opacity-40 hover:opacity-60"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Maquillaje */}
          <Card className="group cursor-pointer overflow-hidden border-0 bg-gradient-to-b from-pink-50 to-pink-100 hover:shadow-lg transition-all">
            <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-3 sm:mb-4 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect
                    x="35"
                    y="30"
                    width="10"
                    height="40"
                    rx="5"
                    fill="#FFB6D9"
                  />
                  <rect
                    x="42"
                    y="25"
                    width="16"
                    height="50"
                    rx="8"
                    fill="#FF85C1"
                  />
                  <ellipse cx="50" cy="22" rx="8" ry="6" fill="#D946EF" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">MAQUILLAJE</h3>
            </div>
          </Card>

          {/* Cuidado Facial */}
          <Card className="group cursor-pointer overflow-hidden border-0 bg-gradient-to-b from-green-50 to-green-100 hover:shadow-lg transition-all">
            <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-3 sm:mb-4 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="25" fill="#FDE68A" />
                  <circle cx="42" cy="45" r="3" fill="#333" />
                  <circle cx="58" cy="45" r="3" fill="#333" />
                  <circle cx="35" cy="42" r="4" fill="#FFB6D9" />
                  <circle cx="65" cy="42" r="4" fill="#FFB6D9" />
                  <path
                    d="M42,55 Q50,60 58,55"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">CUIDADO FACIAL</h3>
            </div>
          </Card>

          {/* Cuidado Corporal */}
          <Card className="group cursor-pointer overflow-hidden border-0 bg-gradient-to-b from-blue-50 to-blue-100 hover:shadow-lg transition-all">
            <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-3 sm:mb-4 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect
                    x="30"
                    y="35"
                    width="40"
                    height="50"
                    rx="20"
                    fill="#FFB6D9"
                  />
                  <rect
                    x="35"
                    y="30"
                    width="30"
                    height="10"
                    rx="5"
                    fill="#FF85C1"
                  />
                  <circle cx="45" cy="55" r="2" fill="#333" />
                  <circle cx="55" cy="55" r="2" fill="#333" />
                  <path
                    d="M42,65 Q50,68 58,65"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">CUIDADO CORPORAL</h3>
            </div>
          </Card>

          {/* Fragancias */}
          <Card className="group cursor-pointer overflow-hidden border-0 bg-gradient-to-b from-purple-50 to-purple-100 hover:shadow-lg transition-all">
            <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-3 sm:mb-4 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <ellipse cx="50" cy="60" rx="20" ry="25" fill="#C084FC" />
                  <rect x="45" y="35" width="10" height="15" fill="#C084FC" />
                  <rect
                    x="42"
                    y="30"
                    width="16"
                    height="8"
                    rx="4"
                    fill="#A855F7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">FRAGANCIAS</h3>
            </div>
          </Card>

          {/* Accesorios */}
          <Card className="group cursor-pointer overflow-hidden border-0 bg-gradient-to-b from-yellow-50 to-yellow-100 hover:shadow-lg transition-all">
            <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-3 sm:mb-4 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="20" fill="#FDE68A" />
                  <circle cx="45" cy="45" r="2" fill="#333" />
                  <circle cx="55" cy="45" r="2" fill="#333" />
                  <path
                    d="M45,55 Q50,58 55,55"
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  <ellipse cx="50" cy="30" rx="8" ry="4" fill="#FFB6D9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">ACCESORIOS</h3>
            </div>
          </Card>

          {/* Labiales */}
          <Card className="group cursor-pointer overflow-hidden border-0 bg-gradient-to-b from-red-50 to-red-100 hover:shadow-lg transition-all">
            <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-3 sm:mb-4 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect
                    x="40"
                    y="40"
                    width="20"
                    height="30"
                    rx="3"
                    fill="#FFB6D9"
                  />
                  <rect
                    x="42"
                    y="35"
                    width="16"
                    height="10"
                    rx="2"
                    fill="#FF85C1"
                  />
                  <ellipse cx="50" cy="32" rx="8" ry="4" fill="#EC4899" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">LABIALES</h3>
            </div>
          </Card>
        </div>
      </section>

      {/* Novedades Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">NOVEDADES</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[
            {
              name: "Pinzas de Depilar Pusheen",
              price: "2,50",
              image: "/images/products/novedades/colores.svg",
            },
            {
              name: "Colorete Mágico PH",
              price: "3,50",
              image: "/images/products/novedades/ambientador.svg",
            },
            {
              name: "Ambientador de Coche Batido de Fresa Kawaii",
              price: "1,50",
              image: "/images/products/ambientador-fresa.jpg",
            },
            {
              name: "Sérum Facial Naranja + Carbón",
              price: "4,99",
              image: "/images/products/serum-naranja.jpg",
            },
            {
              name: "Parches Anti Imperfecciones Acné",
              price: "4,50",
              image: "/images/products/parches-acne.jpg",
            },
            {
              name: "Lima de Uñas Gatito Pusheen",
              price: "1,50",
              image: "/images/products/lima-pusheen.jpg",
            },
            {
              name: "Esmalte de uñas Crema My Melody",
              price: "2,99",
              image: "/images/products/esmalte-melody.jpg",
            },
            {
              name: "Ambientador de Coche Limón Kawaii",
              price: "1,50",
              image: "/images/products/ambientador-limon.jpg",
            },
          ].map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </section>

      {/* Maquillaje Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">MAQUILLAJE</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[
            {
              name: "Colorete Mágico PH",
              price: "3,50",
              image: "/images/products/colorete-ph.jpg",
            },
            {
              name: "Esmalte de uñas Crema My Melody",
              price: "2,99",
              image: "/images/products/esmalte-melody.jpg",
            },
            {
              name: "Iluminador Gelatina Rostro y Escote",
              price: "3,50",
              image: "/images/products/iluminador-gelatina.jpg",
            },
            {
              name: "Paleta de Sombras Teléfono Barbie",
              price: "8,95",
              image: "/images/products/paleta-barbie.jpg",
            },
          ].map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </section>

      {/* Cuidado Facial Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">CUIDADO FACIAL</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[
            {
              name: "Sérum Facial Naranja + Carbón",
              price: "4,99",
              image: "/images/products/serum-naranja-carbon.jpg",
            },
            {
              name: "Parches Anti Imperfecciones",
              price: "4,50",
              image: "/images/products/parches-imperfecciones.jpg",
            },
            {
              name: "Sérum Facial Kiwi + Carbón",
              price: "4,99",
              image: "/images/products/serum-kiwi-carbon.jpg",
            },
            {
              name: "Sérum Nutritivo Facial Hello Kitty",
              price: "9,90",
              image: "/images/products/serum-hellokitty.jpg",
            },
          ].map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </section>

      {/* Cuidado Corporal Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">CUIDADO CORPORAL</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[
            {
              name: "Spray Limpiador y Perfumante Hello Kitty",
              price: "4,99",
              image: "/images/products/spray-hellokitty.jpg",
            },
            {
              name: "Spray Limpiador y Perfumante Kuromi",
              price: "4,99",
              image: "/images/products/spray-kuromi.jpg",
            },
            {
              name: "Spray Limpiador Cinnamoroll",
              price: "4,99",
              image: "/images/products/spray-cinnamoroll.jpg",
            },
            {
              name: "Bomba de Baño Efervescente Hello Kitty",
              price: "3,75",
              image: "/images/products/bomba-bano-hellokitty.jpg",
            },
          ].map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </section>

      {/* Fragancias Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">FRAGANCIAS</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[
            {
              name: "Perfume Floral Hello Kitty",
              price: "12,50",
              image: "/images/products/perfume-hellokitty.jpg",
            },
            {
              name: "Perfume Dulce My Melody",
              price: "12,50",
              image: "/images/products/perfume-melody.jpg",
            },
            {
              name: "Ambientador de Coche Batido de Fresa Kawaii",
              price: "1,50",
              image: "/images/products/ambientador-fresa.jpg",
            },
            {
              name: "Ambientador de Coche Limón Kawaii",
              price: "1,50",
              image: "/images/products/ambientador-limon.jpg",
            },
            {
              name: "Spray Corporal Vainilla",
              price: "8,50",
              image: "/images/products/spray-vainilla.jpg",
            },
            {
              name: "Perfume Frutal Cinnamoroll",
              price: "12,50",
              image: "/images/products/perfume-cinnamoroll.jpg",
            },
            {
              name: "Aceite Esencial Lavanda",
              price: "6,99",
              image: "/images/products/aceite-lavanda.jpg",
            },
            {
              name: "Velas Aromáticas Pack 3",
              price: "9,99",
              image: "/images/products/velas-pack.jpg",
            },
          ].map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </section>

      {/* Accesorios Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">ACCESORIOS</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[
            {
              name: "Pinzas de Depilar Pusheen",
              price: "2,50",
              image: "/images/products/pinzas-pusheen.jpg",
            },
            {
              name: "Set de Pinceles Maquillaje Hello Kitty",
              price: "8,99",
              image: "/images/products/pinceles-hellokitty.jpg",
            },
            {
              name: "Esponja de Maquillaje Forma Corazón",
              price: "3,50",
              image: "/images/products/esponja-corazon.jpg",
            },
            {
              name: "Porta Brochas de Viaje Kuromi",
              price: "5,99",
              image: "/images/products/porta-brochas.jpg",
            },
            {
              name: "Lima de Uñas Gatito Pusheen",
              price: "1,50",
              image: "/images/products/lima-pusheen.jpg",
            },
            {
              name: "Cepillo para Pelo Hello Kitty",
              price: "6,50",
              image: "/images/products/cepello-hellokitty.jpg",
            },
            {
              name: "Espejo Compacto My Melody",
              price: "4,99",
              image: "/images/products/espejo-melody.jpg",
            },
            {
              name: "Bolsa de Maquillaje Cinnamoroll",
              price: "7,50",
              image: "/images/products/bolsa-maquillaje.jpg",
            },
          ].map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </section>

      {/* Labiales Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">LABIALES</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[
            {
              name: "Labial Mate Rosa Barbie",
              price: "3,50",
              image: "/images/products/labial-rosa.jpg",
            },
            {
              name: "Labial Brillo Fresa Kawaii",
              price: "2,99",
              image: "/images/products/labial-fresa.jpg",
            },
            {
              name: "Set de Labiales Hello Kitty",
              price: "8,50",
              image: "/images/products/set-labiales-hellokitty.jpg",
            },
            {
              name: "Labial Hidratante Cereza",
              price: "4,25",
              image: "/images/products/labial-cereza.jpg",
            },
            {
              name: "Bálsamo Labial Vainilla",
              price: "2,50",
              image: "/images/products/balsamo-vainilla.jpg",
            },
            {
              name: "Labial Tinte Rojo Intenso",
              price: "5,99",
              image: "/images/products/labial-rojo.jpg",
            },
            {
              name: "Gloss Labial Melocotón",
              price: "3,75",
              image: "/images/products/gloss-melocoton.jpg",
            },
            {
              name: "Labial Metalizado Rosa Oro",
              price: "4,50",
              image: "/images/products/labial-oro.jpg",
            },
          ].map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </section>

      {/* Shipping Banner */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-purple-600">
            ENVÍOS A QUITO
            <br />Y TODO EL ECUADOR
          </h2>
          <p className="text-lg">Envío gratuito a partir de 50$ (Quito)</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Info */}
            <div>
              <h3 className="font-bold mb-4">INFORMACIÓN DE INTERÉS</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-pink-500">
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500">
                    Vídeos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500">
                    Envíos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500">
                    Cambios y devoluciones
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4">CONTACTO</h3>
              <p className="text-sm text-gray-600 mb-4">
                Valeria@bellezainfinita.ec
              </p>
              <Button className="bg-pink-400 hover:bg-pink-500 text-white rounded-full">
                CONTACTAR
              </Button>
            </div>

            {/* Social */}
            <div>
              <div className="flex gap-4 mb-6">
                <a href="#" className="text-pink-500 hover:text-pink-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.5 6.5c-.8.4-1.7.6-2.6.7.9-.6 1.6-1.4 2-2.4-.9.5-1.8.9-2.8 1.1-.8-.9-2-1.4-3.3-1.4-2.5 0-4.5 2-4.5 4.5 0 .4 0 .7.1 1-3.7-.2-7-2-9.2-4.7-.4.7-.6 1.4-.6 2.3 0 1.6.8 3 2 3.8-.7 0-1.4-.2-2-.5v.1c0 2.2 1.6 4 3.6 4.4-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.5 3.3-1.6 1.3-3.7 2-5.9 2-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9 0 13.9-7.5 13.9-13.9v-.6c1-.7 1.8-1.6 2.5-2.5z" />
                  </svg>
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0-2.2c-3.3 0-3.7 0-5 .1-1.3.1-2.1.2-2.9.5-.8.3-1.5.7-2.1 1.4-.7.7-1.1 1.3-1.4 2.1-.3.8-.5 1.6-.5 2.9-.1 1.3-.1 1.7-.1 5s0 3.7.1 5c.1 1.3.2 2.1.5 2.9.3.8.7 1.5 1.4 2.1.7.7 1.3 1.1 2.1 1.4.8.3 1.6.5 2.9.5 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.1-.2 2.9-.5.8-.3 1.5-.7 2.1-1.4.7-.7 1.1-1.3 1.4-2.1.3-.8.5-1.6.5-2.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.2-2.1-.5-2.9-.3-.8-.7-1.5-1.4-2.1-.7-.7-1.3-1.1-2.1-1.4-.8-.3-1.6-.5-2.9-.5-1.3-.1-1.7-.1-5-.1z" />
                    <path d="M12 6.9c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.1-2.3 5.1-5.1-2.3-5.1-5.1-5.1zm0 8.4c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3z" />
                    <circle cx="17.3" cy="6.7" r="1.2" />
                  </svg>
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.6 3.6H4.4C3.6 3.6 3 4.2 3 5v14c0 .8.6 1.4 1.4 1.4h15.2c.8 0 1.4-.6 1.4-1.4V5c0-.8-.6-1.4-1.4-1.4zM8.8 17.8H6.2V9.9h2.6v7.9zm-1.3-9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm10.3 9h-2.6v-3.8c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2v3.9H9.6V9.9h2.5v1.1h.04c.3-.6 1.1-1.3 2.3-1.3 2.5 0 2.9 1.6 2.9 3.7v4.4z" />
                  </svg>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-12 h-12" viewBox="0 0 100 100">
                  <path
                    d="M20,50 Q20,20 50,20 Q80,20 80,50"
                    fill="none"
                    stroke="#FF85C1"
                    strokeWidth="4"
                  />
                  <circle cx="50" cy="55" r="20" fill="#FFB6D9" />
                  <circle cx="45" cy="52" r="3" fill="#333" />
                  <circle cx="55" cy="52" r="3" fill="#333" />
                </svg>
                <span className="text-2xl font-bold text-pink-500">
                  BellezaInfinita
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                © 2025 Todos los derechos reservados. BellezaInfinita.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
