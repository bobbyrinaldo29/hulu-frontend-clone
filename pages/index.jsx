import Head from "next/head";
import Content from "../components/Content/Content";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import request from "../utils/request";

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const reqData = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  ).then(res => res.json());

  return {
    props : {
      results: reqData.results
    }
  }
}

export default function Home({results}) {
  return (
    <>
      <Head>
        <title>Hulu Clone 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto 2xl:container">
        {/* Header */}
        <Header />
        {/* Navbar */}
        <Navbar />
        {/* Result */}
        <Content results={results}/>
      </div>
    </>
  );
}
