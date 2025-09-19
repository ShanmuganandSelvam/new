"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartLegendContent, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", onTime: 42, late: 5, absent: 3 },
  { name: "Tue", onTime: 45, late: 3, absent: 2 },
  { name: "Wed", onTime: 40, late: 7, absent: 3 },
  { name: "Thu", onTime: 44, late: 4, absent: 2 },
  { name: "Fri", onTime: 38, late: 8, absent: 4 },
];

const chartConfig: ChartConfig = {
  onTime: {
    label: "On Time",
    theme: {
      light: "hsl(var(--chart-1))",
      dark: "hsl(var(--chart-1))",
    },
  },
  late: {
    label: "Late",
    theme: {
      light: "hsl(var(--chart-2))",
      dark: "hsl(var(--chart-2))",
    },
  },
  absent: {
    label: "Absent",
    theme: {
      light: "hsl(var(--chart-3))",
      dark: "hsl(var(--chart-3))",
    },
  },
};

export function AttendanceChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Weekly Attendance</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-[4/3]">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend content={<ChartLegendContent />} />
            <Bar dataKey="onTime" fill="var(--color-onTime)" />
            <Bar dataKey="late" fill="var(--color-late)" />
            <Bar dataKey="absent" fill="var(--color-absent)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
