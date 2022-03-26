import { Dispatch } from "react";
import { FiltersAction, FiltersState } from "../../lib/types";
import TypesMenu from "./TypesMenu";

const Filters = (props: {
  filters: FiltersState;
  dispatch: Dispatch<FiltersAction>;
}) => {
  const { filters, dispatch } = props;

  return (
    <div className="col-span-1 h-min p-4 bor rounded-lg bg-gray-800">
      <TypesMenu
        types={filters.types}
        addType={(payload) => dispatch({ type: "ADD_TYPE", payload })}
        removeType={(payload) => dispatch({ type: "REMOVE_TYPE", payload })}
      />
    </div>
  );
};

export default Filters;
