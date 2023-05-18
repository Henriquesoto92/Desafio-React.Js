import { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Desafio Murallis",
  description: "Nivel Intermediário",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <h1>Olá Mundo</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Dashboard</Link>
            </li>
            <li>
              <Link href="/register">Cadastro</Link>
            </li>
          </ul>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
