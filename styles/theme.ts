import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: { initialColorMode: "dark", useSystemColorMode: false },
  colors: {
    grass: "#78C850",
    fire: "#F08030",
    water: "#6890F0",
    normal: "#A8A878",
    flying: "#A890F0",
    bug: "#A8B820",
    poison: "#D665D6",
    electric: "#F8D030",
    ground: "#E0C068",
    fighting: "#C03028",
    psychic: "#F85888",
    rock: "#B8A038",
    ice: "#98D8D8",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#FF9FC2",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "medium",
        _focus: { boxShadow: "none" },
      },
      variants: {
        solid: {
          bg: "gray.800",
          _hover: { bg: "gray.700" },
          _active: { bg: "gray.700" },
        },
      },
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("white", "gray.900")(props),
      },
    }),
  },
});

export default theme;
