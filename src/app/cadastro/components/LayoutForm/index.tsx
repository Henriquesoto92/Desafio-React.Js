import React from "react";

type IProps = {
  children: React.ReactNode;
};

const LayoutForm: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex flex-col border-sky-800 border-2 rounded-md bg-white w-fit">
      <div className="text-white text-lg text-center font-bold w-full bg-sky-800 p-2 rounded-sm">
        Cadastro de Ingressantes
      </div>
      <div className="w-full p-4">{children}</div>
    </div>
  );
};

export default LayoutForm;
