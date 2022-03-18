import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query GetPokemons($offset: Int!) {
    pokemons: pokemon_v2_pokemon(limit: 12, offset: $offset) {
      id
      name
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export type PokemonType = {
  id: number;
  name: string;
  types: { type: { name: string } }[];
};

export type GetPokemonsQuery = {
  pokemons: PokemonType[];
};
