import { Player } from "@lordicon/react"
import styles from "./When.module.css"
import { useEffect, useRef } from "react"
import yin from "../../icons/wired-lineal-441-yin-yang.json"
import calm from "../../icons/wired-lineal-628-yoga-female.json"
import ok from "../../icons/wired-lineal-1763-balance.json"
import UiverseButton from "../buttons/Button"
import ScrollReveal from "scrollreveal"
const When=(props)=>{
    const playerRef1=useRef(null)
    const playerRef2=useRef(null)
    const playerRef3=useRef(null)

    const handleComplete1 = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const handleComplete2 = () => {
        setTimeout(() => {
          playerRef2?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      const handleComplete3 = () => {
        setTimeout(() => {
          playerRef3?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };

    useEffect(()=>{

        playerRef1?.current?.playFromBeginning();
        playerRef2?.current?.playFromBeginning();
        playerRef3?.current?.playFromBeginning();


        
        ScrollReveal().reveal(`.${styles.wrap}`, {
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
    <div className={styles.header}>מתי בפעם האחרונה..</div>
    <div className={styles.wrapper}>
      <div className={styles.wrap} itemScope itemType="https://schema.org/Emotion">
        <div className={styles.title}>הרגשת שחרור רגשי ?</div>
        <div className={styles.icon}><Player ref={playerRef1} size="100%" onComplete={handleComplete1} icon={calm} /></div>
        <div className={styles.description}>מעין תחושה שאתה מרחף על ענן שכולו טוב?
          עצם הבאת התת מודע שלך לאופן מודע מעניק שחרור רגשי עמוק</div>
      </div>

      <div className={styles.wrap} itemScope itemType="https://schema.org/EnergyBalance">
        <div className={styles.title}>הרגשת מאוזנת ומלאת אנרגיה ?</div>
        <div className={styles.icon}><Player ref={playerRef2} size="100%" onComplete={handleComplete2} icon={yin} /></div>
        <div className={styles.description}>בסשן אנחנו מבצעים איזון צאקרות עמוק, בו את חווה ריפוי של מרכזי האנרגיה בגופך שבאים לידי ביטוי בכל רגע בחייך.
          צ’אקרות מאוזנות מסייעות לנו להגשים את ייעודנו בעולם</div>
      </div>

      <div className={styles.wrap} itemScope itemType="https://schema.org/Event">
        <div className={styles.title}>התמודדת נכון עם אירועים ?</div>
        <div className={styles.icon}><Player ref={playerRef3} size="100%" onComplete={handleComplete3} icon={ok} /></div>
        <div className={styles.description}>הצלחה לפרש אירועים בחייך בצורה נכונה ולא לתת להם להשפיע על סדר היום שלך</div>
      </div>
    </div>
    <div className={styles.explain}>הדרך לשחרור חסמים מתבצעת <div className={styles.bold}>בתוך התת מודע והלא מודע שלנו</div> בהם אנו משחררים מהשורש את האמונות החוסמות, ומטמיעים במקומן אמונות חדשות, בריאות, תומכות ומקדמות.
      שינוי זה – שחרור המיותר והטמעת התומך, יוצרים מעין תכנות חדש בתת-המודע, פרדיגמה חדשה המכילה בתוכה את האמונה החדשה, ומכאן ואילך המטופל מתנהל בטבעיות מתוך האמונה החדשה.
      השינוי בתכנות מביא לשינויים משמעותיים ומרחיקי לכת במציאות החיים, בכל תחומי החיים, ובפרק זמן קצר.
      כך מתאפשר ריפוי רגשי ופרקטי.</div>

    <UiverseButton />
  </>

}

export default When