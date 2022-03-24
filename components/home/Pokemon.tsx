import { motion } from "framer-motion";
import { theme } from "../../tailwind.config.js";
import { IPokemon } from "../../lib/types";
import withPadding from "../../lib/helpers/withPadding";
import PokemonImage from "./PokemonImage";

const Pokemon = ({ pokemon }: { pokemon: IPokemon }) => (
  <motion.li
    initial={{ opacity: 0, scale: 0.75 }}
    animate={{ opacity: 1, scale: 1 }}
    className="flex flex-col gap-4 p-4 rounded-lg bg-gray-800"
  >
    <div className="p-4 rounded-lg bg-gray-700">
      <div className="aspect-square relative">
        <PokemonImage id={pokemon.id} alt={pokemon.name} />
      </div>
    </div>
    <div>
      <h3 className="font-bold text-lg text-gray-400">
        #{withPadding(pokemon.speciesId)}
      </h3>
      <h2 className="truncate font-extrabold text-2xl">{pokemon.name}</h2>
    </div>
    <ul className="grid grid-flow-col gap-x-4 text-center text-gray-900">
      {pokemon.types.map(({ type }, i) => (
        <li
          key={i}
          style={{ background: theme.extend.colors[type.name] }}
          className="py-2 rounded-lg font-medium"
        >
          {type.name}
        </li>
      ))}
    </ul>
  </motion.li>
);

export default Pokemon;
