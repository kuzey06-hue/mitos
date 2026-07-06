import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top whenever the pathname changes
export function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
}