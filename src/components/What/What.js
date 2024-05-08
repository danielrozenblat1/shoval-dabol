import { useEffect } from "react"
import styles from "./What.module.css"
import ScrollReveal from "scrollreveal"
const What=(props)=>{


    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.what}`, {
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

    },[])
    return  <>
    <div itemScope itemType="https://schema.org/Service">
        <div className={styles.what}>
            <div className={styles.buttonWrapper}>
                <button className={styles.button}>לקביעת תור</button>
            </div>
            <div className={styles.left}>
                <h1 className={styles.title} itemProp="name">{props.title}</h1>
                <div className={styles.description} itemProp="description">{props.description}</div>
            </div>
            <div className={styles.right}>
                <img className={styles.image} src={props.src} alt="שובל דעבול" itemProp="image" />
            </div>
        </div>
    </div>
</>


}
export default What