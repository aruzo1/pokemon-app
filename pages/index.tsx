import type { NextPage } from "next";
import Head from "next/head";
import Pokemons from "../components/Pokemons";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Pokedex | Home</title>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thumbnail.jpg" />
      </Head>
      <Pokemons />
    </main>
  );
};

export default Home;
