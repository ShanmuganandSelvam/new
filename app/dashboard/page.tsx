import { Header } from "@/components/dashboard/header";
import { StatCard } from "@/components/dashboard/stat-card";
import { AttendanceChart } from "@/components/dashboard/attendance-chart";
import { BreakChart } from "@/components/dashboard/break-chart";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { SystemIdleTable } from "@/components/dashboard/system-idle-table";
import { Users, Clock, Coffee, AlertTriangle } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <Header title="Dashboard Overview" />
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Employees"
            value="50"
            icon={Users}
            description="5 new this month"
            iconColor="text-blue-500"
          />
          <StatCard
            title="On-Time Percentage"
            value="92%"
            icon={Clock}
            description="3% increase from last week"
            iconColor="text-green-500"
          />
          <StatCard
            title="Avg. Break Time"
            value="25 min"
            icon={Coffee}
            description="Per employee daily"
            iconColor="text-amber-500"
          />
          <StatCard
            title="System Idle Alerts"
            value="12"
            icon={AlertTriangle}
            description="Today"
            iconColor="text-red-500"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <AttendanceChart />
          <BreakChart />
          <ActivityFeed />
        </div>

        <SystemIdleTable />
      </div>
    </>
  );
}
