import ActivitiesSidebar from "@/components/activities/activities-sidebar";
import { ActivitiesSidebarProvider } from "@/components/activities/activities-sidebar-provider";
import { AppSidebar } from "@/components/layout/app-sidebar";
import DashboardHeader from "@/components/layout/dashboard-header";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <ActivitiesSidebarProvider defaultOpen={false}>
        <AppSidebar />
        <SidebarInset>
          <div className="flex">
            <div className="flex-1">
              <DashboardHeader />
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                {children}
              </div>
            </div>
            <ActivitiesSidebar />
          </div>
        </SidebarInset>
      </ActivitiesSidebarProvider>
    </SidebarProvider>
  );
}
