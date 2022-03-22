import ArrowTop from "../public/icons/arrowTop.svg";

const TopScrollButton = () => {
  return (
    <button
      onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
      className="fixed bottom-8 right-8 flex justify-center items-center w-12 h-12 drop-shadow-xl rounded-full bg-gray-800 hover:bg-gray-700 transition"
    >
      <ArrowTop />
    </button>
  );
};

export default TopScrollButton;
