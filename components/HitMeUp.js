import React from 'react';
import styles from '../styles/Hit-me-up.module.css';


function Hit_me_up() {
  return (
    <>
      <div id='hit_me_up' className={styles['Hit-me-up']}>
        <div className={styles['text-box']}> {/* Inside here I will add some text maybe on why to text me or whatever*/}
        <div>
          <h2>Hit me up!</h2><p>Hello there! 🖐️ If you've got any questions about me or my website, or if you'd like to share some helpful feedback for my portfolio site, feel free to drop me a line using the form below. I'm always open to hearing from fellow developers and tech enthusiasts like you! 😊👨‍💻<br></br><br></br>

By the way, did you hear the one about the programmer who walked into a bar and ordered 1.0000001 root beers? The bartender replied, "I'll have to charge you extra – that's a 'real' root beer!" 🍻😄<br></br><br></br>

Anyway, jokes aside, I'm not just your regular developer; I take pride in being a problem-solving wizard who can turn coding challenges into enjoyable adventures. So why not reach out and let's have a delightful conversation about IT and beyond? Looking forward to hearing from you! 🚀📧</p>
        </div>
        </div>
        <div> {/* In here will be the form used*/}
          <form method='post' className={styles.formContainer}>
              <input type="text" name="name" value="John Doe"></input><br></br>
              <input type="email" name="email" value="john.doe@gmail.com"></input><br></br>
              <input type="text" name="subject" value="Subject"></input><br></br>
              <input type="text" name="message" value="Message"></input><br></br>
              <button type='submit'>Hit me up!</button>
          </form>
        </div>

      </div>
    
    </>
  );
}

export default Hit_me_up;  
