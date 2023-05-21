import { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Hamburguer, SideBar } from "./components";

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
      <link rel="icon" href="/assets/favicon.ico" sizes="any" />
      <head />
      <body className={inter.className}>
        <div className="flex min-h-screen w-full items-center justify-start bg-slate-100">
          <SideBar />
          <Hamburguer />
          <div className="flex items-center justify-center w-full h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
