import { Header, Footer, ProductSection } from "@/components";
import { fraganciasProducts } from "@/data/products";

export const metadata = {
  title: "Fragancias | GlossyCandy",
  description: "Perfumes, ambientadores y velas aromáticas kawaii. Descubre fragancias únicas para ti y tu hogar.",
};

export default function FraganciasPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero de categoría */}
        <section className="bg-gradient-to-r from-purple-100 to-purple-200 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
              FRAGANCIAS
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Perfumes florales, frutales y dulces. Ambientadores kawaii para tu coche, 
              velas aromáticas y aceites esenciales para crear el ambiente perfecto.
            </p>
          </div>
        </section>

        {/* Productos */}
        <ProductSection
          id="productos"
          title="Todos los productos"
          products={fraganciasProducts}
        />
      </main>

      <Footer />
    </div>
  );
}
