import styles from "./Achivments.module.css"
import medal from "../../icons/wired-lineal-434-prize-padge-ribbon (1).json"
import {Player} from "@lordicon/react"
import ScrollReveal from "scrollreveal"
import { useEffect, useRef } from "react"
const Achivments=(props)=>{

useEffect(()=>{
  ScrollReveal().reveal(`.${styles.icon}`, {
    duration: 1000,
    distance: "30px",
    origin: "top", // Start from the right side
    easing: "ease-out",
    reset:false,
    direction:"rtl",
    viewFactor: 0.2,
    interval: 300, // Delay between each element
    delay: 200, // Delay before the animation starts
    scale: 1, // Set scale to 1 or null
  });
  ScrollReveal().reveal(`.${styles.description}`, {
    duration: 1000,
    distance: "30px",
    origin: "bottom", // Start from the right side
    easing: "ease-out",
    reset:false,
    direction:"rtl",
    viewFactor: 0.2,
    interval: 300, // Delay between each element
    delay: 200, // Delay before the animation starts
    scale: 1, // Set scale to 1 or null
  });
},[])


    const playerRef1=useRef(null);


    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 3000); // play again after 2.5 seconds
      };

      useEffect(()=>{
playerRef1?.current?.playFromBeginning()
      })

return     <>
<div itemScope itemType="https://schema.org/Achievement">
  <div className={styles.wrap}>
    <div className={styles.icon}>
      <Player ref={playerRef1} size="100%" onComplete={handleComplete} icon={medal} />
    </div>
    <div className={styles.description} itemProp="description">
      {props.achivment}
    </div>
  </div>
</div>
</>

}
export default Achivments