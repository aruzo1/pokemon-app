import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import Pokemons from "../components/Pokemons";
import TopScrollButton from "../components/TopScrollButton";
import { fetchPokemons } from "../graphql/queries";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Pokedex - Home</title>
        <meta name="og:title" content="Pokedex - Home" />
        <meta
          name="description"
          content="The Pokédex has a informations on all the Pokémon."
        />
        <meta
          name="og:description"
          content="The Pokédex has a informations on all the Pokémon."
        />
        <meta name="og:site_name" content="Pokedex" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="/thumbnail.jpg" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Pokemons />
      <TopScrollButton />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(
    ["pokemons", { pokemon_species_id: "asc" }],
    () => fetchPokemons(0, { pokemon_species_id: "asc" })
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 60,
  };
};

export default Home;
