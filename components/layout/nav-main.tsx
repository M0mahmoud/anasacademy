"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

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
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger
                asChild
                className={cn(
                  "cursor-pointer relative",
                  pathname === item.url &&
                    "bg-gray-200 dark:bg-gray-700 font-mediums"
                )}
              >
                <SidebarMenuButton tooltip={item.title}>
                  {pathname === item.url && (
                    <span className="absolute left-1 w-1 h-[70%] bg-black rounded-full" />
                  )}
                  <ChevronRight
                    className={cn(
                      "transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 text-black/20",
                      item.items ? "opacity-100" : "opacity-0"
                    )}
                  />

                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
