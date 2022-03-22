import type { GetStaticProps, NextPage } from "next";
import { Container } from "@chakra-ui/react";
import { dehydrate, QueryClient } from "react-query";
import { fetchPokemons } from "../graphql/queries";
import Pokemons from "../components/Pokemons";

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl">
      <Pokemons />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(
    ["pokemons", { pokemon_species_id: "asc" }],
    () => fetchPokemons(0, { pokemon_species_id: "asc" })
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 60,
  };
};

export default Home;
