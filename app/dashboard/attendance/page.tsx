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

interface AttendanceRecord {
  id: string;
  employee: {
    name: string;
    email: string;
    avatar: string;
    initials: string;
  };
  date: string;
  checkIn: string;
  checkOut: string;
  status: "on-time" | "late" | "absent";
  workHours: number;
}

const data: AttendanceRecord[] = [
  {
    id: "1",
    employee: {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      initials: "SJ",
    },
    date: "2023-06-01",
    checkIn: "08:55 AM",
    checkOut: "05:05 PM",
    status: "on-time",
    workHours: 8.17,
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
    checkIn: "09:15 AM",
    checkOut: "05:30 PM",
    status: "late",
    workHours: 8.25,
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
    checkIn: "08:45 AM",
    checkOut: "04:50 PM",
    status: "on-time",
    workHours: 8.08,
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
    checkIn: "",
    checkOut: "",
    status: "absent",
    workHours: 0,
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
    checkIn: "08:50 AM",
    checkOut: "05:10 PM",
    status: "on-time",
    workHours: 8.33,
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
    checkIn: "09:10 AM",
    checkOut: "05:15 PM",
    status: "late",
    workHours: 8.08,
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
    checkIn: "08:58 AM",
    checkOut: "05:05 PM",
    status: "on-time",
    workHours: 8.12,
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
    checkIn: "09:20 AM",
    checkOut: "05:25 PM",
    status: "late",
    workHours: 8.08,
  },
];

export const columns: ColumnDef<AttendanceRecord>[] = [
  {
    accessorKey: "employee",
    header: "Employee",
    cell: ({ row }) => {
      const employee = row.getValue("employee") as AttendanceRecord["employee"];
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
    accessorKey: "checkIn",
    header: "Check In",
    cell: ({ row }) => {
      const checkIn = row.getValue("checkIn") as string;
      return checkIn ? checkIn : "—";
    },
  },
  {
    accessorKey: "checkOut",
    header: "Check Out",
    cell: ({ row }) => {
      const checkOut = row.getValue("checkOut") as string;
      return checkOut ? checkOut : "—";
    },
  },
  {
    accessorKey: "workHours",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Work Hours
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const hours = parseFloat(row.getValue("workHours"));
      return <div className="font-medium">{hours.toFixed(2)}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant={
            status === "on-time"
              ? "default"
              : status === "late"
              ? "secondary"
              : "outline"
          }
        >
          {status === "on-time" ? "On Time" : status === "late" ? "Late" : "Absent"}
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
            <DropdownMenuItem>Export record</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function AttendancePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Header title="Attendance Records" />
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Tabs defaultValue="all" className="w-full sm:w-auto">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="on-time">On Time</TabsTrigger>
              <TabsTrigger value="late">Late</TabsTrigger>
              <TabsTrigger value="absent">Absent</TabsTrigger>
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
            <CardTitle>Attendance Log</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={data} searchKey="employee.name" />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
