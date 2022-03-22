import { useEffect, useState } from "react";
import ArrowTop from "../../public/icons/arrowTop.svg";
import Fade from "./Fade";

const TopScrollButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) setShow(true);
      else setShow(false);
    });
  }, []);

  return (
    <Fade show={show}>
      <button
        onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
        className="fixed bottom-8 right-8 flex justify-center items-center w-12 h-12 drop-shadow-xl rounded-full bg-gray-800 hover:bg-gray-700"
      >
        <ArrowTop />
      </button>
    </Fade>
  );
};

export default TopScrollButton;
