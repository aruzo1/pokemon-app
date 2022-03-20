import { gql } from "graphql-request";
import { useInfiniteQuery } from "react-query";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://beta.pokeapi.co/graphql/v1beta");

const GET_POKEMONS = gql`
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

const fetchPokemons = async (offset: number) => {
  return client.request(GET_POKEMONS, { offset }).then((res) => res.pokemons);
};

export const usePokemons = () => {
  return useInfiniteQuery<PokemonType[]>(
    "pokemons",
    ({ pageParam = 0 }) => fetchPokemons(pageParam),
    {
      getNextPageParam(_, pages) {
        // Convert 2D array to 1D and return length
        const offset: PokemonType[] = [];
        return offset.concat(...pages).length;
      },
    }
  );
};
