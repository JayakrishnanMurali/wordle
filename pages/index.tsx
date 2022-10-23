import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import Game from "../components/Game/Game";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Wordle</title>
        <meta name="description" content="A simple wordle game." />
      </Head>
      <Game />
    </Fragment>
  );
};

export default Home;
