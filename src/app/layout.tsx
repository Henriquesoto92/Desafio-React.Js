import { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Avatar, Hamburguer, NavLink, Textbg } from "@/components";

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
        <div className="flex min-h-screen flex-row items-center justify-start">
          <div
            id="nav"
            className="flex min-h-screen min-w-64 flex-col items-center bg-sky-900 py-10 gap-20"
          >
            <Avatar />

            <div className="flex flex-col gap-3 h-full">
              <Textbg text="Henrique Soto" />
              <Textbg text="henriquesoto92@gmail.com" />
            </div>

            <nav className="w-full">
              <ul className="flex flex-col gap-3">
                <NavLink
                  href="/"
                  icon="/assets/icons/iconHome.svg"
                  text="Home"
                />
                {/* <NavLink href="/" icon="/assets/icons/iconMenu.svg" text="Cadastro" /> */}
                <NavLink
                  href="/cadastro"
                  icon="/assets/icons/iconFolder.svg"
                  text="Cadastro"
                />
                <NavLink
                  href="/dashboard"
                  icon="/assets/icons/iconDashboard.svg"
                  text="Dashboard"
                />
              </ul>
            </nav>
          </div>
          <hr />
          <div className="grid place-content-center w-full min-h-screen bg-slate-100">
            <Hamburguer />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
