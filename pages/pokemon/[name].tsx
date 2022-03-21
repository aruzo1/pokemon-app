import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Pokemon: NextPage = () => {
  const { name } = useRouter().query;

  return (
    <div>
      <Head>
        <title>Pokedex - {name}</title>
        <meta property="og:title" content={`${name}`} />
      </Head>
      {name} description here.
    </div>
  );
};

export default Pokemon;
