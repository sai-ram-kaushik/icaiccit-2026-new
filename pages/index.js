import Head from "next/head";
import Main from "../components/Main";
import Dates from "../components/ImportantDates";

export default function Home() {
  return (
    <>
      <Head>
        <title>ICAICCIT 2026 – International Conference on Advances in Computing, Communication & IT</title>
        <meta name="description" content="4th International Conference on Advances in Computing, Communication and Information Technology – 19–20 November 2026, Manav Rachna, Faridabad." />
      </Head>
      <Main />
      <Dates />
    </>
  );
}
