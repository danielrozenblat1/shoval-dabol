import styles from "./Achivments.module.css"
import medal from "../../icons/wired-lineal-434-prize-padge-ribbon (1).json"
import {Player} from "@lordicon/react"

import { useEffect, useRef } from "react"
const Achivments=(props)=>{
    const playerRef1=useRef(null);


    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 3000); // play again after 2.5 seconds
      };

      useEffect(()=>{
playerRef1?.current?.playFromBeginning()
      })

return <>

<div className={styles.wrap}>
    <div className={styles.icon}><Player ref={playerRef1} size="100%" onComplete={handleComplete} icon={medal}/></div>
    <h2 className={styles.description}>{props.achivment}</h2>
</div>

</>

}
export default Achivments