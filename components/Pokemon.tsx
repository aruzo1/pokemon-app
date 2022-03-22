import Link from "next/link";
import { AspectRatio, Box, Center, Grid, Fade, Text } from "@chakra-ui/react";
import { PokemonType } from "../graphql/queries";
import withPadding from "../helpers/withPadding";
import PokemonImage from "./PokemonImage";

const Pokemon = ({ pokemon }: { pokemon: PokemonType }) => {
  return (
    <Link href={`/pokemon/${pokemon.name}`} passHref>
      <Fade in={true}>
        <Grid as="li" gap={4} p={4} rounded="lg" bg="gray.800">
          <AspectRatio ratio={1} w="full" bg="gray.700" rounded="lg">
            <PokemonImage id={pokemon.id} alt={pokemon.name} />
          </AspectRatio>
          <Box overflow="hidden">
            <Text as="h3" fontSize="xl" color="gray.400">
              #{withPadding(pokemon.speciesId)}
            </Text>
            <Text as="h2" fontSize="3xl" fontWeight="bold" isTruncated>
              {pokemon.name}
            </Text>
          </Box>
          <Grid autoFlow="column" w="full" gap={4}>
            {pokemon.types.map(({ type }, i) => (
              <Center
                key={i}
                py={2}
                rounded="lg"
                color="gray.900"
                bg={type.name}
              >
                {type.name}
              </Center>
            ))}
          </Grid>
        </Grid>
      </Fade>
    </Link>
  );
};

export default Pokemon;
