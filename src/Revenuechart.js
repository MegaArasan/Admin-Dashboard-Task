import React from "react";
import { PieChart, Pie, Legend, Cell } from "recharts";

export function Revenuechart() {
  // data for the chart
  const data = [
    { name: "Direct", value: 55 },
    { name: "Social", value: 15 },
    { name: "Referral", value: 30 },
  ];

  // color for the charts to display
  const colors = ["skyblue", "green", "blue"];
  return (
    <div style={{ width: "auto", backgroundColor: "white" }}>
      <PieChart width={320} height={400}>
        <Pie
          data={data}
          cx={150}
          cy={160}
          innerRadius={70}
          outerRadius={90}
          paddingAngle={5}
          dataKey="value"
          label="true"
          legendType="circle"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={46} />
      </PieChart>
    </div>
  );
}
