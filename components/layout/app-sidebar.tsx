"use client";

import * as React from "react";
import {
  PieChart,
  FolderOpen,
  BookOpen,
  User,
  CreditCard,
  Building2,
  MessageCircle,
  ShoppingCart,
  GraduationCap,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import Image from "next/image";
import QuickTabs from "./quik-tabs";

const data = {
  navMain: [
    {
      title: "Default",
      url: "/dashboard",
      icon: PieChart,
      isActive: true,
    },
    {
      title: "eCommerce",
      url: "#",
      icon: ShoppingCart,
      items: [
        {
          title: "Overview",
          url: "/dashboard/ecommerce",
        },
        {
          title: "Products",
          url: "/dashboard/ecommerce/products",
        },
      ],
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: FolderOpen,
      items: [
        {
          title: "Overview",
          url: "/dashboard/projects",
        },
      ],
    },
    {
      title: "Online Courses",
      url: "/dashboard/courses",
      icon: GraduationCap,
      items: [
        {
          title: "My Courses",
          url: "/dashboard/courses",
        },
      ],
    },
  ],
  pages: [
    {
      title: "User Profile",
      url: "/pages/profile",
      icon: User,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/pages/profile",
        },
        {
          title: "Projects",
          url: "/pages/profile",
        },
        {
          title: "Followers",
          url: "/pages/profile",
        },
      ],
    },
    {
      title: "Account",
      url: "/pages/account",
      icon: CreditCard,
      items: [
        {
          title: "Feed",
          url: "/pages/social/feed",
        },
      ],
    },
    {
      title: "Corporate",
      url: "/pages/corporate",
      icon: Building2,
      items: [
        {
          title: "Feed",
          url: "/pages/social/feed",
        },
      ],
    },
    {
      title: "Blog",
      url: "/pages/blog",
      icon: BookOpen,
      items: [
        {
          title: "Feed",
          url: "/pages/social/feed",
        },
      ],
    },
    {
      title: "Social",
      url: "/pages/social",
      icon: MessageCircle,
      items: [
        {
          title: "Feed",
          url: "/pages/social/feed",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex gap-1 flex-row p-4">
        <Image src={"/avatar.png"} width={24} height={24} alt="Logo" />
      </SidebarHeader>

      <QuickTabs />

      <SidebarContent>
        <NavMain items={data.navMain} title="Dashboard" />
        <NavMain items={data.pages} title="Pages" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
