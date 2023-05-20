import React from "react";

type IProps = {
  text: string;
  propsButton?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const Button: React.FC<IProps> = (props) => {
  return (
    <button className="flex flex-col gap-2" {...props.propsButton}>
      {props.text}
    </button>
  );
};

export default Button;
