import React from 'react';
import styles from '../styles/Footer.module.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; // Import the popup styles

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
                  <div className={styles.Impressum}>
                  <Popup
                    trigger={<div className={styles['c-item']}><a>Impressum</a></div>}
                    modal
                    contentStyle={{
                      backgroundColor: '#1f1f1f', // Set the background color here
                      padding: 0,
                    }}
                  >
                    {close => (
                      <div className={styles.popupContent}> {/* Use popupStyles for styling */}
                        <h2>Impressum</h2>
                        <p>
                          This website is the personal portfolio of James Vining, an ongoing developer.
                        </p>
                        <h3>Website Owner</h3>
                        <p>James Vining</p>
                        <p>Burgunderstrasse 91</p>
                        <p>Phone: +41 79 728 06 59</p>
                        <p>Email: jim.vining@outlook.com</p>

                        <h3>Copyright</h3>
                        <p>
                          © 2023 James Vining. All rights reserved. This website and its content are protected by copyright law. No part of this website may be reproduced without prior written permission.
                        </p>
                      </div>
                    )}
                  </Popup>

                    </div>
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
                  <div className={styles.Impressum}>
                  <Popup
                    trigger={<div className={styles['c-item']}><a>Impressum</a></div>}
                    modal
                    contentStyle={{
                      backgroundColor: '#1f1f1f', // Set the background color here
                      padding: 0,
                    }}
                  >
                    {close => (
                      <div className={styles.popupContent}> {/* Use popupStyles for styling */}
                        <h2>Impressum</h2>
                        <p>
                          This website is the personal portfolio of James Vining, an ongoing developer.
                        </p>
                        <h3>Website Owner</h3>
                        <p>James Vining</p>
                        <p>Burgunderstrasse 91</p>
                        <p>Phone: +41 79 728 06 59</p>
                        <p>Email: jim.vining@outlook.com</p>

                        <h3>Copyright</h3>
                        <p>
                          © 2023 James Vining. All rights reserved. This website and its content are protected by copyright law. No part of this website may be reproduced without prior written permission.
                        </p>
                      </div>
                    )}
                  </Popup>

                    </div>
          </div>
        </div>
    
    </>
  ); 
}

export default Footer;  
