import { useRef } from "react";
import styles from "./Box.module.css"
import {Player} from "@lordicon/react"
const Box=(props)=>{

    const playerRef1=useRef(null)
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const containerStyle = {
        backgroundImage: `url(${props.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
   
        height:300,
        position:"relative",
        width:300,
       
        boxShadow:"inset 0 0 20px 2px rgba(255, 228, 196, 0.5),inset 0 0 30px 2px rgba(139, 69, 19, 0.5),inset 0 0 40px 2px rgba(255, 255, 255, 0.5)",
        clipPath:' polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)'
      };
    return <>
    <div style={containerStyle}>
    <h1 className={styles.option}>{props.option}</h1>
      <div className={styles.icon}><Player ref={playerRef1} size="100%" onComplete={handleComplete} icon={props.icon}/></div>
     
    </div>
    </>
}
export default Box