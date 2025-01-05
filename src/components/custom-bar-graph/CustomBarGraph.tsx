"use client";

import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const graphOption = [
  {
    name: "Simple bar chart",
    value: "simple-bar-chart",
  },
  {
    name: "Stacked bar chart",
    value: "stacked-bar-chart",
  },
  {
    name: "Triangular bar chart",
    value: "triangular-bar-chart",
  },
];

const getPath = (
  x: number | any,
  y: number | any,
  width: number | any,
  height: number | any
) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props: React.ComponentProps<"path">) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomBarGraph = <T,>({
  data,
  dataKey,
  bar1DataKey,
  bar2DataKey,
}: {
  data: T[] | undefined;
  dataKey: string;
  bar1DataKey?: string;
  bar2DataKey?: string;
}) => {
  const [selectedGraphType, setSelectedGraphType] =
    useState("simple-bar-chart");

  return (
    <>
      <div className="w-full flex justify-end items-center pr-10 gap-4">
        Choose Graph
        <select
          className="bg-gray-700 text-gray-300 self-start px-2 py-1 rounded-md"
          onChange={(e) => setSelectedGraphType(e.target.value)}
        >
          {graphOption.map((graph) => (
            <option key={graph.value} value={graph.value}>
              {graph.name}
            </option>
          ))}
        </select>
      </div>
      <ResponsiveContainer
        minWidth={"100%"}
        width={"100%"}
        maxHeight={450}
        minHeight={480}
      >
        <BarChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKey} />
          <YAxis />
          <Tooltip contentStyle={{ color: "red" }} />
          <Legend />
          <Bar
            width={10}
            dataKey={bar1DataKey as string}
            fill="#8884d8"
            activeBar={
              selectedGraphType === "triangular-bar-chart" ? (
                <TriangleBar fill="pink" stroke="blue" />
              ) : (
                <Rectangle fill="pink" stroke="blue" />
              )
            }
            stackId={
              selectedGraphType === "stacked-bar-chart" ? "a" : undefined
            }
            shape={
              selectedGraphType === "triangular-bar-chart" ? (
                <TriangleBar />
              ) : undefined
            }
          />
          <Bar
            width={10}
            dataKey={bar2DataKey as string}
            fill="green"
            activeBar={
              selectedGraphType === "triangular-bar-chart" ? (
                <TriangleBar fill="yellow" stroke="blue" />
              ) : (
                <Rectangle fill="yellow" stroke="blue" />
              )
            }
            stackId={
              selectedGraphType === "stacked-bar-chart" ? "a" : undefined
            }
            shape={
              selectedGraphType === "triangular-bar-chart" ? (
                <TriangleBar />
              ) : undefined
            }
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default CustomBarGraph;
