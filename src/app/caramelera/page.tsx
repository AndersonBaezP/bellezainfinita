import { Header, Footer, ProductSection } from "@/components";
import { carameleraProducts } from "@/data/products";

export const metadata = {
  title: "Caramelera | GlossyCandy",
  description: "Carameleras de edición especial de GlossyCandy.",
};

export default function CarameleraPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Productos */}
        <ProductSection
          id="productos"
          title="Caramelera"
          products={carameleraProducts}
        />
      </main>

      <Footer />
    </div>
  );
}
