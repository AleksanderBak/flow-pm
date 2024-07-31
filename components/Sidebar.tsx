"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";
import { clsx } from "clsx";

const NavItem = ({ text, active }: { text: string; active: string }) => {
  return (
    <div
      className={`
        pl-6 mr-8 py-2 my-1 cursor-pointer hover:bg-primary-400 transition-all rounded-r-[8px]
        ${clsx({
          "text-white bg-primary-400": active === text,
          "text-neutral-200": active !== text,
        })}`}
    >
      <p className="text-xl font-medium">{text}</p>
    </div>
  );
};

const Sidebar = () => {
  const pathname = usePathname();
  const main_path = pathname.split("/")[1] || "Home";

  const [selected, setSelectd] = useState("");

  useEffect(() => {
    setSelectd(main_path);
  }, [main_path]);

  const handleSelected = (text: string) => {
    setSelectd(text);
  };

  const navItems = ["Home", "Projects", "Calendar"];

  return (
    <nav className="bg-primary-900 w-[10rem] flex-none flex flex-col pt-10">
      {navItems.map((item) => (
        <Link
          href={`/${item === "Home" ? "" : item}`}
          key={item}
          onClick={() => handleSelected(item)}
        >
          <NavItem text={item} active={selected} />
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
