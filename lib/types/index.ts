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