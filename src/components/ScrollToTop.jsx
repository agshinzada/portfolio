import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Sayfanın en üstüne kaydırır
  }, [pathname]); // `pathname` değiştikçe çalışır

  return null;
};

export default ScrollToTop;
