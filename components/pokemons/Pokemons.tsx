import React, { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { usePokemons } from "../../graphql/queries";
import Fade from "../ui/Fade";
import Pokemon from "./Pokemon";
import Pokeball from "../../public/icons/pokeball.svg";
import ArrowDown from "../../public/icons/arrowDown.svg";

const orderOptions = [
  { name: "Lowest index", value: { pokemon_species_id: "asc" } },
  { name: "Highest index", value: { pokemon_species_id: "desc" } },
  { name: "A - Z", value: { name: "asc" } },
  { name: "Z - A", value: { name: "desc" } },
];

const Pokemons = () => {
  const [order, setOrder] = useState(orderOptions[0]);
  const { data, isError, isFetching, fetchNextPage, hasNextPage } = usePokemons(
    order.value
  );

  useEffect(() => {
    const fetchMoreIfBottom = () => {
      if (
        window.scrollY + window.innerHeight >=
          document.body.scrollHeight - 200 &&
        !isFetching &&
        !isError &&
        hasNextPage
      ) {
        fetchNextPage();
      }
    };

    fetchMoreIfBottom();
    window.addEventListener("scroll", fetchMoreIfBottom);
    return () => window.removeEventListener("scroll", fetchMoreIfBottom);
  }, [isError, isFetching, hasNextPage]);

  return (
    <div className="py-8">
      <Menu as="div" className="relative mb-8">
        <Menu.Button className="flex items-center py-2 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
          <p>Sort by</p> <ArrowDown className="ml-2" />
        </Menu.Button>
        <Fade>
          <Menu.Items className="flex flex-col gap-y-2 z-10 absolute top-full w-52 mt-4 p-2 rounded-lg bg-gray-800">
            {orderOptions.map((orderOption, i) => (
              <Menu.Item
                key={i}
                as="button"
                className={`w-full py-2 rounded-lg ${
                  order === orderOption ? "bg-gray-900" : "bg-gray-800"
                } hover:bg-gray-700`}
                onClick={() => setOrder(orderOption)}
              >
                {orderOption.name}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Fade>
      </Menu>
      <main>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data?.pages.map((page) =>
            page.map((pokemon) => (
              <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))
          )}
        </ul>
        {isFetching && <Pokeball className="mx-auto mt-8 animate-spin" />}
        {isError && !isFetching && (
          <div className="text-center mt-8">
            <h1 className="font-bold text-red-500 text-5xl">Error!</h1>
            <p className="text-gray-400">Try again later.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Pokemons;
