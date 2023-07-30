import React from 'react';
import styles from '../styles/Footer.module.css';


function Footer() {
  return (
    <>
        <div className={styles.Footerbox}>
        <div className={styles['Footer-header']}>
          <div> {/* For my name or smth */}

          </div>
          <div> {/* For my socials, all in circular shape (linkdin/github/whatsapp) */}
            <div></div>
            <div></div>
            <div></div>
          </div>          
        </div>
        <div className={styles['Footer-content']}>
            
        </div>
        </div>
    
    </>
  );
}

export default Footer;  
