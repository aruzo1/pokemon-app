import Image from "next/image";
import { IPokemon } from "../types";
import tailwindConfig from "../tailwind.config.js";

const Pokemon = (props: { pokemon: IPokemon }) => {
  const { pokemon } = props;

  const typesList = pokemon.types.map((type, i) => (
    <div
      key={i}
      style={{
        background: tailwindConfig.theme.extend.colors[type.type.name],
      }}
    >
      {type.type.name}
    </div>
  ));

  return (
    <div>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        width={100}
        height={100}
      />
      <p>#{pokemon.id}</p>
      <h2 className="font-bold text-xl">{pokemon.name}</h2>
      <div>{typesList}</div>
    </div>
  );
};

export default Pokemon;
