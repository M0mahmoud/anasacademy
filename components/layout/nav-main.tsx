"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
  title,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  title: string;
}) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-black/40 text-sm">
        {title}
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url;
          const hasSubItems = item.items && item.items.length > 0;

          // Check if any subitem matches the current path (for parent highlighting)
          const isSubItemActive =
            hasSubItems &&
            item.items?.some((subItem) => pathname === subItem.url);
          const shouldHighlightParent = isActive || isSubItemActive;

          if (!hasSubItems) {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  asChild
                  className={cn(
                    "cursor-pointer relative",
                    isActive && "bg-gray-200 dark:bg-gray-700 font-medium"
                  )}
                >
                  <Link href={item.url}>
                    {isActive && (
                      <span className="absolute left-1 w-1 h-[70%] bg-black rounded-full" />
                    )}
                    <ChevronRight className="opacity-0 transition-transform duration-200 text-black/20" />
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }

          // If has subitems, render as collapsible
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive || shouldHighlightParent}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger
                  asChild
                  className={cn(
                    "cursor-pointer relative",
                    shouldHighlightParent &&
                      "bg-gray-200 dark:bg-gray-700 font-medium"
                  )}
                >
                  <SidebarMenuButton tooltip={item.title}>
                    {shouldHighlightParent && (
                      <span className="absolute left-1 w-1 h-[70%] bg-black rounded-full" />
                    )}
                    <ChevronRight className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 text-black/20" />
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <Link href={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
