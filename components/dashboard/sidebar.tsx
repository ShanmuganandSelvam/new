"use client";

import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  Clock, 
  Coffee, 
  Home, 
  LogOut, 
  Menu, 
  Settings, 
  Users, 
  X 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Attendance",
    icon: Clock,
    href: "/dashboard/attendance",
    color: "text-violet-500",
  },
  {
    label: "Employees",
    icon: Users,
    href: "/dashboard/employees",
    color: "text-pink-700",
  },
  {
    label: "Break Time",
    icon: Coffee,
    href: "/dashboard/breaks",
    color: "text-orange-500",
  },
  {
    label: "Reports",
    icon: BarChart3,
    href: "/dashboard/reports",
    color: "text-emerald-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex h-full flex-col bg-background border-r overflow-y-auto w-64">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold">AttendEase</h1>
          </div>
          <div className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                  pathname === route.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-auto p-6 flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" size="icon" className="ml-auto">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Clock className="h-8 w-8 text-primary" />
                <h1 className="text-xl font-bold">AttendEase</h1>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMobileOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                    pathname === route.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  )}
                >
                  <div className="flex items-center flex-1">
                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                    {route.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-auto p-6 flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" size="icon" className="ml-auto">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
