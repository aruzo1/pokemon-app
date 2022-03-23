import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { fetchPokemons, PokemonType } from "../graphql/queries";
import TopScrollButton from "../components/TopScrollButton";
import Pokemons from "../components/pokemons/Pokemons";

interface Props {
  pokemons: PokemonType[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <div className="container">
      <Head>
        <title>Pokedex - Home</title>
        <meta name="og:title" content="Pokedex - Home" />
        <meta
          name="description"
          content="The Pokédex has a informations on all the Pokémon."
        />
        <meta
          name="og:description"
          content="The Pokédex has a informations on all the Pokémon."
        />
        <meta name="og:site_name" content="Pokedex" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="/thumbnail.jpg" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Pokemons pokemons={pokemons} />
      <TopScrollButton />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pokemons = await fetchPokemons(0, { pokemon_species_id: "asc" });

  return {
    props: { pokemons },
    revalidate: 60,
  };
};

export default Home;
