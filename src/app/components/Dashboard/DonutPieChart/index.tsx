"use client";

import React from "react";
import { countCurse, labelCurse } from "@/Mock/dashboard";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const DonutPieChart: React.FC = () => {
  const series = countCurse;
  const options: ApexCharts.ApexOptions = {
    chart: {
      id: "donut",
    },
    labels: labelCurse,
    dataLabels: {
      enabled: false,
    },
    colors: ["#269455", "#E08A32", "#131294"],
    legend: { show: true, position: "bottom", fontSize: "16px" },

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div className="bg-white row-span-2 flex  justify-center pt-20">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default DonutPieChart;
