"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";
import { countSubscribe, labelCurse } from "@/Mock/dashboard";

const SplineAreaChart: React.FC = () => {
  const series = countSubscribe;
  const options: ApexCharts.ApexOptions = {
    chart: {
      id: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#269455", "#E08A32", "#131294"],
    labels: labelCurse,
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
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
    <div className="col-span-3 bg-white flex justify-center items-center px-4">
      <div id="chart" className="w-full h-full p-5">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default SplineAreaChart;
