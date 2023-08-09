import React, { useState } from 'react';
import styles from '../styles/Welcome.module.css';

function Welcome() {
  const [displayText, setDisplayText] = useState(
    'Welcome, my friend! Embark on a profound journey through my portfolio.'
  );
  const [selectedProject, setSelectedProject] = useState('');

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
              During a rigorous school project week, my partner Nicolas Thöni
              Castillo and I collaborated on creating an Android Application.
            </div>
            <div>
              Our app utilized the Hypixel API to retrieve Game Data, which we parsed
              and presented as both general and player statistics.
            </div>
          </div>
        );
      } else if (projectName === 'JCraft') {
        setDisplayText(
          <div className={styles.projectDescription}>
            <div>
              With colleagues Alessandro Röthenmund and Jakob Jörns, we created a
              Minecraft-inspired clone called JCraft.
            </div>
            <div>
              This unique project operates in web browsers using Three.js.
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
            </div>
            <div>
              I'm exploring a front-end interface expansion.
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
