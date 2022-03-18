import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS, GetPokemonsQuery } from "../graphql/queries";
import Pokemon from "../components/Pokemon";
import PokemonsSkeleton from "./PokemonsSkeleton";

const Pokemons = () => {
  const { data, loading, error, fetchMore } = useQuery<GetPokemonsQuery>(
    GET_POKEMONS,
    {
      variables: { offset: 0 },
      notifyOnNetworkStatusChange: true,
    }
  );

  const fetchMoreIfBottom = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMore({ variables: { offset: data?.pokemons.length || 0 } });
    }
  };

  useEffect(() => {
    fetchMoreIfBottom();
    window.addEventListener("scroll", fetchMoreIfBottom);
    return () => window.removeEventListener("scroll", fetchMoreIfBottom);
  }, [data]);

  return (
    <section className="container my-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
        {data?.pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
        {loading && <PokemonsSkeleton />}
      </div>
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
