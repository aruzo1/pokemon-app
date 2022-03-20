import type { NextPage } from "next";
import Head from "next/head";
import Pokemons from "../components/Pokemons";
import thumbnail from "../public/thumbnail.png";

//@ts-ignore
const Home: NextPage = ({ host }) => {
  return (
    <main>
      <Head>
        <title>Pokedex | Home</title>
        <meta property="og:image" content={"https://" + host + thumbnail.src} />
        <meta property="og:image:width" content={`${thumbnail.width}`} />
        <meta property="og:image:height" content={`${thumbnail.height}`} />
      </Head>
      <Pokemons />
    </main>
  );
};

Home.getInitialProps = ({ req }) => {
  return { host: req?.headers.host };
};

export default Home;
