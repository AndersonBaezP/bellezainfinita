import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";

const pastelColors = [
  "bg-rose-200",      // Maquillaje
  "bg-teal-200",      // Cuidado Facial
  "bg-sky-200",       // Cuidado Corporal
  "bg-violet-200",    // Fragancias
  "bg-amber-200",     // Accesorios
  "bg-fuchsia-200",   // Labiales
];

export function CategoryCards() {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categories.map((category, index) => (
          <Link key={category.name} href={category.href}>
            <div
              className={`group cursor-pointer overflow-hidden rounded-xl ${pastelColors[index]} hover:shadow-lg transition-all`}
            >
              <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-3 sm:mb-4 relative">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
