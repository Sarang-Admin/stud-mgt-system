"use client";
import React from "react";
import "./piechartbox.scss";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "7A", students: 75, color: "#00C49F" },
  { name: "8A", students: 70, color: "#0088FE" },
  { name: "9A", students: 80, color: "#FFBB28" },
  { name: "9B", students: 62, color: "#FF8042" },
  { name: "10A", students: 73, color: "#DE741C" },
];

const PieChartBox = () => {
  return (
    <div className="piechartbox">
      <h1>Students in Classes</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5x" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="students"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.students}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
