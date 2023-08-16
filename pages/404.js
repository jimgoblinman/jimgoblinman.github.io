import Link from 'next/link';
import styles from '../styles/404.module.css';


function Custom404() {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a className={styles['link']} href="/">Go back to the homepage</a>
    </div>
  );
}

export default Custom404;
