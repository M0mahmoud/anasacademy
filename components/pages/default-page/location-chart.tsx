"use client";

import { Pie, PieChart, Cell } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { location: "United States", percentage: 38.6, fill: "#2D3648" },
  { location: "Canada", percentage: 22.5, fill: "#7FD4A8" },
  { location: "Mexico", percentage: 30.8, fill: "#8B9DFF" },
  { location: "Other", percentage: 8.1, fill: "#A8D4FF" },
];

const chartConfig = {
  percentage: {
    label: "Traffic",
  },
  "United States": {
    label: "United States",
    color: "#2D3648",
  },
  Canada: {
    label: "Canada",
    color: "#7FD4A8",
  },
  Mexico: {
    label: "Mexico",
    color: "#8B9DFF",
  },
  Other: {
    label: "Other",
    color: "#A8D4FF",
  },
} satisfies ChartConfig;

export default function LocationChart() {
  return (
    <div className="bg-white rounded-2xl border p-4 md:p-6 w-full">
      <h3 className="text-lg md:text-xl font-semibold mb-4">
        Traffic by Location
      </h3>

      <div className="flex items-center justify-between gap-4 flex-wrap h-full flex-col md:flex-row">
        {/* Donut Chart */}
        <div className="flex-shrink-0">
          <ChartContainer
            config={chartConfig}
            className="w-[200px] h-[200px] md:w-[220px] md:h-[220px]"
          >
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={chartData}
                dataKey="percentage"
                nameKey="location"
                innerRadius={50}
                outerRadius={90}
                strokeWidth={12}
                stroke="#ffffff"
                paddingAngle={1}
                cornerRadius={10}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-3 flex-1 w-full">
          {chartData.map((item) => (
            <div
              key={item.location}
              className="flex items-center justify-between flex-wrap"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className={`size-2.5 rounded-full bg-[${item.fill}]`} />
                <span className="text-black text-sm">{item.location}</span>
              </div>
              <span className="text-black text-sm">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
