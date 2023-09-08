import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/Hit-me-up.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



const EMAIL_JS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
emailjs.init(EMAIL_JS_USER_ID);

function Hit_me_up() {
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [nameValid, setNameValid] = useState('empty');
  const [emailValid, setEmailValid] = useState('empty');
  const [messageValid, setMessageValid] = useState('empty');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Update validation status for the corresponding field
    if (name === 'user_name') {
      if (value.trim().length < 2) {
        setNameValid('false');
      } else {
        setNameValid('true');
      }
    } else if (name === 'user_email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setEmailValid('false');
      } else {
        setEmailValid('true');
      }
    } else if (name === 'message') {
      if (value.trim().length < 2) {
        setMessageValid('false');
      } else {
        setMessageValid('true');
      }
    }
  };

  const form = useRef();

  const validateInput = () => {
    let isValid = true;

    if (nameValid === 'false' || emailValid === 'false' || messageValid === 'false' || nameValid === 'empty' || emailValid === 'empty' || messageValid === 'empty') {
      isValid = false;
    }

    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateInput()) {
      console.log(validateInput()); //Works like a charm
      console.log("nameValid: "+nameValid);
      console.log("emailValid: "+emailValid);
      console.log("messageValid: "+messageValid);

      toast.error('Input not Valid', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      return;
    }

    const currentTime = Date.now();
    if (localStorage.getItem('lastSentTimeStamp') && currentTime - parseInt(localStorage.getItem('lastSentTimeStamp')) < 5 * 60 * 1000) {
        toast.error('Too soon to send another email.', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        console.log('Too soon to send another email.');
      return;
    }
    
    toast.info('Loading', {
      position: toast.POSITION.BOTTOM_RIGHT
    })
    localStorage.setItem('lastSentTimeStamp', Date.now().toString());
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current).then(
      (result) => {
        console.log(result.text);
        toast.success('Email sent successfully!', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      },
      (error) => {
        console.log(error.text);
        toast.error('Error sending email.', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
    );
  };

  function getName(nameValid, inputValue) {
    if (nameValid=='true') {
      return styles['isValid']; // Valid input
    } else if (inputValue.trim() === '') {
      return `${styles['isEmpty']}`; // Empty input
    } else if (nameValid =="false"){
      return `${styles['isFalse']}`; // Invalid input
    }
  }
  function getEmail(emailValid, inputValue) {
    if (emailValid=='true') {
      return styles['isValid']; // Valid input
    } else if (inputValue.trim() === '') {
      return `${styles['isEmpty']}`; // Empty input
    } else if (emailValid =="false"){
      return `${styles['isFalse']}`; // Invalid input
    }
  }
  function getMessage(messageValid, inputValue) {
    if (messageValid=='true') {
      return styles['isValid']; // Valid input
    } else if (inputValue.trim() === '') {
      return `${styles['isEmpty']}`; // Empty input
    } else if (messageValid =="false"){
      return `${styles['isFalse']}`; // Invalid input
    }
  }
  
  return (
    <>
      <div id='hit_me_up' className={styles['Hit-me-up']}>
        <div className={styles['text-box']}>
          <div>
          <h2>Hit me up!</h2>
          <p>🖐️Hi there! If you've got any questions about me or my website, or if you'd like to share any helpful feedback, feel free to drop me a line using the form below. I'm always open to hearing from fellow developers, tech enthusiasts and fans just like you! 😊👨‍💻<br /><br />
          By the way, did you hear the one about the programmer who walked into a bar and ordered 1.0000001 root beers? The bartender replied, "I'll have to charge you extra – that's a 'real' root beer!" 🍻😄 
<br /><br />
          Anyway, jokes aside, I'm not just your regular developer; I take pride in being a problem-solving wizard who can turn coding challenges into enjoyable adventures. So why not reach out and let's have a delightful conversation about IT and beyond? I’m looking forward to hearing from you soon. 🚀📧</p>
            </div>
        </div> 
        <div>
          <form ref={form} className={styles.formContainer} onSubmit={sendEmail}>
            <div className={styles['name-email']}>
              <input type="text" name="user_name" value={formData.user_name} placeholder='Name' onChange={handleChange} className={getName(nameValid, formData.user_name)}/><br />
              <input type="text" name="user_email" value={formData.user_email} placeholder='Email' onChange={handleChange} className={getEmail(emailValid, formData.user_email)}/><br />
            </div>
            <div className={styles['name-email-mobile']}>
              <input type="text" name="user_name" value={formData.user_name} placeholder='Name' onChange={handleChange} className={getName(nameValid, formData.user_name)}/><br />
            </div>
            <div className={styles['name-email-mobile']}>
              <input type="text" name="user_email" value={formData.user_email} placeholder='Email' onChange={handleChange} className={getEmail(emailValid, formData.user_email)}/><br />
            </div>
            <textarea
              name="message"
              value={formData.message}
              placeholder='Message'
              onChange={handleChange}
              className={getMessage(messageValid, formData.message)} 
              />
            <br />
            <button type='submit'>Hit me up!</button>
          </form>
        </div>
      </div>
      <div className={styles.Toast}>
        <ToastContainer position="bottom-right"/>
      </div>
    </>
  );
}

export default Hit_me_up;
