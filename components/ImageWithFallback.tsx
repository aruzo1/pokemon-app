import { useState } from "react";
import Image from "next/image";

const ImageWithFallback = (props: {
  src: string;
  fallbackSrc: string;
  rest: {};
}) => {
  const { src, fallbackSrc, rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image src={imgSrc} onError={() => setImgSrc(fallbackSrc)} {...rest} />
  );
};

export default ImageWithFallback;
