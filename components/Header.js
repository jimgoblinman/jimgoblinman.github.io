import React from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

function Header() {
  return (
    <header className={styles.header}>
        
        <div className={styles.griditem}>
              <Image
                className={styles.roundImage}
                src="/assets/placeholder.png"
                alt="Description of the image"
                width={36}
                height={36}
              />
           
        </div>

        <div class={styles.griditem}><p>James Vining</p></div>
        
       <div class={styles.griditem}></div>
      
            <div class={styles.griditem}><p><a href="about">About</a></p></div>
            <div class={styles.griditem}><p><a href="journey">Journey</a></p></div>
            <div class={styles.griditem}><p><a href="hit_me_up">Hit me up</a></p></div>
            <div class={styles.griditem}><p><a href="projects">Projects</a></p></div>
            <div class={styles.griditem}></div>
               
    </header>
  );
}

export default Header;  
