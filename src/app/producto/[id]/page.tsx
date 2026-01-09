import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Package, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header, Footer } from "@/components";
import { getProductById, getAllProducts, WHATSAPP_NUMBER } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generar rutas estáticas para todos los productos
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  // Crear mensaje de WhatsApp
  const whatsappMessage = encodeURIComponent(
    `¡Hola! GlossyCandy Me interesa comprar:\n\n` +
      `• ${product.name}\n` +
      (product.brand ? `• Marca: ${product.brand}\n` : "") +
      (product.content ? `• Contenido: ${product.content}\n` : "") +
      `• Precio: ${product.price} $\n\n` +
      `¿Está disponible? =) `
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-[900px] mx-auto px-4 py-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a la tienda</span>
            </Link>
          </div>
        </div>

        {/* Contenido del producto */}
        <div className="max-w-[900px] mx-auto px-4 py-6 md:py-8">
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Imagen del producto */}
              <div className="relative bg-white p-4">
                <div className="aspect-square relative rounded-xl overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="400px"
                      className="object-contain p-4"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-pink-100">
                      <div className="w-24 h-24 bg-white/50 rounded-full" />
                    </div>
                  )}
                </div>
              </div>

              {/* Información del producto */}
              <div className="p-5 md:p-8 flex flex-col justify-center">
                {/* Marca */}
                {product.brand && (
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-3 h-3 text-pink-500" />
                    <span className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {product.brand}
                    </span>
                  </div>
                )}

                {/* Etiqueta/Subcategoría */}
                {product.tag && (
                  <div className="mb-3">
                    <span className="inline-block bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Nombre */}
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  {product.name}
                </h1>

                {/* Contenido/ML */}
                {product.content && (
                  <div className="flex items-center gap-2 text-gray-500 mb-3">
                    <Package className="w-3 h-3" />
                    <span className="text-sm">{product.content}</span>
                  </div>
                )}

                {/* Descripción */}
                {product.description && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                )}

                {/* Precio */}
                <div className="mb-5">
                  <span className="text-3xl font-bold text-pink-500">
                    {product.price} $
                  </span>
                </div>

                {/* Botón de WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full h-11 text-sm font-semibold gap-2 transition-all hover:scale-[1.02]">
                    <MessageCircle className="w-5 h-5" />
                    Comprar por WhatsApp
                  </Button>
                </a>

                {/* Nota adicional */}
                <p className="text-xs text-gray-400 text-center mt-4">
                  Te contactaremos para coordinar la entrega
                </p>

                {/* Info adicional */}
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-pink-50 rounded-lg p-3">
                      <p className="text-pink-500 font-semibold text-sm">Envio</p>
                      <p className="text-xs text-gray-600">A todo el pais</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-3">
                      <p className="text-pink-500 font-semibold text-sm">Pago</p>
                      <p className="text-xs text-gray-600">Contra entrega</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
