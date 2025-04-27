import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-row">
        <Topbar />
      </div>
      <div className="flex w-full flex-row">
        <div className="flex w-2/12 flex-col">
          <Sidebar />
        </div>
        <div className="flex w-10/12 flex-col">{children}</div>
      </div>
    </div>
  );
};
