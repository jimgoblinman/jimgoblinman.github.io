import React from 'react';
import styles from '../styles/index.module.css'
import Header from '../components/Header';
import Welcome from '../components/Welcome';

function App() {
  return (
    <>
    <body>   
      <Header />
      <Welcome />
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>


      
      </body>
    </>
  );
}

export default App;
