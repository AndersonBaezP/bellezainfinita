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
