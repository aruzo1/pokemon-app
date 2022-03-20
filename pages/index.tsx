import type { NextPage } from "next";
import Head from "next/head";
import Pokemons from "../components/Pokemons";
import thumbnail from "../public/thumbnail.png";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Pokedex | Home</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://pokedex-liard-one.vercel.app/thumbnail.png"
        />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
      </Head>
      <Pokemons />
    </main>
  );
};

export default Home;
