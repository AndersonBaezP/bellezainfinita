import { Header, Footer, ProductSection } from "@/components";
import { accesoriosProducts } from "@/data/products";

export const metadata = {
  title: "Accesorios | GlossyCandy",
  description: "Accesorios de belleza kawaii: pinceles, esponjas, espejos, bolsas de maquillaje y más.",
};

export default function AccesoriosPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero de categoría */}
        <section className="bg-gradient-to-r from-yellow-100 to-yellow-200 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
              ACCESORIOS
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Todo lo que necesitas para tu rutina de belleza: pinceles, esponjas, 
              espejos compactos, bolsas de maquillaje y más accesorios kawaii.
            </p>
          </div>
        </section>

        {/* Productos */}
        <ProductSection
          id="productos"
          title="Todos los productos"
          products={accesoriosProducts}
        />
      </main>

      <Footer />
    </div>
  );
}
