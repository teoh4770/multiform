import { ReactNode } from "react";
import style from "./SideBar.module.css";

interface ISidebar {
  children?: ReactNode;
}

function Sidebar({ children }: ISidebar) {
  return (
    <aside className={style.sideBar}>
      {children}
      </aside>
  );
}

export { Sidebar };
