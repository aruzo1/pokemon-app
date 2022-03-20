import type { NextPage } from "next";
import Head from "next/head";
import Pokemons from "../components/Pokemons";
import thumbnail from "../public/thumbnail.png";

//@ts-ignore
const Home: NextPage = ({ host }) => {
  const thumbnailUrl = "http://" + host + thumbnail.src;

  return (
    <main>
      <Head>
        <title>Pokedex | Home</title>
        <meta
          property="description"
          content="The Pokédex is an electronic device created and designed to catalog and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series."
        />
        <meta property="og:title" content="Pokedex | Home" />
        <meta
          property="og:description"
          content="The Pokédex is an electronic device created and designed to catalog and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series."
        />
        <meta property="og:image" content={thumbnailUrl} />
        <meta property="og:image:width" content={`${thumbnail.width}`} />
        <meta property="og:image:height" content={`${thumbnail.height}`} />
        <meta property="twitter:image" content={thumbnailUrl} />
      </Head>
      <Pokemons />
    </main>
  );
};

Home.getInitialProps = ({ req }) => {
  return { host: req?.headers.host };
};

export default Home;
