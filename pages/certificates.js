import React, {useState} from 'react';
import styles from '../styles/Certificates.module.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; // Import the popup styles

import CHeader from '../components/CHeader';
import Footer from '../components/Footer';

function Certificates() {

  return (
    <>
    <style jsx global>{`
        body {
          margin: 0;
          background-color: #1f1f1f;
          padding: 0;
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
          <div></div>
          <div className={styles['certificates-container']}>
            <div className={styles.üK}>
              <Popup
                trigger={<div className={styles['c-item']}><h2>Ük</h2></div>}
                modal
                contentStyle={{
                  backgroundColor:'1f1f1f',
                  padding: 0,
                }}
              >
                {close => (
                  <div className={styles.popupContent}>
                    <h2>Ük Certificate</h2>
                    <embed src="certificates/ÜK.pdf" type="application/pdf" width="100%" height="500px"/>
                  </div>
                )}
              </Popup>
            </div>
            <div className={styles.gibb}>
              <Popup
                trigger={<div className={styles['c-item']}><h2>gibb</h2></div>} modal contentStyle={{
                  backgroundColor:'1f1f1f',
                  padding: 0,
                }}>
                {close => (
                  <div className={styles.popupContent}>
                    <h2>Gibb Certificate</h2>
                    <embed src="certificates/Gibb_Zeugniss.pdf" type="application/pdf" width="100%" height="500px"/>
                  </div>
                )}
              </Popup>
              </div>
              <div className={styles.Praxistraining}>
              <Popup
                trigger={<div className={styles['c-item']}><h2>Praxistraining</h2></div>}
                modal
                contentStyle={{
                  backgroundColor:'1f1f1f',
                  padding: 0,
                }}
              >
                {close => (
                  <div className={styles.popupContent}>
                    <h2>Praxistraining Certificate</h2>
                    <embed src="certificates/Praxistraining.pdf" type="application/pdf" width="100%" height="500px"/>
                  </div>
                )}
              </Popup>
              </div>
              <div className={styles.bwd}>
              <Popup
                trigger={<div className={styles['c-item']}><h2>bwd</h2></div>}
                modal
                contentStyle={{
                  backgroundColor:'1f1f1f',
                  padding: 0,
                }}
              >
                {close => (
                  <div className={styles.popupContent}>
                    <h2>Bwd Certificate</h2>
                    <embed src="certificates/bwd.pdf" type="application/pdf" width="100%" height="500px"/>
                  </div>
                )}
              </Popup>
              </div>
          </div>
        </div>
         <Footer></Footer>
      </div>
    </>
  );
  
}

export default Certificates;