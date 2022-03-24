import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IOrder } from "../../lib/types";
import ArrowDown from "../../public/icons/arrowDown.svg";

export const orderOptions: IOrder[] = [
  { name: "Lowest index", value: { pokemon_species_id: "asc" } },
  { name: "Highest index", value: { pokemon_species_id: "desc" } },
  { name: "A - Z", value: { name: "asc" } },
  { name: "Z - A", value: { name: "desc" } },
];

const SortMenu = (props: {
  order: IOrder;
  setOrder: (order: IOrder) => void;
  remove: () => void;
}) => {
  const { order, setOrder, remove } = props;

  return (
    <Menu as="div" className="relative justify-self-end">
      <Menu.Button className="py-2 px-4 rounded-lg bor font-bold bg-gray-800 hover:bg-gray-700 transition">
        Sort by <ArrowDown className="ml-1 inline" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition"
        enterFrom="opacity-0 scale-75"
        enterTo="opacity-100 scale-100"
        leave="transition"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-75"
      >
        <Menu.Items className="z-10 absolute right-0 origin-top-right flex flex-col gap-y-2 w-52 mt-4 p-2 rounded-lg drop-shadow-xl bor bg-gray-800">
          {orderOptions.map((orderOption, i) => (
            <Menu.Item
              key={i}
              as="button"
              className={`w-full py-2 rounded-lg font-medium ${
                order === orderOption ? "bg-gray-900" : "bg-gray-800"
              } hover:bg-gray-700 transition`}
              onClick={() => {
                remove();
                setOrder(orderOption);
              }}
            >
              {orderOption.name}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SortMenu;
