import { gql } from "graphql-request";
import { useInfiniteQuery } from "react-query";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://beta.pokeapi.co/graphql/v1beta");

const GET_POKEMONS = gql`
  query ($offset: Int!, $order: [pokemon_v2_pokemon_order_by!]) {
    pokemons: pokemon_v2_pokemon(limit: 12, offset: $offset, order_by: $order) {
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

export const fetchPokemons = async (offset: number, order: {}) => {
  return client
    .request(GET_POKEMONS, { offset, order })
    .then((res) => res.pokemons);
};

export const usePokemons = (order: {}) => {
  return useInfiniteQuery<PokemonType[]>(
    ["pokemons", order],
    ({ pageParam = 0 }) => fetchPokemons(pageParam, order),
    {
      getNextPageParam(_, pages) {
        // Convert 2D array to 1D and return length
        const offset: PokemonType[] = [];
        return offset.concat(...pages).length;
      },
    }
  );
};
