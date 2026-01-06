import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group w-full max-w-[280px] mx-auto">
      <div className="relative">
        {/* Imagen clickeable para ir al detalle */}
        <Link href={`/producto/${product.id}`} className="block">
          {product.image ? (
            <div className="aspect-square overflow-hidden relative rounded-xl bg-white">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="280px"
                className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
              />
            </div>
          ) : (
            <div className="aspect-square bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center rounded-xl">
              <div className="w-16 h-16 bg-white/50 rounded-full" />
            </div>
          )}
        </Link>
        {/* Corazón en la parte inferior izquierda */}
        <button
          className="absolute bottom-2 left-2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-pink-50 hover:scale-110 transition-all shadow-sm"
          aria-label="Add to wishlist"
        >
          <Heart className="w-5 h-5 text-pink-400" />
        </button>
      </div>
      <div className="p-2 pt-3">
        <Link href={`/producto/${product.id}`}>
          <h3 className="text-sm font-medium mb-2 line-clamp-2 h-10 hover:text-pink-500 transition-colors cursor-pointer text-gray-700">
            {product.name}
          </h3>
        </Link>
        <p className="text-pink-500 font-bold mb-3 text-sm">
          {product.price} $
        </p>
        <Link href={`/producto/${product.id}`}>
          <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white rounded-full text-xs h-9">
            Ver producto
          </Button>
        </Link>
      </div>
    </div>
  );
}
