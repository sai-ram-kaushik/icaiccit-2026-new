import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
// import Scrolling from './Scrolling'
const Layouts = ({children}) => {
  return (
    <>
      <Head>
        <title>ICAICCIT - 2026</title>
        <meta
          name="description"
          content="Conference Website - ICAICCIT - 2026"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/aiccit_logo.png " />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <Navbar />
        {/* <Scrolling /> */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
