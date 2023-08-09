import React, {useState, useEffect} from 'react';
import styles from '../styles/Header.module.css';


function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollPos = window.scrollY;
      const scrollingUp = prevScrollPos > currentScrollPos;

      setIsHeaderVisible(scrollingUp || currentScrollPos <= 100);
      setPrevScrollPos(currentScrollPos);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <header className={`${styles.header} ${isHeaderVisible ? '' : styles.hidden}`}>
        <div className={styles.griditem}>
          <div className={styles.imageContainer}>
            <img src="assets/placeholder.png" alt="Image description" className={styles.roundImage}/>
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
