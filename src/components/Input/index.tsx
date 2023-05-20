import React from "react";

type IProps = {
  label: string;
  propsInput: React.InputHTMLAttributes<HTMLInputElement>;
};

const Input: React.FC<IProps> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        type="text"
        className="border-2 rounded-md"
        {...props.propsInput}
      />
    </div>
  );
};

export default Input;
