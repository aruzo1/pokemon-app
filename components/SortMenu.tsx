import { Menu } from "@headlessui/react";
import { Order } from "../lib/types";
import ArrowDown from "../public/icons/arrowDown.svg";

export const orderOptions: Order[] = [
  { name: "Lowest index", value: { pokemon_species_id: "asc" } },
  { name: "Highest index", value: { pokemon_species_id: "desc" } },
  { name: "A - Z", value: { name: "asc" } },
  { name: "Z - A", value: { name: "desc" } },
];

const SortMenu = (props: {
  order: Order;
  setOrder: (payload: Order) => void;
}) => {
  const { order, setOrder } = props;

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="py-2 px-4 rounded-lg bor font-bold bg-gray-800">
        Sort by <ArrowDown className="ml-1 inline" />
      </Menu.Button>
      <Menu.Items className="z-10 absolute flex flex-col gap-y-2 w-52 mt-4 p-2 rounded-lg drop-shadow-xl bor bg-gray-800">
        {orderOptions.map((orderOption, i) => (
          <Menu.Item
            key={i}
            as="button"
            className={`w-full py-2 rounded-lg font-medium ${
              order === orderOption ? "bg-gray-900" : "bg-gray-800"
            } hover:bg-gray-700`}
            onClick={() => {
              setOrder(orderOption);
            }}
          >
            {orderOption.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default SortMenu;
