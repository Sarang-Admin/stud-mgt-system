"use client";
import React from "react";
import "./barchartbox.scss";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";

type Props = {
  color: string;
  title: string;
  dataKey: string;
  chartData: object[];
};

const BarchartBox = (props: Props) => {
  return (
    <div className="BarchartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              position={{ x: 10, y: 60 }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarchartBox;
