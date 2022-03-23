import { useEffect, useState } from "react";
import ScaleFade from "./ui/ScaleFade";
import ArrowTop from "../public/icons/arrowTop.svg";

const TopScrollButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) setShow(true);
      else setShow(false);
    });
  }, []);

  return (
    <ScaleFade show={show}>
      <button
        onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
        className="fixed bottom-8 right-8 p-4 rounded-full drop-shadow-xl bg-gray-800 hover:bg-gray-700"
      >
        <ArrowTop />
      </button>
    </ScaleFade>
  );
};

export default TopScrollButton;
