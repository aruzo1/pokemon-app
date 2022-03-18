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
        grass: "#3E9709",
        fire: "#F67F0B",
        water: "#0A7ABC",
        normal: "#CCC9AA",
        flying: "#5EB9B2",
        bug: "#BDDD6E",
        poison: "#A719D7",
        electric: "#FFFA24",
        ground: "#E1D158",
        fighting: "#E81319",
        psychic: "#EC0E63",
        rock: "#776A3E",
        ice: "#1995A1",
        ghost: "#8E55A4",
        dragon: "#8955FC",
        dark: "#5E4631",
        steel: "#7B8E8A",
        fairy: "#FF9FC2",
      },
    },
  },
  plugins: [],
};
