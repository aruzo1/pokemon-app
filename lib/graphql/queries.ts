import { gql, GraphQLClient } from "graphql-request";
import { FiltersState } from "../types";

const client = new GraphQLClient("https://beta.pokeapi.co/graphql/v1beta");

const GET_POKEMONS = gql`
  query (
    $offset: Int!
    $order: [pokemon_v2_pokemon_order_by!]
    $types: pokemon_v2_pokemon_bool_exp
  ) {
    pokemons: pokemon_v2_pokemon(
      limit: 12
      offset: $offset
      order_by: $order
      where: $types
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
  { order, types }: FiltersState
) => {
  return client
    .request(GET_POKEMONS, {
      offset,
      order: order.value,
      types: types[0] && {
        pokemon_v2_pokemontypes: {
          pokemon_v2_type: { name: { _in: types } },
        },
      },
    })
    .then((res) => res.pokemons);
};
