import React from "react";

const TotalSubscribed: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-white p-4 overflow-hidden">
      <div className="text-lg">Total de Inscritos</div>
      <div className="w-full text-4xl font-bold text-center">1255</div>
    </div>
  );
};

export default TotalSubscribed;
