import type { NextPage } from "next";
import Head from "next/head";
import Pokemons from "../components/Pokemons";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Pokedex | Home</title>
      </Head>
      <Pokemons />
    </main>
  );
};

export default Home;
