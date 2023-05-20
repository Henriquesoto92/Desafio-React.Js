import Image from "next/image";
import Link from "next/link";
import React from "react";

type IProps = {
  href: string;
  icon: string;
  text: string;
};

const NavLink: React.FC<IProps> = (props) => {
  return (
    <li>
      <Link
        href={props.href}
        className="flex items-center bg-sky-800 gap-2 mx-5 p-2 "
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
