import { useEffect, useRef } from "react";
import styles from "./From.module.css";
import { Player } from "@lordicon/react";
import heart from "../../icons/wired-lineal-20-love-heart.json"
const From2 = () => {
    const playerRef1 =useRef(null)
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };

      useEffect(()=>{
        playerRef1?.current?.playFromBeginning(); 
      },[])
return <>


<div className={styles.title}>כמה מילים מליבי אליכם</div>
<div className={styles.description}>חשוב לי להדגיש שאתה מגיע למרחב של חופש מוחלט עבורך שיהווה את האפשרות להביא את עצמך בצורה טבעית ואמיתית. זהו מרחב נטול שיפוטיות מלא בקבלה, ואהבה ללא תנאי. אני כאן להחזיק מרחב ריפוי ובהירות תוך כדי ניקוי מה שמוחזק באופן לא מודע והעצמה אישית ליצירת החדש בחייך. 
ביחד, נפוגג ונשחרר את מה שחוסם ועומד בדרך, בינך לבין בחירה חדשה ומימוש שלה בפועל. נסלול יחד דרך לריפוי, העצמה, שינוי והגשמה – הרבה יותר בקלות מאי פעם!
 יש בי אמון מלא בך וביכולת שלך לשנות הכל ואשמח לתרום במסעך חזרה הביתה לעצמך.</div>
<div className={styles.icon}><Player ref={playerRef1} size="100%" onComplete={handleComplete} icon={heart} /></div>
</>

}
export default From2