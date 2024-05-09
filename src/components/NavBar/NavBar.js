import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
 import logo from "../../images/shoval.png"
import {Link as ScrollLink} from "react-scroll"
import UiverseButton from '../buttons/Button';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [width, setWidth] = useState(window.innerWidth); 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
        document.body.style.overflow = 'hidden';
    } 
};
    const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };


  const closeMenu = () => {
    setIsOpen(false);
  
        document.body.style.overflowY = 'auto';

  };

  useEffect(() => {
   
    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return (
    <>
      <nav className={scrolled ? styles.floatingNav :styles.navbar}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            {/* <img className={styles.image} src={logo} alt="שובל דעבול לוגו"/> */}
            <UiverseButton/>
          </div>
        </div>
       {width<850 && <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>}
      
         {width>=850 && <div className={styles.row}>
          <ScrollLink to="השירותים שלי" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>השירותים שלי</div></ScrollLink>
          <ScrollLink to="שאלות נפוצות" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>שאלות נפוצות</div></ScrollLink>
          <ScrollLink to="לקוחות ממליצות" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>לקוחות ממליצות</div></ScrollLink>
          <ScrollLink to="הישגים" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>הישגים</div></ScrollLink>
            </div>}
      
        <div className={`${styles.navLinks} ${isOpen ? styles.openLinks : ''}`}>
          <div className={styles.closeButton} onClick={closeMenu}>
            &times;
          </div>
          <ul>
    
            <li><ScrollLink  onClick={closeMenu} to="השירותים שלי" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>השירותים שלי</div></ScrollLink></li>
            <li><ScrollLink  onClick={closeMenu} to="שאלות נפוצות" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>שאלות נפוצות</div></ScrollLink></li>
            <li><ScrollLink  onClick={closeMenu} to="לקוחות ממליצות" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>לקוחות ממליצות</div></ScrollLink></li>
            <li><ScrollLink   onClick={closeMenu} to="הישגים" smooth={true} duration={1000} offset={-100}><div className={styles.navLink}>הישגים</div></ScrollLink></li>
            <div className={styles.logo}>
            <img className={styles.navImage} src={logo} alt="שובל דעבול לוגו"/>
          </div>
          </ul>
        </div>
      </nav>
      {isOpen && (
        <div className={`${styles.overlay} ${styles.openOverlay}`}></div>
      )}
    </>
  );
};

export default NavBar;