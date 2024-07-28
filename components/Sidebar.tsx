"use client";
import Link from "next/link";

import { useState } from "react";

const NavItem = ({ text }: { text: String }) => {
  return (
    <p className="text-white text-[20px] my-2 hover:text-primary-400">{text}</p>
  );
};

const Sidebar = () => {
  const [selected, setSelectd] = useState();

  return (
    <div className="flex flex-col ">
      <Link href={"/"}>
        <NavItem text="Home" />
      </Link>
      <Link href={"/Projects"}>
        <NavItem text="Projects" />
      </Link>
      <Link href={"/Calendar"}>
        <NavItem text="Calendar" />
      </Link>
    </div>
  );
};

export default Sidebar;
