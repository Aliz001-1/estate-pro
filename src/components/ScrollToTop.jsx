import { useEffect, useState } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      className="scroll-top-button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      ↑
    </button>
  );
}

export default ScrollToTop;