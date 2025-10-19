import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

// Mock data
const statsData = [
  {
    id: 1,
    title: "Views",
    value: "721K",
    change: "+11.01%",
    isPositive: true,
    bgColor: "bg-[#E3F5FF]",
    textColor: "text-gray-900",
  },
  {
    id: 2,
    title: "Visits",
    value: "367K",
    change: "-0.03%",
    isPositive: false,
    bgColor: "bg-[#E5ECF6]",
    textColor: "text-gray-900",
  },
  {
    id: 3,
    title: "New Users",
    value: "1,156",
    change: "+15.03%",
    isPositive: true,
    bgColor: "bg-[#E3F5FF]",
    textColor: "text-gray-900",
  },
  {
    id: 4,
    title: "Active Users",
    value: "239K",
    change: "+6.08%",
    isPositive: true,
    bgColor: "bg-[#E5ECF6]",
    textColor: "text-gray-900",
  },
];
export default function StatisticsData() {
  return (
    <div className="space-y-4">
      {/* Date Selector */}
      <div className="flex items-center gap-2 w-full">
        <button className="flex items-center gap-2 px-2 text-sm font-semibold cursor-pointer">
          Today
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black/40"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className={`${stat.bgColor} rounded-2xl p-4 sm:p-5 md:p-6 transition-all w-full`}
          >
            <div className="space-y-2 sm:space-y-3">
              <h3
                className={`text-base sm:text-lg font-medium ${stat.textColor}`}
              >
                {stat.title}
              </h3>

              <div className="flex items-end justify-between flex-wrap">
                <div
                  className={`text-3xl sm:text-4xl font-bold ${stat.textColor}`}
                >
                  {stat.value}
                </div>

                <div className="flex items-center gap-1">
                  <span className={`text-xs sm:text-sm text-black`}>
                    {stat.change}
                  </span>
                  {stat.isPositive ? (
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                  ) : (
                    <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
