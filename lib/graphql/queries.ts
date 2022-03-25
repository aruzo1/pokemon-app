import { gql, GraphQLClient } from "graphql-request";
import { useInfiniteQuery } from "react-query";
import { IOrderValue, IPokemon } from "../types";

const client = new GraphQLClient("https://beta.pokeapi.co/graphql/v1beta");

const GET_POKEMONS = gql`
  query (
    $offset: Int!
    $order: [pokemon_v2_pokemon_order_by!]
    $types: [String]
  ) {
    pokemons: pokemon_v2_pokemon(
      limit: 12
      offset: $offset
      order_by: $order
      where: {
        pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _in: $types } } }
      }
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

export const fetchPokemons = async (
  offset: number,
  order: IOrderValue,
  types: string[]
) => {
  return client
    .request(GET_POKEMONS, { offset, order, types })
    .then((res) => res.pokemons);
};

export const usePokemons = (order: IOrderValue, types: string[]) => {
  return useInfiniteQuery<IPokemon[]>(
    ["pokemons", order, types],
    ({ pageParam = 0 }) => fetchPokemons(pageParam, order, types),
    {
      getNextPageParam(lastPage, pages) {
        if (!lastPage[0]) return undefined;
        // Convert 2D array to 1D and return length
        const offset: IPokemon[] = [];
        return offset.concat(...pages).length;
      },
      keepPreviousData: true,
    }
  );
};
