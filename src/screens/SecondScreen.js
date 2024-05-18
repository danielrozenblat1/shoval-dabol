import styles from "./SecondScreen.module.css"
import Box from "../components/box/Box"
import nomorology from "../images/שובל דעבול מסלולים 7.png"
import tarot from "../images/שובל דעבול מסלולים 5.png"
import teta from "../images/שובל דעבול מסלולים 6.png"
import tetaHiling from "../images/תטא הילינג.png"
import What from "../components/What/What"
import clinic from "../images/שובל דעבול מסלולים 2.png"
import clinic2 from "../images/שובל דעבול מסלולים 3.png"
import clinic3 from "../images/שובל דעבול מסלולים 4.png"
import clinic4 from "../images/שובל דעבול מסלולים.png"
const SecondScreen=()=>{


    return     <>
    <div className={styles.title} id="השירותים שלי">
      השירותים שלי
    </div>
    <div className={styles.row}>
      <What
        title="ייעוץ ממוקד 30 דקות באמצעות הנומורולוגיה"
        description="מתבצע באופן טלפוני /כתוב / פרונטלי מגיע עם מידע מקיף אודותייך + מענה על 4 שאלות"
        src={clinic2}
        itemScope
        message="היי שובל, אשמח לשמוע עוד על ייעוץ ממוקד של 30 דקות באמצעות הנומורולוגיה"
        itemType="https://schema.org/Service"
      />
      <What
        title="ייעוץ משולב : נומורולוגיה + טארוט"
        description="מתבצע באופן טלפוני /כתוב / פרונטלי מגיע עם מידע מקיף אודותייך + מענה על 4 שאלות"
        src={clinic}
        itemScope
        message="היי שובל, אשמח לשמוע עוד על ייעוץ משולב באמצעות הנומורולוגיה + טארוט"
        itemType="https://schema.org/Service"
      />
      <What
        title="מפה כתובה - נומורולוגיה"
        description="מענה על עד 10 שאלות  + ניתוח מקיף ומלא על האישיות שלך- מגיע באופן כתוב"
        src={clinic4}
        message="היי שובל, אשמח לשמוע עוד על קבלת מפה כתובה - נומורולוגיה"
        itemScope
        itemType="https://schema.org/Service"
      />
      <What
        title="שיחה פרונטלית של 60 דקות"
        description="מענה על עד 10 שאלות + ניתוח מקיף ומלא על האישיות שלך + מפה שמגיעה באופן כתוב"
        src={nomorology}
        message="היי שובל, אשמח לשמוע עוד על המסלול של שיחה פרונטלית של 60 דקות"
        itemScope
        itemType="https://schema.org/Service"
      />
      <What
        title="טיפול  משולב - טארוט + תטא הילינג"
        description="טיפול משולב - טארוט + תטא הילינג - לאחר סשן עוצמתי ומדוייק נסיים בהכוונה באמצעות קלפי הטארוט - מענה על 4 שאלות"
        src={clinic3}
        message="היי שובל, אשמח לשמוע עוד על טיפול משולב של טארוט + תטא הילינג"
        itemScope
        itemType="https://schema.org/Service"
      />
          <What
        title="טיפול משולב נומורולוגיה + תטא הילינג"
        description="לפני הגעתך לטיפול אני חוקרת אודות המפה הנומורולוגית שלך + מעבר יחד איתך על המפה שלך + סשן טיפול בתת המודע"
        src={teta}
        message="היי שובל, אשמח לשמוע עוד על טיפול משולב נומורולוגיה + תטא הילינג"
        itemScope
        itemType="https://schema.org/Service"
      />
      <What
        title="טיפול תטא הילינג"
        description="שיח רגשי טיפולי המשלב ריפוי אנרגטי"
        src={tetaHiling}
        message="היי שובל, אשמח לשמוע עוד על טיפול תטא הילינג"
        itemScope
        itemType="https://schema.org/Service"
      />
    </div>
  </>
}
export default SecondScreen