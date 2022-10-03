import type { NextPage } from "next";
import Head from "next/head";
import globalStyles from "../styles/global";

import Main from "../components/main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
        <title>Wootae Jeon</title>
        <meta name="description" content="Web portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Main />
      </main>

      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default Home;
