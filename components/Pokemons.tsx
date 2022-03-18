import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS, GetPokemonsQuery } from "../graphql/queries";
import Pokemon from "../components/Pokemon";
import PokemonsSkeleton from "./PokemonsSkeleton";

const Pokemons = () => {
  const { data, loading, fetchMore } = useQuery<GetPokemonsQuery>(
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
    <main className="container my-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
        {data?.pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
        {loading && <PokemonsSkeleton />}
      </div>
    </main>
  );
};

export default Pokemons;
