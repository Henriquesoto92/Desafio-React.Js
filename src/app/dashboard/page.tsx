import ColumnBasicChart from "./ColumnBasicChart";
import SimpleDonutPie from "./DonutPieChart";
import SplineAreaChart from "./SplineAreaChart";
import TotalSubscribed from "./TotalSubscribed/page";

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full min-h-full gap-4 p-8">
      <h1 className="text-4xl font-bold col-span-4">Controle geral</h1>
      <div className="w-full h-full">
        <div className="h-full grid grid-cols-4 grid-rows-3 gap-8 overflow-hidden">
          <div className="bg-blue-900" />
          <div className="bg-blue-900" />
          <div className="bg-blue-900" />
          <TotalSubscribed />

          <ColumnBasicChart />

          <SimpleDonutPie />

          <SplineAreaChart />
        </div>
      </div>
    </div>
  );
}
