import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GlossyCandy | Perfumes, Cosméticos, Fragancias, Maquillaje y Más",
  description: "GlossyCandy es tu tienda online en Ecuador para perfumes, cosméticos, fragancias, lociones, maquillaje, cuidado facial, cuidado corporal, belleza y accesorios kawaii. Compra productos originales y recibe envío gratuito a partir de $50 en Quito y todo el país.",
  keywords: [
    "perfumes", "cosméticos", "fragancias", "lociones", "maquillaje", "belleza", "cuidado facial", "cuidado corporal", "accesorios", "productos de belleza", "Ecuador", "Quito", "regalos", "kawaii", "tienda online"
  ],
  icons: {
    icon: [
      { url: "/images/logos/logfav.png", sizes: "64x64", type: "image/png" },
      { url: "/images/logos/logOrig.svg", type: "image/svg+xml" },
    ],
    apple: "/images/logos/logfav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={bricolage.variable}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
