module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "1280px",
        md: "1280px",
        lg: "1280px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
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
    },
  },
  plugins: [],
};
