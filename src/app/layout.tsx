import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GlossyCandy | Tienda de Cosméticos y Maquillaje",
  description: "Tu tienda online de productos de belleza, maquillaje, cuidado facial, corporal, fragancias y accesorios kawaii. Envío gratuito a partir de 50$ en Quito, Ecuador.",
  keywords: ["maquillaje", "cosméticos", "belleza", "kawaii", "cuidado facial", "Ecuador", "Quito"],
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
