import React from "react";

type IProps = {
  text: string;
};

const Textbg: React.FC<IProps> = ({ text }) => {
  return (
    <p className="text-white text-lg font-semibold font bg-sky-800 mx-5 p-2 rounded-sm">
      {text}
    </p>
  );
};

export default Textbg;
