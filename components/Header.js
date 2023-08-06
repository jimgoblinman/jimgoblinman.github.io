import React from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

function Header() {
  return (
    <header className={styles.header}>
        
        <div className={styles.griditem}>
          <div className={styles.imageContainer}>
              <Image
                className={styles.roundImage}
                src="/assets/placeholder.png"
                alt="Description of the image"
                width={36}
                height={36}
              />
          </div>
        </div>

        <div className={`${styles.griditem} ${styles.myName}`}><h2>James Vining</h2></div>
        
       <div className={styles.griditem}></div>
            
            <div className={styles.griditem}><h1><a href="#about">About</a></h1></div>
            <div className={styles.griditem}><h1><a href="#journey">Journey</a></h1></div>
            <div className={styles.griditem}><h1><a href="#hit_me_up">Hit me up</a></h1></div>
            <div className={styles.griditem}><h1><a href="#projects">Projects</a></h1></div>
            <div className={styles.griditem}></div>
               
    </header>
  );
}

export default Header;  
