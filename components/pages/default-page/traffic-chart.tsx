"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { device: "Linux", traffic: 18, fill: "#8B9DFF" },
  { device: "Mac", traffic: 22, fill: "#7FD4A8" },
  { device: "iOS", traffic: 19, fill: "#2D3648" },
  { device: "Windows", traffic: 25, fill: "#A8D4FF" },
  { device: "Android", traffic: 8, fill: "#B8D4FF" },
  { device: "Other", traffic: 22, fill: "#7FD4A8" },
];

const chartConfig = {
  traffic: {
    label: "Traffic",
  },
  Linux: {
    label: "Linux",
    color: "#8B9DFF",
  },
  Mac: {
    label: "Mac",
    color: "#7FD4A8",
  },
  iOS: {
    label: "iOS",
    color: "#2D3648",
  },
  Windows: {
    label: "Windows",
    color: "#A8D4FF",
  },
  Android: {
    label: "Android",
    color: "#B8D4FF",
  },
  Other: {
    label: "Other",
    color: "#7FD4A8",
  },
} satisfies ChartConfig;

export default function TrafficChart() {
  return (
    <div className="bg-[#f7f9fb] rounded-2xl border p-4 md:p-6 w-full">
      <h3 className="text-lg md:text-xl font-semibold mb-4">
        Traffic by Device
      </h3>
      <ChartContainer config={chartConfig} className="h-[250px] w-full">
        <BarChart accessibilityLayer data={chartData} barSize={30}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#E5E7EB"
          />
          <XAxis
            dataKey="device"
            tickLine={false}
            tickMargin={8}
            axisLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 11 }}
            tickFormatter={(value) => `${value}M`}
            ticks={[0, 10, 20, 30]}
          />
          <ChartTooltip
            content={<ChartTooltipContent hideLabel />}
            cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
          />
          <Bar dataKey="traffic" radius={[6, 6, 0, 0]} maxBarSize={60} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
