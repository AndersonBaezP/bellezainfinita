import { Header, Footer, ProductSection } from "@/components";
import { paletaDeLabialesProducts } from "@/data/products";

export const metadata = {
  title: "Paleta de Labiales | GlossyCandy",
  description: "Paletas de labiales con tonos nude y vibrantes de GlossyCandy.",
};

export default function PaletaDeLabialesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Productos */}
        <ProductSection
          id="productos"
          title="Paleta de Labiales"
          products={paletaDeLabialesProducts}
        />
      </main>

      <Footer />
    </div>
  );
}
