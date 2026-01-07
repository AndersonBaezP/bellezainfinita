import { Header, Footer, ProductSection } from "@/components";
import { labialesProducts } from "@/data/products";

export const metadata = {
  title: "Labiales | GlossyCandy",
  description: "Labiales mate, gloss, bálsamos y tintes para labios. Colores vibrantes y fórmulas hidratantes.",
};

export default function LabialesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero de categoría */}
        <section className="bg-gradient-to-r from-fuchsia-100 to-fuchsia-200 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-fuchsia-600 mb-4">
              LABIALES
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Descubre nuestra colección de labiales. Tintes, gloss, labiales mate 
              y todo lo que necesitas para unos labios perfectos.
            </p>
          </div>
        </section>

        {/* Productos */}
        <ProductSection
          id="productos"
          title="LABIALES"
          products={labialesProducts}
        />
      </main>

      <Footer />
    </div>
  );
}
