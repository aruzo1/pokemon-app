import { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { usePokemons } from "../graphql/queries";
import ArrowDown from "../public/icons/arrowDown.svg";
import Pokeball from "../public/icons/pokeball.svg";
import Pokemon from "./Pokemon";

const orderOptions = [
  { name: "Lowest index", order: { pokemon_species_id: "asc" } },
  { name: "Highest index", order: { pokemon_species_id: "desc" } },
  { name: "A-Z", order: { name: "asc" } },
  { name: "Z-A", order: { name: "desc" } },
];

const Pokemons = () => {
  const [order, setOrder] = useState<{ [key: string]: any }>({
    pokemon_species_id: "asc",
  });
  const { data, error, isFetching, fetchNextPage } = usePokemons(order);

  useEffect(() => {
    const fetchMoreIfBottom = () => {
      if (
        !error &&
        !isFetching &&
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 200
      ) {
        fetchNextPage();
      }
    };

    fetchMoreIfBottom();
    window.addEventListener("scroll", fetchMoreIfBottom);
    return () => window.removeEventListener("scroll", fetchMoreIfBottom);
  }, [error, isFetching]);

  return (
    <div className="container flex flex-col gap-8 py-8">
      <Menu as="div" className="relative">
        <Menu.Button className="flex items-center py-2 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
          Sort by <ArrowDown className="ml-2" />
        </Menu.Button>
        <Menu.Items className="z-10 absolute top-full w-52 mt-4 p-2 rounded-lg bg-gray-800">
          {orderOptions.map((orderOption, i) => (
            <Menu.Item
              key={i}
              as="button"
              className="w-full py-2 rounded-lg bg-gray-800 hover:bg-gray-700"
              onClick={() => setOrder(orderOption.order)}
            >
              {orderOption.name}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
      <main>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data?.pages.map((page) =>
            page.map((pokemon) => (
              <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))
          )}
        </ul>
        {isFetching && <Pokeball className="mx-auto my-8 animate-spin" />}
        {error && !isFetching && (
          <div className="text-center my-8">
            <h1 className="font-bold text-red-400 text-5xl">Error!</h1>
            <p className="text-gray-400">Try again later.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Pokemons;
