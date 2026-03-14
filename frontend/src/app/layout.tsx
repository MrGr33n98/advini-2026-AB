import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LegalTech Review | O Guia Completo de Softwares Jurídicos",
  description: "A maior comunidade de reviews e comparações de softwares para advogados e escritórios de advocacia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased text-slate-800 bg-background`}>
        <Navbar />
        <main className="min-h-screen pt-24 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
