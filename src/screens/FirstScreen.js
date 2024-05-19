import styles from "./FirstScreen.module.css";
import shoval from "../images/שובל דעבול.png";

const FirstScreen = (props) => {
  return (
    <>
      <div itemScope itemType="https://schema.org/Person">
      
        <div className={!props.scrolled ? styles.center : styles.centerFixed}><img className={styles.image} src={shoval} alt="שובל דעבול" itemProp="image" /></div>
        <h1 className={styles.title} itemProp="name">שובל דעבול</h1>
        <h2 id="job" className={styles.job} itemProp="jobTitle">•ריפוי דרך תת המודע • שחרור אמונות מגבילות • נומרולוגיה • הכוונה באמצעות טארוט • ריפוי על ידי מגע אנרגטי</h2>
        <div className={styles.quate} itemProp="description">"מגיל קטן שזה היה חלק ממני, גדלתי וחיפשתי את המשמעות לחיים שלי, את מה שימלא אותי מבפנים.
הגעתי לרוחניות והתחלתי ללמוד על התחום - זה הרים אותי מהמקום הכי נמוך שיש למקום שאני נמצאת בו היום והחלטתי שאם זה שינה לי את החיים - זה יכול לשנות גם את החיים שלך"</div>
      </div>
    </>
  );
}

export default FirstScreen;
