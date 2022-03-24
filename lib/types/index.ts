export interface IPokemon {
  id: number;
  speciesId: number;
  name: string;
  types: { type: { name: string } }[];
}

export interface IOrderValue {
  [key: string]: string;
}

export interface IOrder {
  name: string;
  value: IOrderValue;
}
