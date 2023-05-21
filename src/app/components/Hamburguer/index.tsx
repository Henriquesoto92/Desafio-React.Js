import Image from "next/image";
import Link from "next/link";
import React from "react";

type IProps = {};

const Hamburguer: React.FC<IProps> = (props) => {
  return (
    <button className="fixed top-5 right-5">
      <Image
        src={"/assets/icons/iconMenu.svg"}
        alt={`icon Hamburger`}
        width={20}
        height={20}
      />
    </button>
  );
};

export default Hamburguer;
