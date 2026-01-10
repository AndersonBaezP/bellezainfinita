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
        {/* Productos */}
        <ProductSection
          id="productos"
          title="Accesorios"
          products={accesoriosProducts}
        />
      </main>

      <Footer />
    </div>
  );
}
