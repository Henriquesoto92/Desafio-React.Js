import { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Avatar from "@/components/Avatar";
import Textbg from "@/components/Textbg";

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
        <div className="flex min-h-screen flex-row items-center justify-between">
          <div
            id="nav"
            className="flex min-h-screen min-w-64 flex-col items-center bg-sky-900 py-10 gap-20"
          >
            <Avatar />

            <div className="flex flex-col gap-5 h-full">
              <Textbg text="Henrique Soto" />
              <Textbg text="henriquesoto92@gmail.com" />
            </div>

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
          </div>
          <hr />
        </div>
      </body>
    </html>
  );
}
