"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import NotificationsSection from "./notifications-section";
import ActivitiesSection from "./activities-section";
import ContactsSection from "./contacts-section";
import { useActivitiesSidebar } from "./activities-sidebar-provider";
import { cn } from "@/lib/utils";

export default function ActivitiesSidebar() {
  const { open, setOpen, isMobile } = useActivitiesSidebar();

  // On mobile, render as a Sheet (modal overlay)
  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[280px] p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Activities</SheetTitle>
            <SheetDescription>
              View notifications, activities, and contacts
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="h-full">
            <div className="p-6">
              <NotificationsSection />
              <ActivitiesSection />
              <ContactsSection />
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    );
  }

  // On desktop, render as a sidebar
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
