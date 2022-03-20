import Link from "next/link";
import tailwindConfig from "../tailwind.config.js";
import { PokemonType } from "../graphql/queries";
import ImageWithFallback from "./ImageWithFallback";
import withPadding from "../helpers/withPadding";

const Pokemon = ({ pokemon }: { pokemon: PokemonType }) => {
  const typesList = pokemon.types.map(({ type }, i) => (
    <div
      key={i}
      style={{ background: tailwindConfig.theme.extend.colors[type.name] }}
      className="rounded-lg py-2"
    >
      {type.name}
    </div>
  ));

  return (
    <Link href={`pokemon/${pokemon.name}`} passHref>
      <li className="flex flex-col p-4 rounded-lg cursor-pointer bg-gray-800 hover:scale-95 transition">
        <figure className="p-4 mb-4 rounded-lg bg-gray-700">
          <div className="aspect-square relative">
            <ImageWithFallback
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              fallbackSrc={"/images/unknownPokemon.png"}
              rest={{ alt: pokemon.name, layout: "fill" }}
            />
          </div>
        </figure>

          <h3 className="mb-2 text-lg text-gray-400">
            #{withPadding(pokemon.speciesId)}
          </h3>
          <h2 className="mb-4 truncate font-bold text-2xl">{pokemon.name}</h2>
          <div className="grid grid-flow-col gap-x-4 text-center text-gray-900">
            {typesList}
          </div>
    
      </li>
    </Link>
  );
};

export default Pokemon;
