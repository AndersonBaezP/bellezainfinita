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
        {/* Productos */}
        <ProductSection
          id="productos"
          title="Cuidado Corporal"
          products={cuidadoCorporalProducts}
        />
      </main>

      <Footer />
    </div>
  );
}
