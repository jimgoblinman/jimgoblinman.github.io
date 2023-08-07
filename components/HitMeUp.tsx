import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/Hit-me-up.module.css';
import { useState } from 'react';

// Initialize EmailJS SDK with the user_id
const EMAIL_JS_USER_ID = 'G00MdxYKw4lc77zc9'
emailjs.init(EMAIL_JS_USER_ID);

function Hit_me_up() {
  console.log('REACT_APP_TEST: '+ process.env.REACT_APP_TEST);
  const SERVICE_ID = 'service_m13441p'
  const TEMPLATE_ID = 'template_apsnfu6'
  
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div id='hit_me_up' className={styles['Hit-me-up']}>
        <div className={styles['text-box']}>
          <h2>Hit me up!</h2>
          <p>Hello there! 🖐️ If you've got any questions about me or my website, or if you'd like to share some helpful feedback for my portfolio site, feel free to drop me a line using the form below. I'm always open to hearing from fellow developers and tech enthusiasts like you! 😊👨‍💻<br /><br />
            By the way, did you hear the one about the programmer who walked into a bar and ordered 1.0000001 root beers? The bartender replied, "I'll have to charge you extra – that's a 'real' root beer!" 🍻😄<br /><br />
            Anyway, jokes aside, I'm not just your regular developer; I take pride in being a problem-solving wizard who can turn coding challenges into enjoyable adventures. So why not reach out and let's have a delightful conversation about IT and beyond? Looking forward to hearing from you! 🚀📧</p>
        </div>
        <div>
          <form ref={form} className={styles.formContainer} onSubmit={sendEmail}>
            <div className={styles['name-email']}>
              <input type="text" name="user_name" value={formData.user_name} placeholder='Name' onChange={handleChange} /><br />
              <input type="email" name="user_email" value={formData.user_email} placeholder='Email' onChange={handleChange} /><br />
            </div>
            <textarea
              name="message"
              value={formData.message}
              placeholder='Message'
              onChange={handleChange} />
            <br />
            <button type='submit'>Hit me up!</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Hit_me_up;
