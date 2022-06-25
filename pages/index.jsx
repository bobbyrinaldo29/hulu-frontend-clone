import Head from "next/head";
import Content from "../components/Content/Content";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import request from "../utils/request";

export async function getServerSideProps(context) {
  const genre = context.query.genre; // get query

  // Fetch data from query
  const reqData = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url // if genre doesn't work will fetch trending
    }`
  ).then((res) => res.json()); // convert to json

  return {
    props: {
      results: reqData.results, // send file to props
    },
  };
}

export default function Home({ results }) {
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
        <Content results={results} />
      </div>
    </>
  );
}
