import { useRef } from "react"
import styles from "./Ways.module.css"
import {Player} from "@lordicon/react"
const Ways=(props)=>{

    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
const playerRef1=useRef(null)

    return <>
    <div className={styles.flower}>
    <h1 className={styles.option}>{props.option}</h1>
  
     

    </div>
    
    </>
}
export default Ways