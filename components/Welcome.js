import React, { useState } from 'react';
import styles from '../styles/Welcome.module.css';

import { useWindowWidth } from '../components/WindowWidth'; // Adjust the path
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; // Import the popup styles

function Welcome() {
  const [displayText, setDisplayText] = useState(
    'Welcome, my friend! Embark on a profound journey through my portfolio.'
  );
  const [selectedProject, setSelectedProject] = useState('');

  //const windowWidth = useWindowWidth(); //Check the px's of the window width
  
  const handleProjectClick = (projectName) => {
    if (selectedProject === projectName) {
      setSelectedProject('');
      setDisplayText(
        'Welcome, my friend! Embark on a profound journey through my portfolio.'
      );
    } else {
      setSelectedProject(projectName);

      if (projectName === 'SkyCraft') {
        setDisplayText(
          <div className={styles.projectDescription}>
            <div>
              During a rigorous school project week, my colleague and I collaborated on creating an Android Application.
            </div>
            <div>
              Our app utilized the Hypixel API to retrieve Game Data, which we parsed
              and presented as both general and player statistics.
            </div>
            <div className={styles['footer-bar']}>
              <div>
                <a href='https://developer.android.com/studio' target="_blank" rel="noopener noreferrer">Android Studio</a>
              </div>
              <div>
                <a href='https://github.com/' target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
              <Popup
                trigger={<div className={styles['c-item']}><a>Project Abstract</a></div>}
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
          </div>
        );
      } else if (projectName === 'JCraft') {
        setDisplayText(
          <div className={styles.projectDescription}>
            <div>
            Together with my colleagues, we created a Minecraft-inspired clone called JCraft. This unique project operates in web browsers using Three.js.
            </div>
            <div className={styles['footer-bar']}>
              <div>
                <a href='https://threejs.org/' target="_blank" rel="noopener noreferrer">Three.js</a>
              </div>
              <div>
                <a href='https://github.com/Antgenix1/JCraft' target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
              <Popup
                trigger={<div className={styles['c-item']}><a>Project Abstract</a></div>}
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
        );
      } else if (projectName === 'NoteHub') {
        setDisplayText(
          <div className={styles.projectDescription}>
            <div>
              While at school, I developed a compact Python task app for console
              use. It handles essential tasks and uses integrated MongoDB from
              MongoDB Atlas.
              I'm exploring a front-end interface expansion.
            </div>
            <div className={styles['footer-bar']}>
              <div>
                <a href='https://pymongo.readthedocs.io/en/stable/' target="_blank" rel="noopener noreferrer">PyMongo</a>
              </div>
              <div>
                <a href='https://github.com/jimgoblinman/NoteHub' target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
                <Popup
                trigger={<div className={styles['c-item']}><a>Project Abstract</a></div>}
                modal
                contentStyle={{
                  backgroundColor:'1f1f1f',
                  padding: 0,
                }}
              >
                {close => (
                    <embed src="certificates/NoteHub.pdf" type="application/pdf" width="100%" height="500px"/>
                )}
              </Popup>
              </div>
            </div>
          </div>
        );
      } else {
        setDisplayText(
          'Welcome, my friend! Embark on a profound journey through my portfolio.'
        );
      }
    }
  };

  return (
    <>
      <div className={styles.WelcomeBox}>
        <div className={styles.Welcome}>
          <h1 className={styles.WelcomeText}>{displayText}</h1>
        </div>

        <div className={styles.Projects}>
          <div className={styles['Project-content']}>
            <h1>Projects</h1>
            <ul className={styles['Project-list']}>
              <li>
                <h3>
                  <a href="#" onClick={() => handleProjectClick('SkyCraft')}>
                    SkyCraft
                  </a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="#" onClick={() => handleProjectClick('JCraft')}>
                    JCraft
                  </a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="#" onClick={() => handleProjectClick('NoteHub')}>
                    NoteHub
                  </a>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
