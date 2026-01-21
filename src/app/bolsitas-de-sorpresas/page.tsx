import { Header, Footer, ProductSection } from "@/components";
import { bolsitasDeSorpresasProducts } from "@/data/products";

export const metadata = {
  title: "Bolsitas de Sorpresas | GlossyCandy",
  description: "Bolsitas de sorpresas con maquillaje y accesorios de GlossyCandy.",
};

export default function BolsitasDeSorpresasPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Productos */}
        <ProductSection
          id="productos"
          title="Conitos de Labiales"
          products={bolsitasDeSorpresasProducts}
        />
      </main>

      <Footer />
    </div>
  );
}
