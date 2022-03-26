import { FiltersAction, FiltersState } from "../types";
import { orderOptions } from "../../components/home/SortMenu";
import { useReducer } from "react";

export const initialState: FiltersState = {
  order: orderOptions[0],
  types: [],
};

const reducer = (state: FiltersState, action: FiltersAction) => {
  switch (action.type) {
    case "SET_ORDER":
      return { ...state, order: action.payload };
    case "ADD_TYPE":
      return { ...state, types: [...state.types, action.payload] };
    case "REMOVE_TYPE":
      return {
        ...state,
        types: state.types.filter((type) => type !== action.payload),
      };
    default:
      return state;
  }
};

const useFilters = () => useReducer(reducer, initialState);

export default useFilters;
