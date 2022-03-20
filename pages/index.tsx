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
        <meta property="og:image" content={"http://" + host + thumbnail.src} />
        <meta property="og:image:width" content={thumbnail.width.toString()} />
        <meta
          property="og:image:height"
          content={thumbnail.height.toString()}
        />
      </Head>
      <Pokemons />
    </main>
  );
};

Home.getInitialProps = ({ req }) => {
  return { host: req?.headers.host };
};

export default Home;
