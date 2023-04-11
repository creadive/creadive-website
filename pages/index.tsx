import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout.jsx";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import { Loading } from "../components/Loading/Loading";
import { useState, useEffect } from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2800);

  return (
    <div>
      <Head>
        <title>Creadive Agency</title>
        <meta name="description" content="Grow on digital ocean with us!" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="preload"
          // as="fetch"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Layout>
        <Fade>
          {isLoading ? <Loading /> : <Main />}
          {/* <Main /> */}
        </Fade>
      </Layout>
      <Footer />
    </div>
  );
}
