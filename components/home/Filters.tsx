import { Dispatch } from "react";
import { Disclosure } from "@headlessui/react";
import { FiltersAction, FiltersState } from "../../lib/types";
import TypesMenu from "./TypesMenu";
import Filter from "../../public/icons/filter.svg";

const Filters = (props: {
  filters: FiltersState;
  dispatch: Dispatch<FiltersAction>;
}) => {
  const { filters, dispatch } = props;

  return (
    <div className="col-span-1 order-1 lg:order-2">
      <div className="hidden lg:block p-4 bor rounded-lg bg-gray-800">
        <TypesMenu
          types={filters.types}
          addType={(payload) => dispatch({ type: "ADD_TYPE", payload })}
          removeType={(payload) => dispatch({ type: "REMOVE_TYPE", payload })}
        />
      </div>
      <Disclosure>
        <Disclosure.Button className="lg:hidden p-4 bor rounded-lg bg-gray-800">
          <Filter />
        </Disclosure.Button>
        <Disclosure.Panel className="lg:hidden overflow-y-auto z-10 fixed top-0 left-0 w-full h-full p-4 bg-gray-800">
          <TypesMenu
            types={filters.types}
            addType={(payload) => dispatch({ type: "ADD_TYPE", payload })}
            removeType={(payload) => dispatch({ type: "REMOVE_TYPE", payload })}
          />
          <Disclosure.Button className="w-full mt-4 py-2 bor rounded-lg font-bold">
            Show pokemons
          </Disclosure.Button>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default Filters;
