import {
  Header,
  Footer,
  HeroCarousel,
  CategoryCards,
  ShippingBanner,
  ProductSection,
} from "@/components";
import {
  novedadesProducts,
  maquillajeProducts,
  cuidadoFacialProducts,
  cuidadoCorporalProducts,
  fraganciasProducts,
  accesoriosProducts,
  labialesProducts,
} from "@/data/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <CategoryCards />

      <ProductSection
        id="novedades"
        title="NOVEDADES"
        products={novedadesProducts}
      />

      <ProductSection
        id="maquillaje"
        title="MAQUILLAJE"
        products={maquillajeProducts}
        variant="gray"
      />

      <ProductSection
        id="cuidado-facial"
        title="CUIDADO FACIAL"
        products={cuidadoFacialProducts}
      />

      <ProductSection
        id="cuidado-corporal"
        title="CUIDADO CORPORAL"
        products={cuidadoCorporalProducts}
        variant="gray"
      />

      <ProductSection
        id="fragancias"
        title="FRAGANCIAS"
        products={fraganciasProducts}
      />

      <ProductSection
        id="accesorios"
        title="ACCESORIOS"
        products={accesoriosProducts}
        variant="gray"
      />

      <ProductSection
        id="labiales"
        title="LABIALES"
        products={labialesProducts}
      />

      <ShippingBanner />
      <Footer />
    </div>
  );
}
