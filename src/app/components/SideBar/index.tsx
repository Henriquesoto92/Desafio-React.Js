import React from "react";
import Avatar from "./Avatar";
import Textbg from "./Textbg";
import NavLink from "./NavLink";

const navLinkRoute = [
  { href: "/", icon: "/assets/icons/iconHome.svg", text: "Home" },
  { href: "/cadastro", icon: "/assets/icons/iconFolder.svg", text: "Cadastro" },
];

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
          {navLinkRoute.map((item) => (
            <NavLink
              href={item.href}
              icon={item.icon}
              text={item.text}
              key={item.text}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
