import Head from "next/head";
import Layout from "@/components/Layout";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '@/styles/globals.css'

function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>CSE Resource Hub</title>
      <link rel="icon" href="/icon.ico" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}


export default App;