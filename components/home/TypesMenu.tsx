import { useState } from "react";
import Check from "../../public/icons/check.svg";

const Checkbox = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center">
      <button
        onClick={() => setChecked((prev) => !prev)}
        className={`center w-8 h-8 bor rounded-lg ${
          checked ? "bg-gray-800" : "bg-gray-900"
        }`}
      >
        {checked && <Check />}
      </button>
      <label className="ml-4 font-medium">{label}</label>
    </div>
  );
};

const TypesMenu = () => {
  return (
    <div className="col-span-1 flex flex-col gap-y-4">
      <h3 className="font-bold text-2xl">Types</h3>
      <Checkbox label="Fire" />
      <Checkbox label="Water" />
      <Checkbox label="Grass" />
    </div>
  );
};

export default TypesMenu;
