import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query ($offset: Int!) {
    pokemons: pokemon_v2_pokemon(
      limit: 24
      offset: $offset
      order_by: { pokemon_species_id: asc }
    ) {
      id
      speciesId: pokemon_species_id
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
  speciesId: number;
  name: string;
  types: { type: { name: string } }[];
};

export type GetPokemonsQuery = {
  pokemons: PokemonType[];
};
