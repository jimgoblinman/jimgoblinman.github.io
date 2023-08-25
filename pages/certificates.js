import React from 'react';
import styles from '../styles/certificates.module.css';

import CHeader from '../components/CHeader';

function Certificates() {
  return (
    <>
    <style jsx global>{`
        body {
          margin: 0;
          background-color: #1f1f1f;
        }
        a {
          color: #a80000;
        }
        
        a:hover {
          color: #731010;
        }
      `}</style>
      <div>
        <CHeader></CHeader>
        <div className={styles['outer-grid-container']}>
          <div>Gap</div>
          <div className={styles['certificates-container']}>
          <div className={styles['c-item']}></div>
            <div className={styles['c-item']}></div>
            <div className={styles['c-item']}></div>
            <div className={styles['c-item']}></div>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Certificates;