"use client";

import { useRouter } from "next/navigation";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface LabelType {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#ff0000",
  "#FF8042",
  "#73ff00",
  "#FFBB28",
  "#f700ff",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: LabelType) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomPieChart = <T,>({
  data,
  dataKey,
}: {
  data: T[];
  dataKey: string;
}) => {
  const router = useRouter();
  return (
    <ResponsiveContainer
      // width="100%"
      // height="100%"
      minWidth={"500px"}
      minHeight={"450px"}
    >
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={180}
          fill="#8884d8"
          dataKey={dataKey}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              onClick={() => {
                entry.code
                  ? router.push(`continent-detail/${entry.code}`)
                  : null;

                console.log("Clicked", entry.code);
              }}
            />
          ))}
        </Pie>{" "}
        <Tooltip contentStyle={{ color: "red" }} />
        <Legend align="right" layout="vertical" verticalAlign="top" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
