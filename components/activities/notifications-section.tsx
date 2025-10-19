import React from "react";
import { Bug, UserPlus, Radio } from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: Bug,
    title: "You have a bug that needs...",
    time: "Just now",
  },
  {
    id: 2,
    icon: UserPlus,
    title: "New user registered",
    time: "59 minutes ago",
  },
  {
    id: 3,
    icon: Bug,
    title: "You have a bug that needs...",
    time: "12 hours ago",
  },
  {
    id: 4,
    icon: Radio,
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

export default function NotificationsSection() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-6 text-gray-900">
        Notifications
      </h2>
      <div className="space-y-5">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <notification.icon className="w-5 h-5 text-gray-900" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-normal text-gray-900 truncate">
                {notification.title}
              </p>
              <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
