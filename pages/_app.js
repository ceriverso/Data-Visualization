import Head from "next/head";
import Layout from '../src/components/Layout';
import "../src/css/global.css";
import "../src/fonts/fonts.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link  href="/favicon.ico"  type="image/x-icon" rel="shortcut icon"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}