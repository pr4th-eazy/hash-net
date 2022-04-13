import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Homepage from "../components/Homepage";
import Products from "../components/Products";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HASH.</title>
        <meta />
      </Head>
      <Homepage/>
      <Products/>
    </div>
  );
}
