"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";
import { countCurse, labelCurse } from "@/Mock/dashboard";

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
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default DonutPieChart;
