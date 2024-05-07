import Achivments from "../components/Achivments/Achivments"
import UiverseButton from "../components/buttons/Button"
import styles from "./ThirdScreen.module.css"

const ThirdScreen=()=>{


return <>
<div className={styles.title} id="הישגים">עד כה השגתי ללקוחות שלי</div>
<div className={styles.row}>
  <Achivments achivment="שחרור חרדה ממקומות הומי אדם"/>
<Achivments achivment="שחרור כעסים בין אחיות והשלמה אחרי 5 שנים"/>
  <Achivments achivment="סריקה גופנית- זיהוי תחילה של מחלה"/>
</div>

<div className={styles.row}>
  <Achivments achivment="ריפוי גידול סרטני על ידי אנרגיה"/>
<Achivments achivment="הצלחה בכניסה להריון אחרי שנים ללא הצלחה"/>
  <Achivments achivment="ריפוי וסליחה עמוקה בנושא בגידה- הצלחה בחזרת הקשר"/>
</div>

<div className={styles.row}>
  <Achivments achivment="ריפוי פנימי שהוביל לזוגיות רצינית עם גבר שהיה נוכח בחיי האישה שנים ללא הגדרה"/>
<Achivments achivment="צמיחה כלכלית משגשגת"/>
  <Achivments achivment="מעבר בין שכירה לעצמאית תוך הגשמת חלום"/>
</div>
<UiverseButton/>
</>


}
export default ThirdScreen