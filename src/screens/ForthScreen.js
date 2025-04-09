import styles from "./ForthScreen.module.css";
import shoval from "../images/שובל דעבול.png";
import Timeline from "../components/timeline/Steps";
import IconTextComponent from "../components/can/Can";
import heart from "../icons/wired-lineal-2069-street-view-hover-pinch.json"
import yoga from "../icons/wired-lineal-628-yoga-female-hover-pinch (2).json"
import woman from "../icons/wired-lineal-633-female-standing-hover-success (1).json"
import HishtalmutButton from "../components/HishtalmutButton/HishtalmutButton";
const ForthScreen = (props) => {
  return (
    <>
    <div className={styles.title}>מתי בפעם האחרונה הרגשת</div>
<Timeline/>
<div className={styles.title}>הרבה פעמים אנחנו מרגישים</div>
<div className={styles.description}>שאין לנו מספיק מהעושר ב-ע שאנחנו רוצים שאנחנו משיגים מטרות, עובדים קשה, צוברים הצלחות – ובכל זאת מרגישים ריקנות מבפנים, הסיבה לזה היא אף פעם לא באמת הכסף</div>
<div className={styles.title}>אלא, תמיד היא מתחילה מבפנים</div>
<div className={styles.description}>אני יודעת שעם עבודה פנימית את יכולה להגיע למצב שאת </div>
<div className={styles.row}>
    <IconTextComponent text="יוצרת חיים מלאים ועמוקים ולא עוד ריצה אחרי הצלחה חיצונית. " icon={woman}/>
    <IconTextComponent text="תצליחי לחבר בין רוחניות לעשייה יומיומית, ולפתח עוגן פנימי מול האתגרים" icon={yoga}/>
    <IconTextComponent text="לצאת ממעגל התסכול ולחיות מתוך שמחה פנימית אמיתית" icon={heart}/>
</div>
<div className={styles.title}>איך מתחילים?</div>
<div className={styles.description}>לחצי כאן להורדת המדריך – ותתחילי במסע שלך לעבר חיים עשירים מבפנים!
אל תדחי את זה – זה הרגע שלך לעשות שינוי!</div>
<HishtalmutButton  text="שובל אני רוצה את המדריך" link="https://pay.sumit.co.il/dzmvzh/e2i2lo/e2i2lp/payment/"/>
    </>
  );
}

export default ForthScreen;
