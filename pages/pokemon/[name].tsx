import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Pokemon: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <Head>
        <title>{Math.random()}</title>
      </Head>
      {name} description here.
    </div>
  );
};

export default Pokemon;
