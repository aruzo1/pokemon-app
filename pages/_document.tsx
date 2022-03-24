import { Html, Head, Main, NextScript } from "next/document";

const PokedexDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="og:title" content="Pokedex" />
        <meta
          name="description"
          content="The Pokédex has a informations on all the Pokémon."
        />
        <meta
          name="og:description"
          content="The Pokédex has a informations on all the Pokémon."
        />
        <meta name="og:site_name" content="Pokedex" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="/thumbnail.jpg" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default PokedexDocument;
