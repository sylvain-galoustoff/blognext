import type { Metadata } from "next";
import "./ui/globals.css";
import { Outfit } from "next/font/google";
import Topbar from "./ui/topbar/Topbar";
import Footer from "./ui/footer/Footer";

export const metadata: Metadata = {
  title: "Sylvain Galoustoff",
  description: "Développeur front-end React",
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={outfit.className}>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
