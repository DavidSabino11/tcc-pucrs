import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Minha nova aplicação Next.js",
  description: "Uma aplicação Next.js com layout customizado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        <main className="max-w-6xl mx-auto px-6 py-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}