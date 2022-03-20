import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Pokemons from "../components/Pokemons";
import thumbnail from "../public/thumbnail.png";

const Home: NextPage<{ host: string }> = ({ host }) => {
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return { props: { host: req.headers.host } };
};

export default Home;
