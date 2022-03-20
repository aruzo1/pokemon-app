import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import client from "../graphql/client";
import { GET_POKEMONS, PokemonType } from "../graphql/queries";
import Pokemon from "./Pokemon";
import Pokeball from "../public/icons/pokeball.svg";

const fetchPokemons = async ({ pageParam = 0 }: { pageParam?: number }) => {
  return client
    .request(GET_POKEMONS, { offset: pageParam })
    .then((res) => res.pokemons);
};

const Pokemons = () => {
  const { data, error, isFetching, fetchNextPage } = useInfiniteQuery<
    PokemonType[]
  >("pokemons", fetchPokemons, {
    getNextPageParam(_, pages) {
      // Convert 2D array to 1D and return length
      const offset: PokemonType[] = [];
      return offset.concat(...pages).length;
    },
  });

  const fetchMoreIfBottom = () => {
    if (
      !error &&
      !isFetching &&
      window.scrollY + window.innerHeight >= document.body.scrollHeight - 200
    ) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    fetchMoreIfBottom();
    window.addEventListener("scroll", fetchMoreIfBottom);
    return () => window.removeEventListener("scroll", fetchMoreIfBottom);
  }, [error, isFetching]);

  return (
    <section className="container my-8">
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
        {data?.pages.map((page) =>
          page.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)
        )}
      </ul>
      {isFetching && <Pokeball className="mx-auto animate-spin" />}
      {error && (
        <div className="text-center">
          <h1 className="font-bold text-red-400 text-5xl">Error!</h1>
          <p className="text-gray-400">Try again later.</p>
        </div>
      )}
    </section>
  );
};

export default Pokemons;
