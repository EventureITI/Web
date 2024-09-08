import { NavLink } from "react-router-dom";

export default function CategoryBtn({ category, path }) {
  return (
    <NavLink
      to={path}
      style={{ height: "30px", minWidth: "80px" }}
      className={({ isActive }) =>
        `text-uppercase flex justify-center items-center hover:bg-main-color text-white focus:outline-none font-medium rounded-full text-sm px-8 py-2.5 text-center mb-2 ${
          isActive ? " bg-main-color" : "bg-zinc-700"
        }`
      }
    >
      {category}
    </NavLink>
  );
}
