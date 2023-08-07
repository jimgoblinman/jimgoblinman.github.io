import React from 'react';
import App from 'next/app';
import styles from '../styles/global.css';
import nextConfig from '../next.config';


function MyApp({ Component, pageProps }) {
  
  return <>
    <Component 
    {...pageProps} />

</>
}

export default MyApp;
