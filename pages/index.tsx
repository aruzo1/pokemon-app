import { useState } from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import usePokemons from "../lib/hooks/usePokemons";
import SortMenu, { orderOptions } from "../components/home/SortMenu";
import Pokemons from "../components/home/Pokemons";
import useFilters, {
  initialState as initialFilters,
} from "../lib/hooks/useFilters";
import { fetchPokemons } from "../lib/graphql/pokemons";
import { PokemonType } from "../lib/types";
import Filters from "../components/home/Filters";

interface Props {
  initialPokemons: PokemonType[];
}

const Home: NextPage<Props> = ({ initialPokemons }) => {
  const [order, setOrder] = useState(orderOptions[0]);
  const [filters, filtersDispatch] = useFilters();
  const pokemons = usePokemons(order.value, filters, initialPokemons);

  return (
    <div className="container grid grid-cols-5 gap-4 py-4">
      <Head>
        <title>Pokedex - Home</title>
      </Head>
      <SortMenu order={order} setOrder={setOrder} />
      <Filters filters={filters} dispatch={filtersDispatch} />
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
  const initialPokemons = await fetchPokemons(
    0,
    orderOptions[0].value,
    initialFilters
  );
  return { props: { initialPokemons } };
};

export default Home;
