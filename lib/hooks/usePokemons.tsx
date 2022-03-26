import { useInfiniteQuery } from "react-query";
import { fetchPokemons } from "../graphql/queries";
import { FiltersState, PokemonType } from "../types";

const usePokemons = (filters: FiltersState, initialData: PokemonType[]) => {
  return useInfiniteQuery<PokemonType[]>(
    ["pokemons", filters],
    ({ pageParam }) => fetchPokemons(pageParam, filters),
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
