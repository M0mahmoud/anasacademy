import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import NotificationsSection from "./notifications-section";
import ActivitiesSection from "./activities-section";
import ContactsSection from "./contacts-section";

export default function ActivitiesSidebar() {
  return (
    <div className="w-[280px] border-l bg-white h-screen flex flex-col">
      <ScrollArea className="flex-1 h-dvh">
        <div className="p-6">
          <NotificationsSection />
          <ActivitiesSection />
          <ContactsSection />
        </div>
      </ScrollArea>
    </div>
  );
}
