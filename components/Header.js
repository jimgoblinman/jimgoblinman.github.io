import React from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

function Header() {
  return (
    <header className={styles.header}>
        
        <div className={styles.griditem}>
          <div className={styles.roundImage}>
              <Image
                src="/assets/placeholder.png"
                alt="Description of the image"
                width={50}
                height={50}
                
              />
          </div>
        </div>

        <div class={styles.griditem}><p>James Vining</p></div>
        
       <div class={styles.griditem}></div>
        
      
            <div class={styles.griditem}><p>About</p></div>
            <div class={styles.griditem}><p>Journey</p></div>
            <div class={styles.griditem}><p>Hit me up</p></div>
            <div class={styles.griditem}><p>Projects</p></div>
            <div class={styles.griditem}></div>
    </header>
  );
}

export default Header;
