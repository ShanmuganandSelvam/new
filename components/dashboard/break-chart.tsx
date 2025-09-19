"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", average: 25, maximum: 45 },
  { name: "Tue", average: 22, maximum: 38 },
  { name: "Wed", average: 28, maximum: 52 },
  { name: "Thu", average: 23, maximum: 40 },
  { name: "Fri", average: 30, maximum: 55 },
];

const chartConfig: ChartConfig = {
  average: {
    label: "Average Break (min)",
    theme: {
      light: "hsl(var(--chart-4))",
      dark: "hsl(var(--chart-4))",
    },
  },
  maximum: {
    label: "Maximum Break (min)",
    theme: {
      light: "hsl(var(--chart-5))",
      dark: "hsl(var(--chart-5))",
    },
  },
};

export function BreakChart() {
  return (
    <Card className="col-span-2 md:col-span-1">
      <CardHeader>
        <CardTitle>Break Time Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-[4/3]">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="average" 
              stroke="var(--color-average)" 
              strokeWidth={2} 
              dot={{ r: 4 }} 
            />
            <Line 
              type="monotone" 
              dataKey="maximum" 
              stroke="var(--color-maximum)" 
              strokeWidth={2} 
              dot={{ r: 4 }} 
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
