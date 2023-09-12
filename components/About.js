import React from 'react';
import styles from '../styles/About.module.css';


function About() {
  return (
    <>
    <div id="about" className={styles['about-box']}>
      <div>
        <h2>About me</h2>
        <p>I was born in Zurich in 2005 and grew up living with my mother throughout primary school up to the 6th grade, as my parents separated at a young age. I later moved to Berne for secondary school, to live with my father. This meant leaving behind my mother, stepfather and two of my sisters in Zurich. Thankfully, we are all on very great terms. I often get to visit them on weekends.
        <br></br><br></br>
          My father also remarried, bringing my stepmother and two more sisters into our lives. Yes, I really have four sisters! 
          <br></br><br></br>
          Growing up in a big patchwork family, I was raised in a quite the multicultural surrounding: Having a british father and a mother who is part Swiss, part Czech meant having various influences culturally as well as lingually. Besides being fluent in English and German, I also have an good ear for French as my Stepfather is Parisian, making my siblings from the Zurich household French speaking.
          <br></br><br></br>
          Academically, I'm currently attending an excellent IT school in Bern. The subjects and topics are interesting, the teachers engaging, and I have a good mix of colleagues and friends. I have a love for sports, which is visible by the many active hobbies I exercise such as karate and various ball games. However, my real passion has shown to be IT: I can spend hours working with PCs and programming without losing interest, as I have a genuine underlying curiousity for the topic. I’d like to follow in the footsteps of my Stepfather who has made a successful career as a software developer and awakened my interest in this domain.
        </p>
      </div>
    <img  className={styles['placeholder-image']} src="assets/placeholder.png" alt="Image description" />
    </div>

    <div id="about-mobile" className={styles['about-box-mobile']}>
    <img src="assets/placeholder.png" alt="Image description" className={styles['placeholder-image']}/>
      <div className={styles.text}>
      <h2>About me</h2>
        <p>I was born in Zurich in 2005 and grew up living with my mother throughout primary school up to the 6th grade, as my parents separated at a young age. I later moved to Berne for secondary school, to live with my father. This meant leaving behind my mother, stepfather and two of my sisters in Zurich. Thankfully, we are all on very great terms. I often get to visit them on weekends.
        <br></br><br></br>
          My father also remarried, bringing my stepmother and two more sisters into our lives. Yes, I really have four sisters! 
          <br></br><br></br>
          Growing up in a big patchwork family, I was raised in a quite the multicultural surrounding: Having a british father and a mother who is part Swiss, part Czech meant having various influences culturally as well as lingually. Besides being fluent in English and German, I also have an good ear for French as my Stepfather is Parisian, making my siblings from the Zurich household French speaking.
          <br></br><br></br>
          Academically, I'm currently attending an excellent IT school in Bern. The subjects and topics are interesting, the teachers engaging, and I have a good mix of colleagues and friends. I have a love for sports, which is visible by the many active hobbies I exercise such as karate and various ball games. However, my real passion has shown to be IT: I can spend hours working with PCs and programming without losing interest, as I have a genuine underlying curiousity for the topic. I’d like to follow in the footsteps of my Stepfather who has made a successful career as a software developer and awakened my interest in this domain.
        </p>
    </div>
    </div>
    </>
  );
}

export default About;