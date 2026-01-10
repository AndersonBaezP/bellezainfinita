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
