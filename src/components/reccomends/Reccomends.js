import styles from "./Reccomends.module.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import UniverseButton from "../buttons/Button"
import result from "../../images/שובל דעבול לקוחה ממליצה.png"
import result1 from "../../images/שובל דעבול לקוחה ממליצה 1.png"
import result2 from "../../images/שובל דעבול לקוחה ממליצה 2.png"
import result3 from "../../images/שובל דעבול לקוחה ממליצה 3.png"
import result4 from "../../images/שובל דעבול לקוחה ממליצה 4.png"
import result5 from "../../images/שובל דעבול לקוחה ממליצה 5.png"
import result6 from "../../images/שובל דעבול לקוחה ממליצה 6.png"
import result7 from "../../images/שובל דעבול לקוחה ממליצה 7.png"
import result8 from "../../images/שובל דעבול לקוחה ממליצה 8.png"
import result9 from "../../images/שובל דעבול לקוחה ממליצה 9.png"
import result10 from "../../images/שובל דעבול לקוחה ממליצה 10.png"
import result11 from "../../images/שובל דעבול לקוחה ממליצה 11.png"
import result12 from "../../images/שובל דעבול לקוחה ממליצה 12.png"
import result13 from "../../images/שובל דעבול לקוחה ממליצה 13.png"
import result14 from "../../images/שובל דעבול לקוחה ממליצה 14.png"
import result15 from "../../images/שובל דעבול לקוחה ממליצה 15.png"
import result16 from "../../images/שובל דעבול לקוחה ממליצה 16.png"
import result17 from "../../images/שובל דעבול לקוחה ממליצה 17.png"
import result18 from "../../images/שובל דעבול לקוחה ממליצה 18.png"
import result19 from "../../images/שובל דעבול לקוחה ממליצה 19.png"
import result20 from "../../images/שובל דעבול לקוחה ממליצה 20.png"
import result21 from "../../images/שובל דעבול לקוחה ממליצה 21.png"
import result22 from "../../images/שובל דעבול לקוחה ממליצה 22.png"
import result23 from "../../images/שובל דעבול לקוחה ממליצה 23.png"
import result24 from "../../images/שובל דעבול לקוחה ממליצה 24.png"
import result25 from "../../images/שובל דעבול לקוחה ממליצה 25.png"
import result26 from "../../images/שובל דעבול לקוחה ממליצה 26.png"
import result27 from "../../images/שובל דעבול לקוחה ממליצה 27.png"
import result28 from "../../images/שובל דעבול לקוחה ממליצה 28.png"
import result29 from "../../images/שובל דעבול לקוחה ממליצה 29.png"
import result30 from "../../images/שובל דעבול לקוחה ממליצה 30.png"
import result31 from "../../images/שובל דעבול לקוחה ממליצה 31.png"
import result32 from "../../images/שובל דעבול לקוחה ממליצה 32.png"
import result33 from "../../images/שובל דעבול לקוחה ממליצה 33.png"
import result34 from "../../images/שובל דעבול לקוחה ממליצה 34.png"
import result35 from "../../images/שובל דעבול לקוחה ממליצה 35.png"
import result36 from "../../images/שובל דעבול לקוחה ממליצה 36.png"
import result37 from "../../images/שובל דעבול לקוחה ממליצה 37.png"
import result38 from "../../images/שובל דעבול לקוחה ממליצה 38.png"
import result39 from "../../images/שובל דעבול לקוחה ממליצה 39.png"
import result40 from "../../images/שובל דעבול לקוחה ממליצה 40.png"
import result41 from "../../images/שובל דעבול לקוחה ממליצה 41.png"
import result42 from "../../images/שובל דעבול לקוחה ממליצה 42.png"
import result43 from "../../images/שובל דעבול לקוחה ממליצה 43.png"
import result44 from "../../images/שובל דעבול לקוחה ממליצה 44.png"
import result45 from "../../images/שובל דעבול לקוחה ממליצה 45.png"
import result46 from "../../images/שובל דעבול לקוחה ממליצה 46.png"
import result47 from "../../images/שובל דעבול לקוחה ממליצה 47.png"
import result48 from "../../images/שובל דעבול לקוחה ממליצה 48.png"
import result49 from "../../images/שובל דעבול לקוחה ממליצה 49.png"
import result50 from "../../images/שובל דעבול לקוחה ממליצה 50.png"
import result51 from "../../images/שובל דעבול לקוחה ממליצה 51.png"
import result52 from "../../images/שובל דעבול לקוחה ממליצה 52.png"
import result53 from "../../images/שובל דעבול לקוחה ממליצה 53.png"
import result54 from "../../images/שובל דעבול לקוחה ממליצה 54.png"
import result55 from "../../images/שובל דעבול לקוחה ממליצה 55.png"
import result56 from "../../images/שובל דעבול לקוחה ממליצה 56.png"
import result57 from "../../images/שובל דעבול לקוחה ממליצה 57.png"

const Reccomends=()=>{




  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 550 ? 1 :
                  window.innerWidth <= 850 ? 2 :
                  window.innerWidth <= 1050 ? 3 : 5,
    slidesToScroll: window.innerWidth < 550 ? 1 :
                    window.innerWidth <= 850 ? 2 :
                    window.innerWidth <= 1050 ? 3 : 5,
                    height: "auto"
  };
      //  window.innerWidth < 550 ? 1 : (window.innerWidth <550 && window.innerWidth< 850) ? 2 : 5,
    const content = [
      {
        type: 'image',
        src: result7,
      },
      {
        type: 'image',
        src: result46,
      },
      {
        type: 'image',
        src: result14,
      },
      {
        type: 'image',
        src: result3,
      }, 
      
      {
        type: 'image',
        src: result9,
      },
        {
          type: 'image',
          src: result,
        },
     

          {
            type: 'image',
            src: result1,
          },
          {
            type: 'image',
            src: result2,
          },
    
          {
            type: 'image',
            src: result4,
          },
          {
            type: 'image',
            src: result5,
          },
          {
            type: 'image',
            src: result6,
          },
       
          {
            type: 'image',
            src: result8,
          },
        
          {
            type: 'image',
            src: result10,
          },
          {
            type: 'image',
            src: result11,
          },
          {
            type: 'image',
            src: result12,
          },
          {
            type: 'image',
            src: result13,
          },
          {
            type: 'image',
            src: result14,
          },

          {
            type: 'image',
            src: result15,
          },
          {
            type: 'image',
            src: result16,
          },
          {
            type: 'image',
            src: result17,
          },
          {
            type: 'image',
            src: result18,
          },
          {
            type: 'image',
            src: result19,
          },
          {
            type: 'image',
            src: result20,
          },
          {
            type: 'image',
            src: result21,
          },
          {
            type: 'image',
            src: result22,
          },
          {
            type: 'image',
            src: result23,
          },
          {
            type: 'image',
            src: result24,
          },
          {
            type: 'image',
            src: result25,
          },
          {
            type: 'image',
            src: result26,
          },
          {
            type: 'image',
            src: result27,
          },
          {
            type: 'image',
            src: result28,
          },
          {
            type: 'image',
            src: result29,
          },
          {
            type: 'image',
            src: result30,
          },
          {
            type: 'image',
            src: result31,
          },
          {
            type: 'image',
            src: result32,
          },
          {
            type: 'image',
            src: result33,
          },
          {
            type: 'image',
            src: result34,
          },
          {
            type: 'image',
            src: result35,
          },
          {
            type: 'image',
            src: result36,
          },
          {
            type: 'image',
            src: result37,
          },
          {
            type: 'image',
            src: result38,
          },

          {
            type: 'image',
            src: result39,
          },
          {
            type: 'image',
            src: result40,
          },
          {
            type: 'image',
            src: result41,
          },
          {
            type: 'image',
            src: result42,
          },
          {
            type: 'image',
            src: result43,
          },
          {
            type: 'image',
            src: result44,
          },
          {
            type: 'image',
            src: result45,
          },
       
          {
            type: 'image',
            src: result47,
          },
          {
            type: 'image',
            src: result48,
          },
          {
            type: 'image',
            src: result49,
          },
          {
            type: 'image',
            src: result50,
          },
          {
            type: 'image',
            src: result51,
          },
          {
            type: 'image',
            src: result52,
          },
          {
            type: 'image',
            src: result53,
          },
          {
            type: 'image',
            src: result54,
          },
          {
            type: 'image',
            src: result55,
          },
          {
            type: 'image',
            src: result56,
          },
          {
            type: 'image',
            src: result57,
          },
     
    
      ];

 
return <>
<div className={styles.title} id="לקוחות ממליצות">איך ? ככה !</div>


<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`שובל דעבול לקוחה ממליצה מספר ${index + 1}`} />
              )}
              {/* {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
              )} */}
            </div>
          ))}
        </Slider>
      </div>
<UniverseButton/>
</>
}
export default Reccomends
