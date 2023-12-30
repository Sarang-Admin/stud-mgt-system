"use client";
import React, { PureComponent } from "react";
import "./chartbox.scss";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const Chartbox = (props: Props) => {
  return (
    <div className="chartbox">
      <div className="boxInfo">
        <div className="title">
          {props.icon}
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link href={"#"} style={{ color: props.color }}>
          View All
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default Chartbox;
