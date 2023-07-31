import React from 'react';
import styles from '../styles/Hit-me-up.module.css';
import { useState } from 'react';

function Hit_me_up() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can perform further actions with the form data here, such as sending it to a server.
  };
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
          <form method='post' className={styles.formContainer} onSubmit={handleSubmit}>
              <div className={styles['name-email']}>
              <input type="text" name="name" value={formData.name} placeholder='Name' onChange={handleChange} /><br />
              <input type="email" name="email" value={formData.email} placeholder='Email' onChange={handleChange} /><br />
              </div>
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder='Message'
                  onChange={handleChange}/>
                <br />
              <button type='submit'>Hit me up!</button>
          </form>
        </div>

      </div>
    
    </>
  );
}

export default Hit_me_up;  
