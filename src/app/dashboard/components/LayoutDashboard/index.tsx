import React from "react";

type IProps = {
  children: React.ReactNode;
};

const LayoutDashboard: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-full gap-4 p-8">
      <h1 className="text-4xl font-bold col-span-4">Controle geral</h1>
      <div className="w-full h-full">
        <div className="h-full grid grid-cols-4 grid-rows-3 gap-8 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
