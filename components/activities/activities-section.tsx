import React from "react";

const activities = [
  {
    id: 1,
    avatar: "/avatar.png",
    title: "You have a bug that needs...",
    time: "Just now",
  },
  {
    id: 2,
    avatar: "/avatar.png",
    title: "Released a new version",
    time: "59 minutes ago",
  },
  {
    id: 3,
    avatar: "/avatar.png",
    title: "Submitted a bug",
    time: "12 hours ago",
  },
  {
    id: 4,
    avatar: "/avatar.png",
    title: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    id: 5,
    avatar: "/avatar.png",
    title: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];

export default function ActivitiesSection() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-6 text-gray-900">Activities</h2>
      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div key={activity.id} className="flex items-start gap-3 relative">
            {/* Vertical line connecting items */}
            {index < activities.length - 1 && (
              <div className="absolute left-5 top-10 bottom-0 w-px bg-gray-200 -mb-5" />
            )}
            <div className="flex-shrink-0 relative z-10">
              <img
                src={activity.avatar}
                alt="User avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-normal text-gray-900 truncate">
                {activity.title}
              </p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
