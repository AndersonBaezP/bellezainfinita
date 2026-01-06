import { Header, Footer, ProductSection } from "@/components";
import { cuidadoCorporalProducts } from "@/data/products";

export const metadata = {
  title: "Cuidado Corporal | GlossyCandy",
  description: "Productos de cuidado corporal: sprays, bombas de baño y más para consentir tu cuerpo.",
};

export default function CuidadoCorporalPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero de categoría */}
        <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              CUIDADO CORPORAL
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Consiente tu cuerpo con nuestros sprays limpiadores, bombas de baño 
              efervescentes y productos especiales para tu rutina de cuidado.
            </p>
          </div>
        </section>

        {/* Productos */}
        <ProductSection
          id="productos"
          title="Todos los productos"
          products={cuidadoCorporalProducts}
        />
      </main>

      <Footer />
    </div>
  );
}
