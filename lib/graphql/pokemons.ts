import { gql } from "graphql-request";
import { OrderValue } from "../types";
import client from "./client";

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

export const fetchPokemons = async (offset: number, order: OrderValue) => {
  return client
    .request(GET_POKEMONS, { offset, order })
    .then((res) => res.pokemons);
};
