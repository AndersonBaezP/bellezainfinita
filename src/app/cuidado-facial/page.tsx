import { Header, Footer, ProductSection } from "@/components";
import { cuidadoFacialProducts } from "@/data/products";

export const metadata = {
  title: "Cuidado Facial | GlossyCandy",
  description: "Productos de cuidado facial: sérums, parches anti-imperfecciones y tratamientos nutritivos para tu piel.",
};

export default function CuidadoFacialPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero de categoría */}
        <section className="bg-gradient-to-r from-green-100 to-green-200 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
              CUIDADO FACIAL
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Cuida tu piel con nuestra selección de sérums, parches y tratamientos 
              faciales. Productos kawaii para una rutina de belleza perfecta.
            </p>
          </div>
        </section>

        {/* Productos */}
        <ProductSection
          id="productos"
          title="Todos los productos"
          products={cuidadoFacialProducts}
        />
      </main>

      <Footer />
    </div>
  );
}
