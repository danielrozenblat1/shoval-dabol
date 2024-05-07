import styles from "./SecondScreen.module.css"
import Box from "../components/box/Box"
import nomorology from "../images/numorology.png"
import tarot from "../images/tarot.png"
import teta from "../images/תטא.png"
import What from "../components/What/What"
import clinic from "../images/שובל דעבול קליניקה 2.png"
import clinic2 from "../images/שובל דעבול קליניקה 3.png"
import clinic3 from "../images/שובל דעבול קליניקה 4.png"
import clinic4 from "../images/שובל דעבול קליניקה.png"
const SecondScreen=()=>{


    return <>
    <div className={styles.title} id="השירותים שלי">מה את יכולה לקבל ממני ?</div>
<div className={styles.row}>
{/* <Box option="קלפי טארוט"/>
    <Box option="תטא הילינג" />
    <Box option="נומורולוגיה" /> */}
<What title="ייעוץ ממוקד 30 דקות באמצעות הנומורולוגיה" description="מתבצע באופן טלפוני /כתוב / פרונטלי מגיע עם מידע מקיף אודותייך + מענה על 4 שאלות" src={nomorology}/>
<What title="ייעוץ משולב : נומורולוגיה + טארוט" description="מתבצע באופן טלפוני /כתוב / פרונטלי מגיע עם מידע מקיף אודותייך + מענה על 4 שאלות" src={teta}/>
<What title="מפה כתובה - נומורולוגיה" description="מענה על עד 10 שאלות  + ניתוח מקיף ומלא על האישיות שלך- מגיע באופן כתוב" src={clinic}/>
<What title="שיחה פרונטלית של 60 דקות" description="מענה על עד 10 שאלות + ניתוח מקיף ומלא על האישיות שלך + מפה שמגיעה באופן כתוב" src={clinic2}/>
<What title="טיפול תטא הילינג" description="טיפול משולב - טארוט + תטא הילינג - לאחר סשן עוצמתי ומדוייק נסיים בהכוונה באמצעות קלפי הטארוט - מענה על 4 שאלות" src={clinic3}/>
<What title="טיפול משולב נומורולוגיה + תטא הילינג" description="לפני הגעתך לטיפול אני חוקרת אודות המפה הנומורולוגית שלך + מעבר יחד איתך על המפה שלך + סשן טיפול בתת המודע" src={clinic4}/>
</div>
    </>
}
export default SecondScreen