import React from 'react';
import styles from '../styles/About.module.css';


function About() {
  return (
    <>
    <div id="about" className={styles['about-box']}>
      <div>
        <h2>About</h2>
        <p>I was born in Zurich in 2005 and lived with my mother throughout my education, from primary school through 6th grade. My mother, stepfather and two of my sisters live in Zurich. I often visit them at weekends. For secondary school I moved to Bern where my father, stepmother and two of my other sisters live. Yes, I really have four sisters! I speak fluent English and German as my father is British and my mother is Swiss.
        <br></br><br></br>
          I'm currently attending an excellent IT school in Bern. The subjects and topics are interesting, the teachers engaging, and I have a good mix of colleagues and friends.I have many different hobbies such as attending karate lessons and I like playing ball sports. However, my real passion is IT, as I love working with PCs and programming. I’d like to follow in the footsteps of my Stepfather who has made a successful career as a software developer and awakened my interest in this domain.
        </p>
    </div>
    <img  className={styles['placeholder-image']} src="assets/placeholder.png" alt="Image description" />
    </div>

    <div id="about-mobile" className={styles['about-box-mobile']}>
    <img src="assets/placeholder.png" alt="Image description" />
      <div className={styles.text}>
        <h2>About</h2>
        <p>I was born in Zurich in 2005 and lived with my mother throughout my education, from primary school through 6th grade.
          My mother, stepfather and two of my sisters live in Zurich. I often visit them at weekends. For secondary school I moved to Bern where my father, stepmother and two of my other sisters live. Yes, I really have four sisters! I speak fluent English and German as my father is British and my mother is Swiss.
        <br></br><br></br>
        I'm currently attending an excellent IT school in Bern. The subjects and topics are interesting, the teachers engaging, and I have a good mix of colleagues and friends.I have many different hobbies such as attending karate lessons and I like playing ball sports. However, my real passion is IT, as I love working with PCs and programming. I’d like to follow in the footsteps of my Stepfather who has made a successful career as a software developer and awakened my interest in this domain.</p>
    </div>
    </div>
    </>
  );
}

export default About;