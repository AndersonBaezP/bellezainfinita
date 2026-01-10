"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselImages } from "@/data/products";

export function HeroCarousel() {
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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Autoplay - 6 segundos
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 6000);

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="container mx-auto px-4 py-6 sm:py-8">
      <div className="relative group">
        <div
          className="overflow-hidden rounded-2xl sm:rounded-3xl"
          ref={emblaRef}
        >
          <div className="flex">
            {carouselImages.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                <div className="relative aspect-video sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flechas de navegación */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Indicadores */}
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
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
