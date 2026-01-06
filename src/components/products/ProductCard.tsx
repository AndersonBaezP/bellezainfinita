import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border hover:shadow-lg transition-all">
      <div className="relative">
        <button
          className="absolute top-2 left-2 z-10 bg-white rounded-full p-1.5 sm:p-2 hover:bg-pink-50"
          aria-label="Add to wishlist"
        >
          <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500" />
        </button>
        {product.image ? (
          <div className="aspect-square overflow-hidden relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/50 rounded-full" />
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
