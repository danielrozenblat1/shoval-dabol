import styles from "./From.module.css";

const From = () => {
  return (
    <div className={styles.container}>
      <svg
        width="803"
        height="655"
        viewBox="0 0 803 655"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M798.501 273.834C753.495 427.818 568.501 523.992 397.005 654.846C284.999 546.342 27.5036 404 4.00068 273.834C-33.8024 64.4689 225.005 -120.508 397.005 120.496C597.005 -123.009 833.995 41.8152 798.501 273.834Z"
          fill="url(#gradient)"
        />
        <text
          x="50%"
          y="30%"
          dominant-baseline="middle"
          text-anchor="middle"
          fill="white"
          fontFamily="Horev"
          fontSize="1.7rem"
          width="20%" // Set the width to 20% of the container width
          className={styles.text}
        >
          <tspan x="50%" dy="1.2em">
            כמה מילים מליבי אליכם-
          </tspan>
          <tspan x="50%" dy="1.2em">
            חשוב לי להדגיש שאתה מגיע למרחב של חופש מוחלט עבורך שמהווה עבורך את האפשרות להביא את עצמך בצורה טבעית ואמיתית.
          </tspan>
          <tspan x="50%" dy="1.2em">
            זהו מרחב נטול שיפוטיות מלא בקבלה מלאה, ואהבה ללא תנאי.
          </tspan>
          <tspan x="50%" dy="1.2em">
            אני כאן להחזיק מרחב ריפוי ובהירות תוך כדי ניקוי מה שמוחזק באופן לא מודע והעצמה אישית ליצירת חדש בחייך.
          </tspan>
          <tspan x="50%" dy="1.2em">
            ביחד, נפוגג ונשחרר את מה שחוסם ועומד בדרך, בינך לבין בחירה חדשה ומימוש שלה בפועל.
          </tspan>
          <tspan x="50%" dy="1.2em">
            נסלול יחד דרך לריפוי, העצמה, שינוי והגשמה – הרבה יותר בקלות מאי פעם.
          </tspan>
          <tspan x="50%" dy="1.2em">
            יש בי אמון מלא בך וביכולת שלך לשנות הכל ואשמח לתרום במסעך חזרה הביתה לעצמך.
          </tspan>
        </text>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="rgba(236,156,255,1)" />
            <stop
              offset="50%"
              stop-color="rgba(255,0,176,0.8038865204284839)"
            />
            <stop offset="100%" stop-color="rgba(245,201,255,1)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default From;