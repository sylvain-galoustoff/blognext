import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "Sylvain Galoustoff",
  description: "Développeur front-end React",
};

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
