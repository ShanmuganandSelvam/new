"use client";

import { Header } from "@/components/dashboard/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpDown, Calendar, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";
import { StatCard } from "@/components/dashboard/stat-card";
import { Coffee, Clock, AlertTriangle } from "lucide-react";

interface BreakRecord {
  id: string;
  employee: {
    name: string;
    email: string;
    avatar: string;
    initials: string;
  };
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  type: "coffee" | "lunch" | "personal";
}

const data: BreakRecord[] = [
  {
    id: "1",
    employee: {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      initials: "SJ",
    },
    date: "2023-06-01",
    startTime: "10:30 AM",
    endTime: "10:45 AM",
    duration: 15,
    type: "coffee",
  },
  {
    id: "2",
    employee: {
      name: "Michael Chen",
      email: "michael.chen@example.com",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
      initials: "MC",
    },
    date: "2023-06-01",
    startTime: "12:00 PM",
    endTime: "12:45 PM",
    duration: 45,
    type: "lunch",
  },
  {
    id: "3",
    employee: {
      name: "Emily Rodriguez",
      email: "emily.rodriguez@example.com",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      initials: "ER",
    },
    date: "2023-06-01",
    startTime: "02:15 PM",
    endTime: "02:30 PM",
    duration: 15,
    type: "coffee",
  },
  {
    id: "4",
    employee: {
      name: "David Kim",
      email: "david.kim@example.com",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      initials: "DK",
    },
    date: "2023-06-01",
    startTime: "11:30 AM",
    endTime: "12:15 PM",
    duration: 45,
    type: "lunch",
  },
  {
    id: "5",
    employee: {
      name: "Jessica Taylor",
      email: "jessica.taylor@example.com",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      initials: "JT",
    },
    date: "2023-06-01",
    startTime: "03:00 PM",
    endTime: "03:10 PM",
    duration: 10,
    type: "personal",
  },
  {
    id: "6",
    employee: {
      name: "Robert Wilson",
      email: "robert.wilson@example.com",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      initials: "RW",
    },
    date: "2023-06-01",
    startTime: "10:15 AM",
    endTime: "10:30 AM",
    duration: 15,
    type: "coffee",
  },
  {
    id: "7",
    employee: {
      name: "Amanda Lee",
      email: "amanda.lee@example.com",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      initials: "AL",
    },
    date: "2023-06-01",
    startTime: "12:30 PM",
    endTime: "01:15 PM",
    duration: 45,
    type: "lunch",
  },
  {
    id: "8",
    employee: {
      name: "James Brown",
      email: "james.brown@example.com",
      avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150",
      initials: "JB",
    },
    date: "2023-06-01",
    startTime: "02:45 PM",
    endTime: "03:00 PM",
    duration: 15,
    type: "personal",
  },
];

export const columns: ColumnDef<BreakRecord>[] = [
  {
    accessorKey: "employee",
    header: "Employee",
    cell: ({ row }) => {
      const employee = row.getValue("employee") as BreakRecord["employee"];
      return (
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={employee.avatar} alt={employee.name} />
            <AvatarFallback>{employee.initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{employee.name}</p>
            <p className="text-xs text-muted-foreground">{employee.email}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      return <div>{format(date, "MMM dd, yyyy")}</div>;
    },
  },
  {
    accessorKey: "startTime",
    header: "Start Time",
  },
  {
    accessorKey: "endTime",
    header: "End Time",
  },
  {
    accessorKey: "duration",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Duration (min)
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const duration = parseFloat(row.getValue("duration"));
      return <div className="font-medium">{duration} min</div>;
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as string;
      return (
        <Badge
          variant={
            type === "coffee"
              ? "default"
              : type === "lunch"
              ? "secondary"
              : "outline"
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const record = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit record</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Flag excessive break</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function BreaksPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Header title="Break Time Management" />
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Average Break Time"
            value="25 min"
            icon={Coffee}
            description="Per employee daily"
            iconColor="text-amber-500"
          />
          <StatCard
            title="Total Break Time Today"
            value="16.5 hrs"
            icon={Clock}
            description="Across all employees"
            iconColor="text-blue-500"
          />
          <StatCard
            title="Excessive Breaks"
            value="3"
            icon={AlertTriangle}
            description="Breaks over 45 minutes today"
            iconColor="text-red-500"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Tabs defaultValue="all" className="w-full sm:w-auto">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="coffee">Coffee</TabsTrigger>
              <TabsTrigger value="lunch">Lunch</TabsTrigger>
              <TabsTrigger value="personal">Personal</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            
            <Button>Export</Button>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Break Records</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={data} searchKey="employee.name" />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
