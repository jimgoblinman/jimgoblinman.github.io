import React from 'react';
import styles from '../styles/ProjectsMobile.module.css';

function Projects() {
  return (
    <div className={styles['project-description']}>
      <div className={styles['project']}>
        <h2>SkyCraft</h2>
        <p>
          During a rigorous school project week, my partner Nicolas Thöni Castillo and I collaborated on creating an Android Application. Our app utilized the Hypixel API to retrieve Game Data, which we parsed and presented as both general and player statistics.
        </p>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles['project']}>
        <h2>JCraft</h2>
        <p>
          With colleagues Alessandro Röthenmund and Jakob Jörns, we created a Minecraft-inspired clone called JCraft. This unique project operates in web browsers using Three.js.
        </p>
        <div></div>
      </div>
      <div className={styles['project']}>
        <h2>NoteHub</h2>
        <p>
          While at school, I developed a compact Python task app for console use. It handles essential tasks and uses integrated MongoDB from MongoDB Atlas. I'm exploring a front-end interface expansion.
        </p>
        <div></div>
      </div>
    </div>
  );
}

export default Projects;
