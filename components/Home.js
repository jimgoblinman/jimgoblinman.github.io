import React from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Welcome from '../components/Welcome';

function Home() {
  return (
    <>
      <div className={styles['home-box']}>
        <Header></Header>
        <Welcome></Welcome>
      </div>
    </>
  );
}

export default Home;  
