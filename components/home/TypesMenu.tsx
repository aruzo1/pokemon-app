import { Dispatch, SetStateAction } from "react";
import Checkbox from "../Checkbox";

export const typesOptions = ["normal", "fire", "water", "grass", "flying"];

const TypesMenu = (props: { setTypes: Dispatch<SetStateAction<string[]>> }) => {
  const { setTypes } = props;

  const addType = (type: string) => {
    setTypes((prev) => [...prev, type]);
  };
  const removeType = (type: string) => {
    setTypes((prev) => prev.filter((currentType) => currentType !== type));
  };

  return (
    <div className="col-span-1 flex flex-col gap-y-4">
      <h3 className="font-bold text-2xl">Types</h3>
      {typesOptions.map((typeOption, i) => (
        <Checkbox
          key={i}
          value={typeOption}
          onCheck={addType}
          onUncheck={removeType}
        />
      ))}
    </div>
  );
};

export default TypesMenu;
