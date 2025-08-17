import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import Reccomends from './components/reccomends/Reccomends';
import NavBar from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';

import When from './components/when/When';
import Ways from './components/ways/Ways';
import Box from './components/box/Box';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import BasicAccordion from './components/question/Akordion';
import From from './components/from me/From';
import From2 from './components/from me/From2';
import ByMe from './components/ByMe/ByMe';
import ForthScreen from './screens/ForthScreen';
import PrivacyPolicy from './components/privacy/Privacy';


function App() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return <>
  <NavBar/>
<FirstScreen scrolled={scrolled}/>
<Reccomends/>
<ForthScreen/>
{/* <When/> */}
<SecondScreen/>
<ThirdScreen/>

<BasicAccordion/>
{/* <From/> */}
<From2/>
<PrivacyPolicy 
  ownerName="שובל דעבול" 
  email="Shovalda595@gmail.com" 
  phone="050-979-6362" 
  domain="https://shovaldabol.co.il/" 
/>
<ByMe/>
  </> 
}

export default App;
