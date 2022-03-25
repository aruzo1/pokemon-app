import { useState } from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import { fetchPokemons, usePokemons } from "../lib/graphql/queries";
import SortMenu, { orderOptions } from "../components/home/SortMenu";
import TypesMenu, { typesOptions } from "../components/home/TypesMenu";
import Pokemons from "../components/home/Pokemons";

const Home: NextPage = () => {
  const [order, setOrder] = useState(orderOptions[0]);
  const [types, setTypes] = useState<string[]>([]);
  const pokemons = usePokemons(order.value, types);

  return (
    <div className="container grid grid-cols-5 gap-y-4 py-4">
      <Head>
        <title>Pokedex - Home</title>
      </Head>
      <SortMenu order={order} setOrder={setOrder} remove={pokemons.remove} />
      <TypesMenu setTypes={setTypes} />
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
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery(
    ["pokemons", orderOptions[0].value, typesOptions],
    () => fetchPokemons(0, orderOptions[0].value, typesOptions)
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Home;
