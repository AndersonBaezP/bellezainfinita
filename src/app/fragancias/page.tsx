import { Header, Footer, ProductSection } from "@/components";
import { fraganciasProducts } from "@/data/products";

export const metadata = {
  title: "Fragancias | GlossyCandy",
  description: "Perfumes, ambientadores y velas aromáticas kawaii. Descubre fragancias únicas para ti y tu hogar.",
};

export default function FraganciasPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Productos */}
        <ProductSection
          id="productos"
          title="Fragancias"
          products={fraganciasProducts}
        />
      </main>

      <Footer />
    </div>
  );
}
