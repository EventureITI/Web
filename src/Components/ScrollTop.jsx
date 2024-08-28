import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      // window.scrollTo({ top: 0, behavior: "smooth" });
      window.scrollTo(0, 0)
    }, 0);
  }, [pathname]);
  return null;
}
