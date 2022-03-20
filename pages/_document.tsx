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
          name="og:image"
          content="https://tueuropa.pl/uploads/articles_files/2021/11/05/6e7f9516-1948-d9e8-ca22-00007380aca5.jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
