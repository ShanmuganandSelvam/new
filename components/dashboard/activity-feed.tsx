import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ActivityItem {
  id: string;
  name: string;
  avatar: string;
  initials: string;
  action: string;
  time: string;
  status: "online" | "break" | "offline";
}

const activities: ActivityItem[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    initials: "SJ",
    action: "Checked in",
    time: "Just now",
    status: "online",
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    initials: "MC",
    action: "Started break",
    time: "5 minutes ago",
    status: "break",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    initials: "ER",
    action: "Checked out",
    time: "30 minutes ago",
    status: "offline",
  },
  {
    id: "4",
    name: "David Kim",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    initials: "DK",
    action: "Ended break",
    time: "1 hour ago",
    status: "online",
  },
  {
    id: "5",
    name: "Jessica Taylor",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    initials: "JT",
    action: "Checked in",
    time: "2 hours ago",
    status: "online",
  },
];

export function ActivityFeed() {
  return (
    <Card className="col-span-2 md:col-span-1">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={activity.avatar} alt={activity.name} />
                  <AvatarFallback>{activity.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{activity.name}</p>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{activity.action}</p>
                </div>
                <Badge 
                  variant={
                    activity.status === "online" 
                      ? "default" 
                      : activity.status === "break" 
                        ? "secondary" 
                        : "outline"
                  }
                  className="ml-auto"
                >
                  {activity.status === "online" 
                    ? "Online" 
                    : activity.status === "break" 
                      ? "On Break" 
                      : "Offline"}
                </Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
