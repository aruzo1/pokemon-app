import { NextPage } from "next";
import { useRouter } from "next/router";

const Pokemon: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return <div>{name} description here.</div>;
};

export default Pokemon;
