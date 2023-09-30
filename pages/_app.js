import React from 'react';
import App from 'next/app';
import Head from 'next/head'; // Import Head from Next.js

import styles from '../styles/global.css';
import nextConfig from '../next.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Add the favicon link here */}
      <Head>
        <link rel="icon" href="/assets/favicon.svg"/>
      </Head>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
