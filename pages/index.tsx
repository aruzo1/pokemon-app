import type { NextPage } from "next";
import Head from "next/head";
import Pokemons from "../components/Pokemons";
import x from "../public/thumbnail.png";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Pokedex | Home</title>
        <meta property="og:image" content={x.src} />
        <meta property="og:image:height" content={x.height.toString()} />
        <meta property="og:image:width" content={x.width.toString()} />
      </Head>
      <Pokemons />
    </main>
  );
};

export default Home;
