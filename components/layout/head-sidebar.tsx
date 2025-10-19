import React from "react";
import { SidebarHeader } from "../ui/sidebar";
import Image from "next/image";

export default function HeadSidebar() {
  return (
    <SidebarHeader className="flex gap-1 flex-row p-4">
      <div className="flex items-center gap-1 mb-2">
        <Image src={"/user.png"} width={24} height={24} alt="Logo" />
        <h3 className="text-sm">ANASCO GROUP</h3>
      </div>
    </SidebarHeader>
  );
}
