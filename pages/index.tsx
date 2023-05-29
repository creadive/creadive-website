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
  }, 2200);

  return (
    <div>
      <Head>
        <title>Creadive Agency</title>
        <meta name="description" content="Grow on digital ocean with us!" />
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
