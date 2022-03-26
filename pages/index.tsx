import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import usePokemons from "../lib/hooks/usePokemons";
import SortMenu from "../components/home/SortMenu";
import TypesMenu from "../components/home/TypesMenu";
import Pokemons from "../components/home/Pokemons";
import useFilters, {
  initialState as initialFilters,
} from "../lib/hooks/useFilters";
import { fetchPokemons } from "../lib/graphql/queries";
import { PokemonType } from "../lib/types";

interface Props {
  initialPokemons: PokemonType[];
}

const Home: NextPage<Props> = ({ initialPokemons }) => {
  const [filters, filtersDispatch] = useFilters();
  const pokemons = usePokemons(filters, initialPokemons);

  return (
    <div className="container grid grid-cols-5 gap-4 py-4">
      <Head>
        <title>Pokedex - Home</title>
      </Head>
      <SortMenu
        order={filters.order}
        setOrder={(payload) => {
          filtersDispatch({ type: "SET_ORDER", payload });
        }}
      />
      <TypesMenu
        types={filters.types}
        addType={(payload) => {
          filtersDispatch({ type: "ADD_TYPE", payload });
        }}
        removeType={(payload) => {
          filtersDispatch({ type: "REMOVE_TYPE", payload });
        }}
      />
      <Pokemons
        pokemons={pokemons.data}
        isFetching={pokemons.isFetching}
        isError={pokemons.isError}
        hasNextPage={pokemons.hasNextPage}
        fetchNextPage={pokemons.fetchNextPage}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const initialPokemons = await fetchPokemons(0, initialFilters);
  return { props: { initialPokemons } };
};

export default Home;
