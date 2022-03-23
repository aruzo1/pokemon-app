import Link from "next/link";
import { PokemonType } from "../../graphql/queries";
import withPadding from "../../helpers/withPadding";
import { theme } from "../../tailwind.config.js";
import PokemonImage from "./PokemonImage";

const Pokemon = ({ pokemon }: { pokemon: PokemonType }) => {
  return (
    <Link href={`/pokemon/${pokemon.name}`} passHref>
      <li className="flex flex-col gap-4 p-4 rounded-lg bg-gray-800">
        <div className="p-4 rounded-lg bg-gray-700">
          <div className="aspect-square relative">
            <PokemonImage id={pokemon.id} alt={pokemon.name} />
          </div>
        </div>
        <div>
          <p className="font-medium text-lg text-gray-400">
            #{withPadding(pokemon.speciesId)}
          </p>
          <h2 className="truncate font-bold text-2xl">{pokemon.name}</h2>
        </div>
        <ul className="grid grid-flow-col gap-x-4 text-center text-gray-900">
          {pokemon.types.map(({ type }, i) => (
            <li
              key={i}
              style={{ background: theme.extend.colors[type.name] }}
              className="rounded-lg py-2"
            >
              {type.name}
            </li>
          ))}
        </ul>
      </li>
    </Link>
  );
};

export default Pokemon;
