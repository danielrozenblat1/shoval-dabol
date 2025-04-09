import { useEffect, useState, useRef, createRef } from 'react';
import { Check, DollarSign, HeartCrack, Award } from 'lucide-react';
import styles from './Steps.module.css';

const Timeline = () => {
  // Initialize with step 1 active
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState(new Set([1, 2, 3])); // Initialize with all steps visible
  const [scrollProgress, setScrollProgress] = useState(0.3); // Start with some progress
  const [completedSteps, setCompletedSteps] = useState(new Set([])); // Track completed steps
  
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  const steps = [
    {
      number: 1,
      title: "שאת ברדיפה אחרי כסף",
      content: "מצאת את עצמך מתכננת את חייך סביב השגת עוד כסף? החיים מכתיבים מרוץ בלתי נגמר אחרי הצלחה חומרית, אבל בפועל, זה לא ממלא את הלב. גילית שלמרות שהשגת מטרות והצלחות, עדיין את מרגישה תחושת ריקנות מבפנים.",
      color: "tone-1",
      icon: DollarSign
    },
    {
      number: 2,
      title: "קנאה בחבר/ה שמרוויחים יותר",
      content: "הבטת פעם במישהי אחרת והרגשת שהיא פשוט 'שם' - במקום שבו את רוצה להיות מבחינה כלכלית? ותחושה שאת חיה בין השוואה  בלתי פוסקת ובמחשבות על מה שאין לך, במקום לחיות מתוך שקט פנימי ותחושת עוצמה אמיתית.",
      color: "tone-2",
      icon: HeartCrack
    },
    {
      number: 3,
      title: "חוסר סיפוק ואושר בגלל המצב הכלכלי",
      content: "הרגשת אי-פעם שלמרות שהשגת לא מעט, עדיין יש תחושת חוסר וריקנות? ו''הלוואי שהיית יכולה שלא להרגיש ככה ולחיות מתוך שמחה פנימית אמיתית''.",
      color: "tone-3",
      icon: Award
    },
  ];

  // Simulate scroll progress for demonstration
  useEffect(() => {
    // Initialize all steps as visible
    setVisibleSteps(new Set([1, 2, 3]));
    
    // Set a timer to advance through steps to demonstrate checkmarks
    const timer1 = setTimeout(() => {
      setActiveStep(2);
      setCompletedSteps(new Set([1]));
      setScrollProgress(0.5);
    }, 1500);
    
    const timer2 = setTimeout(() => {
      setActiveStep(3);
      setCompletedSteps(new Set([1, 2]));
      setScrollProgress(0.8);
    }, 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Add real scroll handler that maintains the simulated behavior
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const windowHeight = window.innerHeight;
      
      let progress = 0;
      if (timelineTop <= windowHeight) {
        const scrolled = windowHeight - timelineTop;
        progress = Math.min(Math.max(scrolled / (timelineHeight + windowHeight/2), 0), 1);
      }
      
      // Update completed steps based on activeStep
      const newCompletedSteps = new Set();
      for (let i = 1; i < activeStep; i++) {
        newCompletedSteps.add(i);
      }
      
      setCompletedSteps(newCompletedSteps);
    };
    
    // Initial call and event listeners
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [activeStep]);

  // Function to render the icon (always showing the step icon)
  const renderIcon = (step) => {
    const IconComponent = step.icon;
    return <IconComponent className={styles.iconStyle} />;
  };

  return (
    <div className={styles.container} id="מדריך לעושר אמיתי">
      <div className={styles.content}>
        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineLine}>
            <div 
              className={styles.timelineProgress} 
              style={{ 
                height: `${scrollProgress * 100}%`,
                transition: 'height 0.5s ease-out'
              }}
            />
          </div>
          
          {steps.map((step) => (
            <div 
              key={step.number}
              className={`${styles.timelineItem} ${styles.active}`}
              style={{ opacity: 1, transform: 'translateY(0)' }} // Force visibility with inline styles
            >
              <div className={styles.timelineContent}>
                <div className={`${styles.glassEffect} ${styles.cardActive}`}>
                  <div 
                    className={`${styles.timelineNumber} ${styles.numberActive} ${styles[`number-${step.color}`]}`}
                  >
                    {renderIcon(step)}
                    <div className={styles.numberGlow} />
                  </div>
                  
                  <h3 className={styles.timelineTitle}>
                    {step.title}
                  </h3>
                  <p className={styles.timelineText}>
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;