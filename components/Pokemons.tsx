import { useEffect } from "react";
import { usePokemons } from "../graphql/queries";
import Pokemon from "./Pokemon";
import Pokeball from "../public/icons/pokeball.svg";

const Pokemons = () => {
  const { data, error, isFetching, fetchNextPage } = usePokemons();

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
    <div className="container">
      <main>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data?.pages.map((page) =>
            page.map((pokemon) => (
              <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))
          )}
        </ul>
        {isFetching && <Pokeball className="mx-auto my-8 animate-spin" />}
        {error && (
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
