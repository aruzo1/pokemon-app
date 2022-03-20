import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import Pokemons, { orderOptions } from "../components/Pokemons";
import { fetchPokemons } from "../graphql/queries";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Pokedex - Home</title>
        <meta name="og:title" content="Pokedex - Home" />
        <meta
          name="description"
          content="The Pokédex has a wealth of information on all the Pokémon creatures from the entire game series."
        />
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

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  for (const order in orderOptions) {
    await queryClient.prefetchInfiniteQuery(
      ["pokemons", orderOptions[order].value],
      () => fetchPokemons(0, orderOptions[order].value)
    );
  }

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Home;
