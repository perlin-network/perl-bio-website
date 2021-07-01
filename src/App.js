import Navbar from './components/Navbar';
import Splash from './components/Splash';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Fab, useScrollTrigger, Zoom } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import CookieConsent from "react-cookie-consent";
function App() {
  let trigger=useScrollTrigger()
  const handleClick=(event)=>{
    const anchor = (event.target.ownerDocument || document).querySelector('#top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  return (
    <Router>
      <div className="App" style={AppStyle}>
        <Navbar/>
        <div id='top-anchor' style={{width:'0px', height:'0px'}}/>
        <Switch>
          <Route exact path='/contact'>
            <Contact/>
          </Route>
          <Route exact path='/who'>
            <About/>
          </Route>
          <Route exact path='/what'>
            <WhatWeDo/>
          </Route>
          <Route exact path='/'>
            <Splash/>
          </Route>
        </Switch>
        <Zoom in={trigger}>
          <Fab size="small" aria-label="scroll back to top" style={{position:'fixed', margin:'2% 2%', bottom:0, right:0}} onClick={handleClick}>
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
        <Footer/>         
        <CookieConsent
          location='bottom'
          buttonText='Acknowledge'
          style={{fontFamily: "Bai Jamjuree, sans-serif",}}
          buttonStyle={{fontWeight:'bold', fontFamily: "Bai Jamjuree, sans-serif", borderRadius:"16px",background: "#91D873", minHeight:'35px'}}
          expires={150}>
            This website uses cookies to enhance the user experience. <a href="https://www.cookiesandyou.com/" target='_blank' rel='noreferrer' style={{color:'white'}}>Learn More</a>
        </CookieConsent>
      </div>
    </Router>
  );
}

export default App;
let AppStyle={
  fontFamily:'Bai Jamjuree, sans-serif',
  background:"#333336",
  minHeight:'100vh'
}

