import { useQuery } from "@apollo/client";
import { GET_POKEMONS, GetPokemonsQuery } from "../graphql/queries";
import Pokemon from "../components/Pokemon";

const Pokemons = () => {
  const { loading, error, data, fetchMore } = useQuery<GetPokemonsQuery>(
    GET_POKEMONS,
    { variables: { offset: 0 } }
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div className="container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8">
      {data!.pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
      <button
        onClick={() =>
          fetchMore({ variables: { offset: data!.pokemons.length } })
        }
      >
        Fetch More
      </button>
    </div>
  );
};

export default Pokemons;
