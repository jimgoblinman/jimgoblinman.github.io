import React from 'react';
import styles from '../styles/index.module.css'

import About from '../components/About';
import Home from '../components/Home';
import Journey from '../components/Journey';
import Hit_me_up from '../components/HitMeUp';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={styles['gridlayout-container']}>
        {/* First Column: Header and Welcome */}
        <Home></Home>
        {/* Second Column: About me*/}
        <About></About>
      
        {/* Third Column */}
        <Journey></Journey>

        {/* Fourth Column */}
        <Hit_me_up></Hit_me_up>

        {/* Fifth Column: Footer */}
        <Footer></Footer>
    </div>
    
    </>
  );
}

export default App;