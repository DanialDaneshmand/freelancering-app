import React from "react";
import { NavLink } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import { HiCollection } from "react-icons/hi";

function Sidebar() {
  const navlinkClasses =
    "w-11/12 font-bold  text-lg flex items-center transition-all duration-300  gap-x-2 hover:text-blue-800  hover:bg-blue-200 rounded-lg opacity-50 p-2";
  return (
    <div className="border  ">
      <ul className=" space-y-4 py-4">
        <li className=" py-1 px-4  ">
          <NavlLinkComponent classes={navlinkClasses} to="/owner/dashboard">
            <span>
              <FaHouse />
            </span>
            <span>داشبورد</span>
          </NavlLinkComponent>
        </li>
        <li className=" py-1 px-4  ">
          <NavlLinkComponent classes={navlinkClasses} to="/owner/projects">
            <span>
              <HiCollection />
            </span>
            <span>پروژه ها</span>
          </NavlLinkComponent>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

function NavlLinkComponent({ classes, children, to }) {
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        isActive
          ? `bg-blue-200 opacity-50 text-blue-800 ${classes} `
          : `${classes} text-slate-900`
      }
    >
      {children}
    </NavLink>
  );
}
