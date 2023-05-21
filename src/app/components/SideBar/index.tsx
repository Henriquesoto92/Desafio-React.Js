import React from "react";
import Avatar from "../Avatar";
import Textbg from "../Textbg";
import NavLink from "../NavLink";

const SideBar: React.FC = () => {
  return (
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
          <NavLink href="/" icon="/assets/icons/iconHome.svg" text="Home" />
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
  );
};

export default SideBar;
