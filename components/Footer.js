import React from 'react';
import styles from '../styles/Footer.module.css';


function Footer() {
  return (
    <>
        <div className={styles.Footerbox}>
          <div className={styles['Footer-header']}>
            <div className={styles['name-container']}> {/* For my name or smth */}
              <h3>James Vining</h3>
            </div>
            <div></div>
              <div className={styles['social-container']}> {/* For my socials, all in circular shape (linkdin/github/whatsapp) */}  
                <a href='https://wa.me/41797280659' target="_blank" alt="Whatsapp"><img src="assets/whatsapp.png"></img></a>
                <a href='https://github.com/jimgoblinman' target="_blank"><img src="assets/github.png" alt="Github"></img></a>
                <a href='https://www.linkedin.com/in/jim-vin-421b42228/' target="_blank" alt="Linkedin"><img src="assets/linkedin.png"></img></a>
              </div>          
            </div>  
          <div className={styles['Footer-content']}>
              <div className={styles.contact}>
                <h2>Contact</h2>
                <p>Phone number: +41 79 728 06 59</p>
                <p>Email: jim.vining@outlook.com</p> 
              </div>
              <div className={styles.info}>
                  <h2>Info</h2>
                  <p>© All rights reserved</p>
                  <p><a href='/impressum'>Impressum</a></p>

              </div>  
          </div>
        </div>

        <div className={styles['footer-mobile']}>
          <div className={styles['name-container']}> {/* For my name or smth */}
            <h2>James Vining</h2>
          </div>
          <div className={styles['social-container']}>
                <a href='https://wa.me/41797280659' target="_blank" alt="Whatsapp"><img src="assets/whatsapp.png"></img></a>
                <a href='https://github.com/jimgoblinman' target="_blank"><img src="assets/github.png" alt="Github"></img></a>
                <a href='https://www.linkedin.com/in/jim-vin-421b42228/' target="_blank" alt="Linkedin"><img src="assets/linkedin.png"></img></a>
          </div>
          <div className={styles.contact}>
              <h2>Contact</h2>
              <p>Phone number: +41 79 728 06 59</p>
              <p>Email: jim.vining@outlook.com</p> 
          </div>
          <div className={styles.info}>
                  <h2>Info</h2>
                  <p>© All rights reserved</p>
                  <p><a href='/impressum'>Impressum</a></p>
          </div>
        </div>
    
    </>
  ); 
}

export default Footer;  
