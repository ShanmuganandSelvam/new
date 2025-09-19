"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface IdleRecord {
  id: string;
  employee: {
    name: string;
    email: string;
    avatar: string;
    initials: string;
  };
  duration: number;
  startTime: string;
  endTime: string;
  status: "active" | "idle" | "away";
}

const data: IdleRecord[] = [
  {
    id: "1",
    employee: {
      name: "Michael Chen",
      email: "michael.chen@example.com",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
      initials: "MC",
    },
    duration: 15,
    startTime: "10:30 AM",
    endTime: "10:45 AM",
    status: "active",
  },
  {
    id: "2",
    employee: {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      initials: "SJ",
    },
    duration: 25,
    startTime: "11:15 AM",
    endTime: "11:40 AM",
    status: "idle",
  },
  {
    id: "3",
    employee: {
      name: "David Kim",
      email: "david.kim@example.com",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      initials: "DK",
    },
    duration: 45,
    startTime: "1:30 PM",
    endTime: "2:15 PM",
    status: "away",
  },
  {
    id: "4",
    employee: {
      name: "Emily Rodriguez",
      email: "emily.rodriguez@example.com",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      initials: "ER",
    },
    duration: 10,
    startTime: "3:45 PM",
    endTime: "3:55 PM",
    status: "active",
  },
  {
    id: "5",
    employee: {
      name: "Jessica Taylor",
      email: "jessica.taylor@example.com",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      initials: "JT",
    },
    duration: 30,
    startTime: "4:10 PM",
    endTime: "4:40 PM",
    status: "idle",
  },
];

export const columns: ColumnDef<IdleRecord>[] = [
  {
    accessorKey: "employee",
    header: "Employee",
    cell: ({ row }) => {
      const employee = row.getValue("employee") as IdleRecord["employee"];
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
    accessorKey: "startTime",
    header: "Start Time",
  },
  {
    accessorKey: "endTime",
    header: "End Time",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant={
            status === "active"
              ? "default"
              : status === "idle"
              ? "secondary"
              : "outline"
          }
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
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
            <DropdownMenuItem>Contact employee</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Flag for review</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function SystemIdleTable() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Time Away From System</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} searchKey="employee.name" />
      </CardContent>
    </Card>
  );
}
