"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PanelRightIcon } from "lucide-react";

const ACTIVITIES_SIDEBAR_COOKIE_NAME = "activities_sidebar_state";
const ACTIVITIES_SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

type ActivitiesSidebarContextProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleSidebar: () => void;
};

const ActivitiesSidebarContext =
  React.createContext<ActivitiesSidebarContextProps | null>(null);

export function useActivitiesSidebar() {
  const context = React.useContext(ActivitiesSidebarContext);
  if (!context) {
    throw new Error(
      "useActivitiesSidebar must be used within an ActivitiesSidebarProvider."
    );
  }
  return context;
}

export function ActivitiesSidebarProvider({
  defaultOpen = true,
  children,
}: {
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  // Read initial state from cookie
  const [open, setOpenState] = React.useState(() => {
    if (typeof document !== "undefined") {
      const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${ACTIVITIES_SIDEBAR_COOKIE_NAME}=`));
      if (cookie) {
        return cookie.split("=")[1] === "true";
      }
    }
    return defaultOpen;
  });

  const setOpen = React.useCallback((value: boolean) => {
    setOpenState(value);
    // Save state to cookie
    document.cookie = `${ACTIVITIES_SIDEBAR_COOKIE_NAME}=${value}; path=/; max-age=${ACTIVITIES_SIDEBAR_COOKIE_MAX_AGE}`;
  }, []);

  const toggleSidebar = React.useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const contextValue = React.useMemo<ActivitiesSidebarContextProps>(
    () => ({
      open,
      setOpen,
      toggleSidebar,
    }),
    [open, setOpen, toggleSidebar]
  );

  return (
    <ActivitiesSidebarContext.Provider value={contextValue}>
      {children}
    </ActivitiesSidebarContext.Provider>
  );
}

export function ActivitiesSidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useActivitiesSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("h-8 w-8", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelRightIcon className="h-4 w-4 cursor-pointer" />
      <span className="sr-only">Toggle Activities Sidebar</span>
    </Button>
  );
}
