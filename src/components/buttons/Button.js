import React from 'react';
import styles from './Button.module.css';

const UiverseButton = () => {

  const handleButtonClick = () => {
    const phoneNumber = "+972509796362";
    // Set the message content
    const message ="היי שובל ,אני רוצה לשמוע ממך עוד על..";

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    // Construct the WhatsApp message URL with phone number and message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    // Open the URL in a new tab
    window.open(whatsappURL, "_blank");

  };
    
  return (
    <button className={styles.uiverse} onClick={handleButtonClick}>
      <div className={styles.wrapper}>
        <span>שובל,בואי נדבר</span>
        <div className={`${styles.circle} ${styles.circle12}`}></div>
        <div className={`${styles.circle} ${styles.circle11}`}></div>
        <div className={`${styles.circle} ${styles.circle10}`}></div>
        <div className={`${styles.circle} ${styles.circle9}`}></div>
        <div className={`${styles.circle} ${styles.circle8}`}></div>
        <div className={`${styles.circle} ${styles.circle7}`}></div>
        <div className={`${styles.circle} ${styles.circle6}`}></div>
        <div className={`${styles.circle} ${styles.circle5}`}></div>
        <div className={`${styles.circle} ${styles.circle4}`}></div>
        <div className={`${styles.circle} ${styles.circle3}`}></div>
        <div className={`${styles.circle} ${styles.circle2}`}></div>
        <div className={`${styles.circle} ${styles.circle1}`}></div>
      </div>
    </button>
  );
}

export default UiverseButton;
