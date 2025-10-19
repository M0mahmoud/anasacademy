'use client";';

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export default function QuickTabs() {
  const [activeTab, setActiveTab] = useState<"favorites" | "recently">(
    "favorites"
  );
  return (
    <div className="px-4 pb-4 group-data-[collapsible=icon]:hidden">
      <div className="flex gap-6">
        <button
          onClick={() => setActiveTab("favorites")}
          className={cn(
            "pb-3 text-sm cursor-pointer",
            activeTab === "favorites" ? "text-black/40" : "text-black/20"
          )}
        >
          Favorites
        </button>
        <button
          onClick={() => setActiveTab("recently")}
          className={cn(
            "pb-3 text-sm cursor-pointer",
            activeTab === "recently" ? "text-black/40" : "text-black/20"
          )}
        >
          Recently
        </button>
      </div>

      {/* Tab Content */}
      <SidebarMenu className="">
        {activeTab === "favorites" ? (
          <>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/dashboard">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                  <span className="text-sm">Overview</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/dashboard/projects">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                  <span className="text-sm">Projects</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </>
        ) : (
          <>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/dashboard/ecommerce">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                  <span className="text-sm">eCommerce</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/dashboard/courses">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                  <span className="text-sm">Online Courses</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </>
        )}
      </SidebarMenu>
    </div>
  );
}
