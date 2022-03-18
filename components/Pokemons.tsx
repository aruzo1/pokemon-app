import { gql, useQuery } from "@apollo/client";
import Pokemon from "../components/Pokemon";
import { IPokemon } from "../types";

const GET_POKEMONS = gql`
  {
    pokemons: pokemon_v2_pokemon(limit: 100) {
      id
      name
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
    }
  }
`;

const Pokemons = () => {
  const { loading, error, data } =
    useQuery<{ pokemons: IPokemon[] }>(GET_POKEMONS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div className="container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8">
      {data!.pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Pokemons;
