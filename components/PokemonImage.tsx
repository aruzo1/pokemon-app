import { useState } from "react";
import Image from "next/image";

const PokemonImage = (props: { id: number; alt: string }) => {
  const { id, alt } = props;
  const [imgSrc, setImgSrc] = useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  );

  return (
    <Image
      src={imgSrc}
      onError={() => setImgSrc("/images/unknownPokemon.png")}
      alt={alt}
      layout="fill"
    />
  );
};

export default PokemonImage;
