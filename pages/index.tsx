import type { GetStaticProps, NextPage } from "next";
import { gql } from "@apollo/client";
import client from "../utils/apolloClient";
import Pokemon from "../components/Pokemon";
import { IPokemon } from "../types";

interface Props {
  pokemons: IPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pokemons = (
    await client.query({
      query: gql`
        {
          pokemons: pokemon_v2_pokemon(limit: 100) {
            id
            name
            types: pokemon_v2_pokemontypes {
              type: pokemon_v2_type {
                name
              }
            }
          }
        }
      `,
    })
  ).data.pokemons;

  return { props: { pokemons }, revalidate: 60 };
};

export default Home;
