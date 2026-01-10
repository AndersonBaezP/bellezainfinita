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
        {/* Productos */}
        <ProductSection
          id="productos"
          title="Cuidado Facial"
          products={cuidadoFacialProducts}
        />
      </main>

      <Footer />
    </div>
  );
}
