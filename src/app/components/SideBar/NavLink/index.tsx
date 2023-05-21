"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type IProps = {
  href: string;
  icon: string;
  text: string;
};

const NavLink: React.FC<IProps> = (props) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={props.href}
        className={`flex items-center bg-sky-800 gap-2 mx-5 p-2 hover:brightness-125 transition-all duration-300 ${
          pathname === props.href ? "brightness-125" : ""
        }`}
      >
        <Image
          src={props.icon}
          alt={`icon ${props.icon}`}
          width={20}
          height={20}
        />
        <p className="text-white text-lg font-semibold font   rounded-sm">
          {props.text}
        </p>
      </Link>
    </li>
  );
};

export default NavLink;
