import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBtns({ path, text, menuRef }) {
  return (
    <li className="hover:bg-[#0d9988] rounded-lg md:hover:bg-transparent md:hover:rounded-none">
      <NavLink
        to={path}
        className={({}) =>
          `block text-sm py-1 px-3 text-white rounded md:hover:text-main-color hover:opacity-100 `
        }
      >
        <p ref={menuRef}>{text}</p>
      </NavLink>
    </li>
  );
}
