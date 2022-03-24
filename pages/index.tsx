import { useEffect, useState } from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import { Menu } from "@headlessui/react";
import { fetchPokemons, usePokemons } from "../graphql/queries";
import ScaleFade from "../components/ui/ScaleFade";
import Pokemons from "../components/pokemons/Pokemons";
import ArrowDown from "../public/icons/arrowDown.svg";

const orderOptions = [
  { name: "Lowest index", value: { pokemon_species_id: "asc" } },
  { name: "Highest index", value: { pokemon_species_id: "desc" } },
  { name: "A - Z", value: { name: "asc" } },
  { name: "Z - A", value: { name: "desc" } },
];

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
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 400
      ) {
        fetchNextPage();
      }
    };

    fetchMoreIfBottom();
    window.addEventListener("scroll", fetchMoreIfBottom);
    return () => window.removeEventListener("scroll", fetchMoreIfBottom);
  }, [isError, isFetching, hasNextPage]);

  return (
    <div className="container grid gap-y-4 py-4">
      <Head>
        <title>Pokedex - Home</title>
      </Head>

      <Menu as="div" className="relative">
        <Menu.Button className="py-2 px-4 rounded-lg font-bold bg-gray-800 hover:bg-gray-700 transition">
          Sort by <ArrowDown className="ml-1 inline" />
        </Menu.Button>
        <ScaleFade>
          <Menu.Items className="z-10 absolute origin-top-left flex flex-col gap-y-2 w-52 mt-4 p-2 rounded-lg drop-shadow-xl bg-gray-800">
            {orderOptions.map((orderOption, i) => (
              <Menu.Item
                key={i}
                as="button"
                className={`w-full py-2 rounded-lg font-medium ${
                  order === orderOption ? "bg-gray-900" : "bg-gray-800"
                } hover:bg-gray-700 transition`}
                onClick={() => {
                  remove();
                  setOrder(orderOption);
                }}
              >
                {orderOption.name}
              </Menu.Item>
            ))}
          </Menu.Items>
        </ScaleFade>
      </Menu>

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
    revalidate: 60,
  };
};

export default Home;
