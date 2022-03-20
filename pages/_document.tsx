import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="The Pokédex is an electronic device created and designed to catalog and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series."
        />
        <meta name="author" content="Aruzo" />
        <meta
          property="og:image"
          content="/thumbnail.png"
        />
        <meta property="og:image:height" content="1920" />
        <meta property="og:image:width" content="1080" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
