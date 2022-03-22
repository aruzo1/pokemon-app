import { useEffect, useState } from "react";
import {
  SimpleGrid,
  Spinner,
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { usePokemons } from "../graphql/queries";
import Pokemon from "./Pokemon";
import ArrowDown from "../public/icons/arrowDown.svg";

const orderOptions = [
  { name: "Lowest index", value: { pokemon_species_id: "asc" } },
  { name: "Highest index", value: { pokemon_species_id: "desc" } },
  { name: "A - Z", value: { name: "asc" } },
  { name: "Z - A", value: { name: "desc" } },
];

const Pokemons = () => {
  const [order, setOrder] = useState(orderOptions[0]);
  const { data, isError, isFetching, fetchNextPage, hasNextPage } = usePokemons(
    order.value
  );

  useEffect(() => {
    const fetchMoreIfBottom = () => {
      if (
        !isFetching &&
        !isError &&
        hasNextPage &&
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 200
      ) {
        fetchNextPage();
      }
    };

    fetchMoreIfBottom();
    window.addEventListener("scroll", fetchMoreIfBottom);
    return () => window.removeEventListener("scroll", fetchMoreIfBottom);
  }, [isError, isFetching, hasNextPage]);

  return (
    <VStack gap={4} py={4}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ArrowDown />} alignSelf="start">
          Sort By
        </MenuButton>
        <MenuList bg="gray.800" border="none" p={2}>
          {orderOptions.map((option, i) => (
            <MenuItem
              key={i}
              rounded="lg"
              bg={order === option ? "gray.900" : ""}
              _hover={{ bg: "gray.700" }}
              onClick={() => setOrder(option)}
            >
              {option.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <SimpleGrid as="ul" columns={[1, 2, 3, 4]} gap={4} w="full">
        {data?.pages.map((page) =>
          page.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)
        )}
      </SimpleGrid>
      {isFetching && <Spinner />}
      {isError && !isFetching && (
        <VStack>
          <Text as="h1" fontSize="5xl" fontWeight="bold" color="red.500">
            Error
          </Text>
          <Text color="gray.400">Try again later.</Text>
        </VStack>
      )}
    </VStack>
  );
};

export default Pokemons;
