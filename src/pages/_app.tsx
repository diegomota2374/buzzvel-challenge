import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Buzzvel Challenger</title>
        <meta name="description" content="Buzzvel Challenger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
