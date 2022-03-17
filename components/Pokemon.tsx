import { IPokemon } from "../types";
import tailwindConfig from "../tailwind.config.js";
import convertToTag from "../helpers/convertToTag";

const Pokemon = (props: { pokemon: IPokemon }) => {
  const { pokemon } = props;

  const typesList = pokemon.types.map((type, i) => (
    <div
      key={i}
      style={{
        background: tailwindConfig.theme.extend.colors[type.type.name],
      }}
      className="rounded-lg px-4 py-1"
    >
      {type.type.name}
    </div>
  ));

  return (
    <div className="flex flex-col p-8 rounded-lg bg-gray-800">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        className="p-4 mb-4 rounded-lg bg-gray-700"
      />
      <div>
        <h3 className="text-lg text-gray-400">{convertToTag(pokemon.id)}</h3>
        <h2 className="mb-4 font-bold text-2xl">{pokemon.name}</h2>
        <div className="grid grid-flow-col gap-x-4 text-center">
          {typesList}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
