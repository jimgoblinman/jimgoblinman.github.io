import React from 'react';
import styles from '../styles/Welcome.module.css'

function Welcome() {
  
  
  return (
    <>
    <div className={styles.WelcomeBox}>
    <div className={styles.Welcome}>
    <h1 className={styles.WelcomeText}>Welcome, my friend! Embark on a profound journey through my portfolio.</h1>
    </div>

    <div className={styles.Projects}>
      <div className={styles['Project-content']}>
      <h1>Projects</h1>
      <ul className={styles['Project-list']}>
        <li>SkyCraft</li>
        <li>JCraft</li>
        <li>NoteHub</li>
      </ul>
      </div>
    </div>

    </div>
    </>
  );
}

export default Welcome;
