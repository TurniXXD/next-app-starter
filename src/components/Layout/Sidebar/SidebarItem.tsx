import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import Typography from "@/components/ui/typography";
import { ReactNode } from "react";

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  collapsed: boolean;
}

// todo link component => next link, absolute url link, routes enum
export const SidebarItem = ({ icon, label, collapsed }: SidebarItemProps) => {
  return (
    <Button variant="ghost" className="w-full justify-start space-x-2">
      <Icon icon={icon} />
      {!collapsed && <Typography>{label}</Typography>}
    </Button>
  );
};
