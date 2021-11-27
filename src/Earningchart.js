import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function Earningchart() {
  // "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  // 0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000
  const data = [
    { month: "Jan", Earnings: 0 },
    { month: "Feb", Earnings: 10000 },
    { month: "Mar", Earnings: 5000 },
    { month: "Apr", Earnings: 15000 },
    { month: "May", Earnings: 10000 },
    { month: "Jun", Earnings: 20000 },
    { month: "Jul", Earnings: 15000 },
    { month: "Aug", Earnings: 25000 },
    { month: "Sep", Earnings: 20000 },
    { month: "Oct", Earnings: 30000 },
    { month: "Nov", Earnings: 25000 },
    { month: "Dec", Earnings: 40000 },
  ];
  return (
    <div style={{ backgroundColor: "white" }}>
      {/* using responsive container for making  the chart responsive */}

      <ResponsiveContainer width="100%" height={400}>
        {/* line chart for the data */}

        <LineChart
          width={670}
          height={320}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="natural" dataKey="Earnings" stroke="blue" />
          <XAxis dataKey="month" />
          <YAxis dataKet="Earnings" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
