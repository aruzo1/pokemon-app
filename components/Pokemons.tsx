import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS, GetPokemonsQuery } from "../graphql/queries";
import Pokemon from "../components/Pokemon";

const Pokemons = () => {
  const { data, fetchMore } = useQuery<GetPokemonsQuery>(GET_POKEMONS, {
    variables: { offset: 0 },
  });

  const fetchMoreIfBottom = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMore({ variables: { offset: data!.pokemons.length } });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fetchMoreIfBottom);
    return () => window.removeEventListener("scroll", fetchMoreIfBottom);
  }, [data]);

  return (
    <div className="container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8">
      {data?.pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Pokemons;
