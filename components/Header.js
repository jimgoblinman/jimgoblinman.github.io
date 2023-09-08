import React, {useState, useEffect} from 'react';
import styles from '../styles/Header.module.css';
import { Link } from 'react-scroll';


function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Add state for mobile menu


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

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle(styles['no-scroll'], !isMobileMenuOpen);
  };

  return (
    < >
      <header className={`${styles.header} ${isHeaderVisible ? '' : styles.hidden}`}>
          <div className={styles.mobile}>
            <img
                src='assets/hamburger_icon.png'
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu on click
                alt='Menu'
              />        
          </div>
          <div className={styles.griditem}>
            <div className={styles.imageContainer}>
              <img src="assets/placeholder.png" alt="Image description" className={styles.roundImage}/>
            </div>
          </div>

          <div className={`${styles.griditem} ${styles.myName}`}><h2>James Vining</h2></div>
          
        <div className={styles.griditem}></div>

          <div className={styles.griditem}><h1><Link to="about" smooth={true}>About me</Link></h1></div>
          <div className={styles.griditem}><h1><Link to="hit_me_up" smooth={true}>Hit me up</Link></h1></div>
          <div className={styles.griditem}><h1><a href="/certificates">Certificates</a></h1></div>
          <div className={styles.griditem}><h1><a href="/login">Login</a></h1></div>
          <div className={styles.griditem}></div>
      </header>
      <div className={isMobileMenuOpen ? styles['no-scroll'] : ''}>
        <div
            className={styles['mobile-menu']}
            style={{ display: isMobileMenuOpen ? 'grid' : 'none' }} // Set display property using inline style
          >
          <div className={styles['x-container']} onClick={handleMobileMenuToggle}>
              <img src='assets/x_button.png' alt='Close' />
          </div>
          <div className={styles['icon-container']}>
            <img src="assets/placeholder.png" alt="Image description" className={styles.roundImage} />
          </div>
          {/*
            <div className={styles['mobile-menu-item']}>
            <h1>
              <Link to='about-mobile' smooth={true} onClick={handleMobileMenuToggle}>
                About
              </Link>
            </h1>
          </div>
          <div className={styles['mobile-menu-item']}>
            <h1>
              <Link to='hit_me_up' smooth={true} onClick={handleMobileMenuToggle}>
                Hit me up
              </Link>
            </h1>
          </div>
          */}
          <div className={styles['mobile-menu-item']}>
            <h1>
              <a href='/'>
                Home
              </a>
            </h1>
          </div>
          <div className={styles['mobile-menu-item']}>
            <h1>
              <a href='/login' onClick={handleMobileMenuToggle}>
                Login
              </a>
            </h1>
          </div>
          <div className={styles['mobile-menu-item']}>
            <h1>
              <a href='/certificates' onClick={handleMobileMenuToggle}>
                Certificates
              </a>
            </h1>
          </div>
        </div>
      </div>
        
      </>
  );
}

export default Header;  
