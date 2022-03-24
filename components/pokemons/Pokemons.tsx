import { InfiniteData } from "react-query";
import { PokemonType } from "../../graphql/queries";
import Pokemon from "./Pokemon";
import Pokeball from "../../public/icons/pokeball.svg";

const Pokemons = (props: {
  pokemons?: InfiniteData<PokemonType[]>;
  isFetching: boolean;
  isError: boolean;
}) => {
  const { pokemons, isError, isFetching } = props;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {pokemons?.pages.map((page) =>
        page.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)
      )}
      {isFetching && <Pokeball className="col-span-full mx-auto animate-spin" />}
      {isError && !isFetching && (
        <div className="col-span-full text-center">
          <h1 className="font-bold text-red-500 text-5xl">Error!</h1>
          <p className="text-gray-400">Try again later.</p>
        </div>
      )}
    </ul>
  );
};

export default Pokemons;
