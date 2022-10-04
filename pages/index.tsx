import type { NextPage } from "next";
import Head from "next/head";
import globalStyles from "../styles/global";

import Main from "../components/main";
import Projects from "../components/projects";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:wght@200;500;700;900&display=swap"
          rel="stylesheet"
        />
        <title>Wootae Jeon</title>
        <meta name="description" content="Web portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Main />
        <Projects />
      </main>

      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default Home;
