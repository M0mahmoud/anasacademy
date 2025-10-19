"use client";
import React from "react";

import { Button } from "@/components/ui/button";

import { SidebarTrigger } from "../ui/sidebar";
import { ActivitiesSidebarTrigger } from "@/components/activities/activities-sidebar-provider";
import CommandSearch from "./command-search";
import { Sun, History, Bell, Star } from "lucide-react";
import HeaderBreadcrumb from "./header-breadcrumb";

export default function DashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 md:gap-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b px-4 bg-white">
      <div className="flex items-center gap-2 md:gap-3">
        <SidebarTrigger className="-ml-1" />
        <Button variant="ghost" size="icon" className="h-8 w-8 hidden sm:flex">
          <Star className="h-4 w-4" />
        </Button>
        <HeaderBreadcrumb />
      </div>

      <div className="flex items-center gap-2">
        <CommandSearch />

        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Sun className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <History className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bell className="h-4 w-4" />
        </Button>
        <ActivitiesSidebarTrigger />
      </div>
    </header>
  );
}
