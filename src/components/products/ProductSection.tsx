import { ProductCard } from "./ProductCard";
import type { Product } from "@/data/products";

interface ProductSectionProps {
  id: string;
  title: string;
  products: Product[];
  variant?: "default" | "gray";
}

export function ProductSection({
  id,
  title,
  products,
  variant = "default",
}: ProductSectionProps) {
  const bgClass = variant === "gray" ? "bg-gray-50" : "";

  return (
    <section id={id} className={`container mx-auto px-4 py-12 ${bgClass}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </section>
  );
}
