import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Settings, LogOut, Users } from "lucide-react";
import { useState } from "react";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn("h-screen bg-muted p-4 flex flex-col justify-between transition-all duration-300", collapsed ? "w-16" : "w-64")}>
      <div className="space-y-4">
        <nav className="space-y-2">
          <SidebarItem icon={<Home />} label="Home" collapsed={collapsed} />
          <SidebarItem icon={<Users />} label="Users" collapsed={collapsed} />
          <SidebarItem icon={<Settings />} label="Settings" collapsed={collapsed} />
        </nav>
      </div>

      <div>
        <SidebarItem icon={<LogOut />} label="Logout" collapsed={collapsed} />
      </div>

      <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="mb-4">
        {collapsed ? "➡️" : "⬅️"}
      </Button>
    </div>
  );
};
