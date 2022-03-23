import React, { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { PokemonType, usePokemons } from "../../graphql/queries";
import ScaleFade from "../ui/ScaleFade";
import Pokemon from "./Pokemon";
import Pokeball from "../../public/icons/pokeball.svg";
import ArrowDown from "../../public/icons/arrowDown.svg";

const orderOptions = [
  { name: "Lowest index", value: { pokemon_species_id: "asc" } },
  { name: "Highest index", value: { pokemon_species_id: "desc" } },
  { name: "A - Z", value: { name: "asc" } },
  { name: "Z - A", value: { name: "desc" } },
];

const Pokemons = ({ pokemons }: { pokemons: PokemonType[] }) => {
  const [order, setOrder] = useState(orderOptions[0]);
  const { data, isError, isFetching, fetchNextPage, hasNextPage } = usePokemons(
    order.value,
    pokemons
  );

  useEffect(() => {
    const fetchMoreIfBottom = () => {
      if (
        window.scrollY + window.innerHeight >=
          document.body.scrollHeight - 400 &&
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
    <div className="flex flex-col gap-4 py-4">
      <Menu as="div" className="relative">
        <Menu.Button className="py-2 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
          Sort by <ArrowDown className="ml-1 inline" />
        </Menu.Button>
        <ScaleFade>
          <Menu.Items className="z-10 absolute origin-top-left flex flex-col gap-y-2 w-52 mt-4 p-2 rounded-lg drop-shadow-xl bg-gray-800">
            {orderOptions.map((orderOption, i) => (
              <Menu.Item
                key={i}
                as="button"
                className={`w-full py-2 rounded-lg ${
                  order === orderOption ? "bg-gray-900" : "bg-gray-800"
                } hover:bg-gray-700 transition`}
                onClick={() => setOrder(orderOption)}
              >
                {orderOption.name}
              </Menu.Item>
            ))}
          </Menu.Items>
        </ScaleFade>
      </Menu>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.pages.map((page) =>
          page.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)
        )}
      </ul>
      {isFetching && <Pokeball className="mx-auto animate-spin" />}
      {isError && !isFetching && (
        <div className="text-center">
          <h1 className="font-bold text-red-500 text-5xl">Error!</h1>
          <p className="text-gray-400">Try again later.</p>
        </div>
      )}
    </div>
  );
};

export default Pokemons;
