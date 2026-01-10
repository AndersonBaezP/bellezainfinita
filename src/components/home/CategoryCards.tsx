import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";

const pastelColors = [
  "bg-rose-200",      // Maquillaje
  "bg-teal-200",      // Cuidado Facial
  "bg-sky-200",       // Cuidado Corporal
  "bg-violet-200",    // Fragancias
  "bg-amber-200",     // Accesorios
];

export function CategoryCards() {
  const firstRow = categories.slice(0, 3);
  const secondRow = categories.slice(3, 5);

  return (
    <section className="container mx-auto px-4 py-8 sm:py-12">
      {/* Desktop: Una sola fila de 5 ocupando todo el ancho */}
      <div className="hidden lg:flex justify-between gap-4">
        {categories.map((category, index) => (
          <Link key={category.name} href={category.href} className="flex-1">
            <div
              className={`group cursor-pointer overflow-hidden rounded-2xl ${pastelColors[index]} hover:shadow-lg hover:scale-105 transition-all duration-300 h-full`}
            >
              <div className="px-4 py-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-3 relative">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-sm font-bold leading-tight">{category.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Móvil/Tablet: Pirámide (3 arriba, 2 abajo centradas) */}
      <div className="lg:hidden">
        {/* Primera fila: 3 tarjetas */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          {firstRow.map((category, index) => (
            <Link key={category.name} href={category.href} className="w-[30%] max-w-[140px]">
              <div
                className={`group cursor-pointer overflow-hidden rounded-2xl ${pastelColors[index]} hover:shadow-lg hover:scale-105 transition-all duration-300 h-full`}
              >
                <div className="px-2 py-4 sm:px-3 sm:py-5 flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2 relative">
                    <Image
                      src={category.icon}
                      alt={category.name}
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[10px] sm:text-xs font-bold leading-tight">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Segunda fila: 2 tarjetas centradas */}
        <div className="flex justify-center gap-2 sm:gap-3">
          {secondRow.map((category, index) => (
            <Link key={category.name} href={category.href} className="w-[30%] max-w-[140px]">
              <div
                className={`group cursor-pointer overflow-hidden rounded-2xl ${pastelColors[index + 3]} hover:shadow-lg hover:scale-105 transition-all duration-300 h-full`}
              >
                <div className="px-2 py-4 sm:px-3 sm:py-5 flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2 relative">
                    <Image
                      src={category.icon}
                      alt={category.name}
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[10px] sm:text-xs font-bold leading-tight">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
