import type { NextPage } from "next";
import Head from "next/head";
import Pokemons from "../components/Pokemons";
import thumbnail from "../public/thumbnail.jpg";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Pokedex | Home</title>
        <meta property="og:image" content={thumbnail.src} />
        <meta property="og:image:width" content={`${thumbnail.width}`} />
        <meta property="og:image:height" content={`${thumbnail.height}`} />
      </Head>
      <Pokemons />
    </main>
  );
};

export default Home;
