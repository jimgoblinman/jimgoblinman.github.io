import React, {useState, useEffect} from 'react';
import styles from '../styles/Header.module.css';
import { Link } from 'react-scroll';


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
            
        <div className={styles.griditem}><h1><Link to="about" smooth={true}>About</Link></h1></div>
        <div className={styles.griditem}><h1><Link to="journey" smooth={true}>Journey</Link></h1></div>
        <div className={styles.griditem}><h1><Link to="hit_me_up" smooth={true}>Hit me up</Link></h1></div>
        <div className={styles.griditem}><h1><Link to="certificats" smooth={true}>Certificats</Link></h1></div>
        <div className={styles.griditem}></div>
               
    </header>
  );
}

export default Header;  
