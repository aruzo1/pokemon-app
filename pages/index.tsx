import type { NextPage } from "next";
import Head from "next/head";
import Pokemons from "../components/Pokemons";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Pokedex | Home</title>
        <meta
          name="description"
          content="The Pokédex has a wealth of information on all the Pokémon creatures from the entire game series."
        />
        <meta name="og:title" content="Pokedex | Home" />
        <meta
          name="og:description"
          content="The Pokédex has a wealth of information on all the Pokémon creatures from the entire game series."
        />
        <meta name="og:site_name" content="Pokedex" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="/thumbnail.jpg" />
      </Head>
      <Pokemons />
    </main>
  );
};

export default Home;
