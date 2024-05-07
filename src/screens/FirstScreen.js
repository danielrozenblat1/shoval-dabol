import styles from "./FirstScreen.module.css"
import shoval from "../images/שובל דעבול.png"

const FirstScreen=(props)=>{
   
return <>
{/* <div className={styles.open}>מרגישה שמשהו חוסם אותך מלהיות שלמה עם עצמך ולחיות את החיים שלך בצורה רגועה ? </div> */}
<div className={!props.scrolled ?styles.center : styles.centerFixed}><img className={styles.image} src={shoval}/></div>
<h1 className={styles.title}>שובל דעבול</h1>
<h2 id="job" className={styles.job}>ריפוי דרך התת מודע • שחרור אמונות • נומרולוגיה</h2>
<h3 className={styles.quate}>"הייתי בתחתית וחיפשתי משמעות לחיים , הגעתי לרוחניות והתחלתי ללמוד על התחום - זה הרים אותי מהמקום הכי נמוך שיש למקום שאני נמצאת בו היום והחלטתי שאם זה שינה לי את החיים - זה יכול לשנות גם את החיים שלך"</h3>

</>

}
export default FirstScreen