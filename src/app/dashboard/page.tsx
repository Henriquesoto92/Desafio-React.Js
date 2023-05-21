import {
  ColumnBasicChart,
  DonutPieChart,
  LayoutDashboard,
  SplineAreaChart,
  TotalSubscribed,
} from "./components";

export default function DashboardPage() {
  return (
    <LayoutDashboard>
      <div className="bg-blue-900" />
      <div className="bg-blue-900" />
      <div className="bg-blue-900" />
      <TotalSubscribed />
      <ColumnBasicChart />
      <DonutPieChart />
      <SplineAreaChart />
    </LayoutDashboard>
  );
}
