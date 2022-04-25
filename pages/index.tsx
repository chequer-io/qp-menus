import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Container } from "../styles/Layouts";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>qp-menus</title>
        <meta name="description" content="Index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <ul>
          <li>
            <Link href={"/MenuBar"}>MenuBar</Link>
          </li>
          <li>
            <Link href={"/ContextMenu"}>ContextMenu</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Home;
