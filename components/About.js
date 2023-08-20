import React from 'react';
import styles from '../styles/About.module.css';


function About() {
  return (
    <>
    <div id="about" className={styles['about-box']}>
      <div>
        <h2>About</h2>
        <p>I was born in Zurich in the year 2005 and went there up to sixth grade to primary school, where my mother lives. My mother, my stepfather and two of my other sisters live in Zurich. For secondary school I moved to Bern where my father, my stepmother and two of my other sisters live. Yes, I really have four sisters. I speak fluent English and German as my father is British and my mother is Swiss.
        <br></br><br></br>
        Currently I attend an IT school in Bern. I like the school very much and I was able to find friends quickly. I enjoy the lessons very much because the teachers are always making it very interesting. I have a lot of different hobbies. One of them is IT, as I like working with PCs and I like programming. My dream job is to become a software developer, partly due to my Stepfather, because he is a software developer, who aroused my interest in this domain. In my free time I like doing sport. I currently attend karate lessons and I like playing different ball sports.</p>
    </div>
    <img src="assets/placeholder.png" alt="Image description" />
    </div>

    <div id="about" className={styles['about-box-mobile']}>
    <img src="assets/placeholder.png" alt="Image description" />
      <div className={styles.text}>
        <h2>About</h2>
        <p>I was born in Zurich in the year 2005 and went there up to sixth grade to primary school, where my mother lives. My mother, my stepfather and two of my other sisters live in Zurich. For secondary school I moved to Bern where my father, my stepmother and two of my other sisters live. Yes, I really have four sisters. I speak fluent English and German as my father is British and my mother is Swiss.
        <br></br><br></br>
        Currently I attend an IT school in Bern. I like the school very much and I was able to find friends quickly. I enjoy the lessons very much because the teachers are always making it very interesting. I have a lot of different hobbies. One of them is IT, as I like working with PCs and I like programming. My dream job is to become a software developer, partly due to my Stepfather, because he is a software developer, who aroused my interest in this domain. In my free time I like doing sport. I currently attend karate lessons and I like playing different ball sports.</p>
    </div>
    </div>
    </>
  );
}

export default About;