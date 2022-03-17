export interface IPokemon {
  id: number;
  name: string;
  types: { type: { name: string } }[];
}
