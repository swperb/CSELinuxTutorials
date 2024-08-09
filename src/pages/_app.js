import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '@/styles/globals.css'
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }) {
  return <>
    <UserProvider>
      <Head>
        <title>CSE Resource Hub</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  </>
};