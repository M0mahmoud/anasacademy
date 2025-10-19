import StatisticsData from "@/components/pages/default-page/statsics";
import TrafficChart from "@/components/pages/default-page/traffic-chart";
import LocationChart from "@/components/pages/default-page/location-chart";

export default function DashboardPage() {
  return (
    <div className="space-y-4 md:space-y-6 py-4">
      <StatisticsData />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <TrafficChart />
        <LocationChart />
      </div>
    </div>
  );
}
