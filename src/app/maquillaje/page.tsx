import { Header, Footer, ProductSection } from "@/components";
import { maquillajeProducts } from "@/data/products";

export const metadata = {
  title: "Maquillaje | GlossyCandy",
  description: "Descubre nuestra colección de maquillaje: coloretes, paletas de sombras, esmaltes y más productos kawaii para tu belleza.",
};

export default function MaquillajePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero de categoría */}
        <section className="bg-gradient-to-r from-pink-100 to-pink-200 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
              MAQUILLAJE
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Descubre nuestra colección de maquillaje kawaii. Coloretes, paletas de sombras, 
              esmaltes y todo lo que necesitas para resaltar tu belleza.
            </p>
          </div>
        </section>

        {/* Productos */}
        <ProductSection
          id="productos"
          title="MAQUILLAJE"
          products={maquillajeProducts}
        />
      </main>

      <Footer />
    </div>
  );
}
