import { useState } from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import usePokemons from "../lib/hooks/usePokemons";
import SortMenu, { orderOptions } from "../components/SortMenu";
import Pokemons from "../components/Pokemons";
import { fetchPokemons } from "../lib/graphql/pokemons";
import { PokemonType } from "../lib/types";

interface Props {
  initialPokemons: PokemonType[];
}

const Home: NextPage<Props> = ({ initialPokemons }) => {
  const [order, setOrder] = useState(orderOptions[0]);
  const pokemons = usePokemons(order.value, initialPokemons);

  return (
    <div className="container flex flex-col gap-4 py-4">
      <Head>
        <title>Pokedex - Home</title>
      </Head>
      <SortMenu order={order} setOrder={setOrder} />
      <Pokemons
        pokemons={pokemons.data}
        isFetching={pokemons.isFetching}
        isError={pokemons.isError}
        hasNextPage={pokemons.hasNextPage}
        fetchNextPage={pokemons.fetchNextPage}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const initialPokemons = await fetchPokemons(0, orderOptions[0].value);
  return { props: { initialPokemons } };
};

export default Home;
