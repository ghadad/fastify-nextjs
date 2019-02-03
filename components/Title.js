import React from "react";
import Head from "next/head";

const TitlePrefixes = {
  "/": "Home",
  "/hello": "Hello"
};

const Title = ({ path }) => (
  <Head>
    <title>{`${TitlePrefixes[path]} | Vested Finance`}</title>
  </Head>
);

export default Title;
