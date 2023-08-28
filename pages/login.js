import { useState } from 'react';
import styles from '../styles/login.module.css';
import CryptoJS from 'crypto-js';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const publicKey = '1234567890abcdef'; // Replace with your public key

  const handleLogin = async () => {
    // Simulated fixed login credentials
    const correctUsernameHash = 'b0e0ec7fa0a89577c9341c16cff870789221b310a02cc465f464789407f83f377a87a97d635cac2666147a8fb5fd27d56dea3d4ceba1fc7d02f422dda6794e3c';
    const correctPasswordHash = '921412f4b8860a2175db0264a391f48c6d3e53bdd683159975ee9a6091d77b56b41bec0e1e01f4920313adffad2d6f1e5dbfccea11ab3e7521a4289835c8518b';

    // Simulate SHA-512 hashing
    const hashedUsername = CryptoJS.SHA512(username).toString(CryptoJS.enc.Hex);
    const hashedPassword = CryptoJS.SHA512(password).toString(CryptoJS.enc.Hex);

    if (hashedUsername === correctUsernameHash && hashedPassword === correctPasswordHash) {
      console.log('Login successful');
      
      // Store hashed values in localStorage
      localStorage.setItem('usernameHash', hashedUsername);
      localStorage.setItem('passwordHash', hashedPassword);
      console.log(localStorage.getItem('usernameHash'));
      console.log(localStorage.getItem('passwordHash')); 


      // Redirect or perform other actions after successful login
    } else {
      console.log('Login failed');
    }
  };

  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.login}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
