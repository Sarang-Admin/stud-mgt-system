"use client";
import React from "react";
import "./bigchart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2019",
    January: 4000,
    May: 2400,
    August: 2400,
  },
  {
    name: "2017",
    January: 3000,
    May: 1398,
    August: 2210,
  },
  {
    name: "2018",
    January: 2000,
    May: 9800,
    August: 2290,
  },
  {
    name: "2019",
    January: 2780,
    May: 3908,
    August: 2000,
  },
  {
    name: "2020",
    January: 1890,
    May: 4800,
    August: 2181,
  },
  {
    name: "2021",
    January: 2390,
    May: 3800,
    August: 2500,
  },
  {
    name: "2022",
    January: 3490,
    May: 4300,
    August: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigchartbox">
      <h1>Fees Analysis</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="January"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="May"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="August"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
