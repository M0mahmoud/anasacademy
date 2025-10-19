"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import NotificationsSection from "./notifications-section";
import ActivitiesSection from "./activities-section";
import ContactsSection from "./contacts-section";
import { useActivitiesSidebar } from "./activities-sidebar-provider";
import { cn } from "@/lib/utils";

export default function ActivitiesSidebar() {
  const { open } = useActivitiesSidebar();

  return (
    <div
      className={cn(
        "bg-white h-screen flex flex-col transition-all duration-300 ease-in-out",
        open ? "w-[280px] border-l" : "w-0 overflow-hidden"
      )}
    >
      {open && (
        <ScrollArea className="flex-1 h-dvh">
          <div className="p-6">
            <NotificationsSection />
            <ActivitiesSection />
            <ContactsSection />
          </div>
        </ScrollArea>
      )}
    </div>
  );
}
