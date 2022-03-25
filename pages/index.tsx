import { useEffect, useState } from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import { fetchPokemons, usePokemons } from "../lib/graphql/queries";
import SortMenu, { orderOptions } from "../components/home/SortMenu";
import TypesMenu from "../components/home/TypesMenu";
import Pokemons from "../components/home/Pokemons";

const Home: NextPage = () => {
  const [order, setOrder] = useState(orderOptions[0]);
  const { data, isError, isFetching, fetchNextPage, hasNextPage, remove } =
    usePokemons(order.value);

  useEffect(() => {
    const fetchMoreIfBottom = () => {
      if (
        !isFetching &&
        !isError &&
        hasNextPage &&
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 200
      ) {
        fetchNextPage();
      }
    };

    fetchMoreIfBottom();
    window.addEventListener("scroll", fetchMoreIfBottom);
    return () => window.removeEventListener("scroll", fetchMoreIfBottom);
  }, [isError, isFetching, hasNextPage, fetchNextPage]);

  return (
    <div className="container grid grid-cols-5 gap-y-4 py-4">
      <Head>
        <title>Pokedex - Home</title>
      </Head>
      <SortMenu order={order} setOrder={setOrder} remove={remove} />
      <TypesMenu />
      <Pokemons pokemons={data} isFetching={isFetching} isError={isError} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery(
    ["pokemons", orderOptions[0].value],
    () => fetchPokemons(0, orderOptions[0].value)
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Home;
