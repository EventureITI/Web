import { NavLink } from "react-router-dom";

export default function CategoryBtn({ category, path, classes }) {
  return (
    <NavLink
      to={path}
      style={{ height: "30px", minWidth: "80px" }}
      className={({ isActive }) =>
        `flex justify-center items-center bg-zinc-700 ${classes} hover:bg-main-hover text-white focus:outline-none font-medium rounded-full text-sm px-8 py-2.5 text-center mb-2 ${
          isActive ? " focus:bg-main-color" : "bg-zinc-700"
        }`
      }
    >
      {category}
    </NavLink>
  );
}
