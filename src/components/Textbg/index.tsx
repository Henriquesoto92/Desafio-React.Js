import React from "react";

type IProps = {
  text: string;
};

const Textbg: React.FC<IProps> = ({ text }) => {
  return <p className="text-white text-lg bg-sky-800 h-8">{text}</p>;
};

export default Textbg;
