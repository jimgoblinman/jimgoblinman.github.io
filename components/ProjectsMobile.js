import React from 'react';
import styles from '../styles/ProjectsMobile.module.css';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; // Import the popup styles

function Projects() {
  return (
    <div id='projects' className={styles['project-description']}>
      <div className={styles['project']}>
        <h2>SkyCraft</h2>
        <p>
        During a rigorous school project week, my colleague and I collaborated on creating an Android Application. Our app utilized the Hypixel API to retrieve Game Data, which we parsed
        and presented as both general and player statistics.
        </p>
      </div>
      <div className={styles['footer-bar']}>
          <a href='https://developer.android.com/studio' target="_blank" rel="noopener noreferrer">Android</a>
          <a href='https://github.com/jimgoblinman/SkyCraft' target="_blank" rel="noopener noreferrer">Github</a>
          <div>
              <Popup
                trigger={<div className={styles['c-item']}><a>Abstract</a></div>}
                modal
                contentStyle={{
                  backgroundColor:'1f1f1f',
                  padding: 0,
                }}
              >
                {close => (
                    <embed src="certificates/SkyCraft_Abstract.pdf" type="application/pdf" width="100%" height="500px"/>
                )}
              </Popup>
          </div>
        
      </div>
      <div className={styles['project']}>
        <h2>JCraft</h2>
        <p>
        Together with my colleagues, we created a Minecraft-inspired clone called JCraft. This unique project operates in web browsers using Three.js.
        </p>
        <div className={styles['footer-bar']}>
          <a href='https://threejs.org/' target="_blank" rel="noopener noreferrer">Three.js</a>
          <a href='https://github.com/Antgenix1/JCraft' target="_blank" rel="noopener noreferrer">Github</a>
          <div>
              <Popup
                trigger={<div className={styles['c-item']}><a>Project</a></div>}
                modal
                contentStyle={{
                  backgroundColor:'1f1f1f',
                  padding: 0,
                }}
              >
                {close => (
                    <embed src="certificates/JCraft_Abstract.pdf" type="application/pdf" width="100%" height="500px"/>
                )}
              </Popup>
          </div>
      </div>
      </div>
      <div className={styles['project']}>
        <h2>NoteHub</h2>
        <p>
        While at school, I developed a compact Python task app for console
        use. It handles essential tasks and uses integrated MongoDB from
        MongoDB Atlas.
        I'm exploring a front-end interface expansion.
        </p>
        <div className={styles['footer-bar']}>
          <a href='https://pymongo.readthedocs.io/en/stable/' target="_blank" rel="noopener noreferrer">PyMongo</a>
          <a href='https://github.com/jimgoblinman/NoteHub' target="_blank" rel="noopener noreferrer">Github</a>
          <div>
                <Popup
                trigger={<div className={styles['c-item']}><a>Abstract</a></div>}
                modal
                contentStyle={{
                  backgroundColor:'1f1f1f',
                  padding: 0,
                }}
              >
                {close => (
                    <embed src="certificates/NoteHub_Abstract.pdf" type="application/pdf" width="100%" height="500px"/>
                )}
              </Popup>
              </div>
      </div>
      </div>
    </div>
  );
}

export default Projects;