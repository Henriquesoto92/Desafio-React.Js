import React from "react";
import TotalSubscribed from "./TotalSubscribed";
import ColumnBasicChart from "./ColumnBasicChart";
import DonutPieChart from "./DonutPieChart";
import SplineAreaChart from "./SplineAreaChart";

const LayoutDashboard: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen h-screen gap-4 p-8">
      <h1 className="text-4xl font-bold col-span-4">Controle geral</h1>
      <div className="w-full h-full">
        <div className="h-full grid grid-cols-4 grid-rows-3 gap-8 overflow-hidden">
          <div className="bg-blue-900" />
          <div className="bg-blue-900" />
          <div className="bg-blue-900" />
          <TotalSubscribed />
          <ColumnBasicChart />
          <DonutPieChart />
          <SplineAreaChart />
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
