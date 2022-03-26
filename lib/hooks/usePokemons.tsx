import { useInfiniteQuery } from "react-query";
import { fetchPokemons } from "../graphql/pokemons";
import { OrderValue, PokemonType } from "../types";

const usePokemons = (order: OrderValue, initialData: PokemonType[]) => {
  return useInfiniteQuery<PokemonType[]>(
    ["pokemons", order],
    ({ pageParam }) => fetchPokemons(pageParam, order),
    {
      getNextPageParam(lastPage, pages) {
        if (!lastPage[0]) return undefined;
        // Convert 2D array to 1D and return length
        const offset: PokemonType[] = [];
        return offset.concat(...pages).length;
      },
      keepPreviousData: true,
      initialData: {
        pages: [initialData],
        pageParams: [0],
      },
    }
  );
};

export default usePokemons;
