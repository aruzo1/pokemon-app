import { useState } from "react";
import Check from "../public/icons/check.svg";

const Checkbox = (props: {
  value: string;
  onCheck: (value: string) => void;
  onUncheck: (value: string) => void;
}) => {
  const { value, onCheck, onUncheck } = props;
  const [checked, setChecked] = useState(false);

  const toggleHandler = () => {
    if (!checked) onCheck(value);
    else onUncheck(value);

    setChecked((prev) => !prev);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleHandler}
        className={`center w-8 h-8 bor rounded-lg ${
          checked ? "bg-gray-800" : "bg-gray-900"
        }`}
      >
        {checked && <Check />}
      </button>
      <label className="ml-4 font-medium">{value}</label>
    </div>
  );
};

export default Checkbox;
