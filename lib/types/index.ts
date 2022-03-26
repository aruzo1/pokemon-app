export interface PokemonType {
  id: number;
  speciesId: number;
  name: string;
  types: { type: { name: string } }[];
}

export interface OrderValue {
  [key: string]: string;
}
export interface Order {
  name: string;
  value: OrderValue;
}

export interface FiltersState {
  order: Order;
  types: string[];
}
export type FiltersAction =
  | {
      type: "ADD_TYPE" | "REMOVE_TYPE";
      payload: string;
    }
  | { type: "SET_ORDER"; payload: Order };
