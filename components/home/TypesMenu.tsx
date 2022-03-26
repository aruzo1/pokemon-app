import { Disclosure } from "@headlessui/react";
import Checkbox from "../Checkbox";
import ArrowDown from "../../public/icons/arrowDown.svg";

export const typesOptions = [
  "normal",
  "fire",
  "water",
  "grass",
  "flying",
  "fighting",
  "poison",
  "electric",
  "ground",
  "rock",
  "psychic",
  "ice",
  "bug",
  "ghost",
  "steel",
  "dragon",
  "dark",
  "fairy",
];

const TypesMenu = (props: {
  types: string[];
  addType: (payload: string) => void;
  removeType: (payload: string) => void;
}) => {
  const { types, addType, removeType } = props;

  return (
    <Disclosure
      as="div"
      className="col-span-1 h-min p-4 bor rounded-lg bg-gray-800"
    >
      <Disclosure.Button className="w-full flex justify-between items-center">
        <h3 className="font-bold text-xl">Types - {types.length}</h3>
        <ArrowDown />
      </Disclosure.Button>
      <Disclosure.Panel className="flex flex-col gap-y-2 mt-4">
        {typesOptions.map((typeOption, i) => (
          <Checkbox
            key={i}
            value={typeOption}
            state={types.includes(typeOption)}
            onCheck={addType}
            onUncheck={removeType}
          />
        ))}
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default TypesMenu;
