import Navbar from './components/Navbar';
import Splash from './pages/Splash';
import About from './pages/About';
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Fade from '@material-ui/core/Fade';
import { Fab, useScrollTrigger, Zoom } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import CookieConsent from "react-cookie-consent";
import Policies from './pages/Policies';


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
      <div className='pre-fade' style={{background:"#333336"}}>
        <Fade in={true} timeout={3000}>
          <div className="App" style={AppStyle}>
            <Navbar/>
            <div id='top-anchor' style={{width:'0px', height:'0px'}}/>
            <Switch>
              <Route exact path='/services'>
                <Services/>
              </Route>
              <Route exact path='/contact'>
                <Contact/>
              </Route>
              <Route exact path='/team'>
                <About/>
              </Route>
              {/* <Route exact path='/what'>
                <WhatWeDo/>
              </Route> */}
              <Route exact path='/policies'>
                <Policies/>
              </Route>
              {/* <Route exact path='/media'>
                <Media/>
              </Route> */}
              <Route exact path='/projects'>
                <Projects/>
              </Route>
              <Route exact path='/'>
                <Splash/>
              </Route>
            </Switch>
            <Zoom in={trigger}>
              <Fab size="small" aria-label="scroll back to top" style={{position:'fixed', margin:'2% 3%', bottom:50, right:0}} onClick={handleClick}>
                <KeyboardArrowUpIcon />
              </Fab>
            </Zoom>
            <Footer/>         
            <CookieConsent
              location='bottom'
              buttonText='Acknowledge'
              style={{fontFamily: "Bai Jamjuree, sans-serif",}}
              buttonStyle={{fontWeight:'500', fontFamily: "Bai Jamjuree, sans-serif", borderRadius:"16px",background: "#91D873", minHeight:'35px'}}
              expires={150}>
                This website uses cookies to enhance the user experience. <a href="https://www.cookiesandyou.com/" target='_blank' rel='noreferrer' style={{color:'white'}}>Learn More</a>
            </CookieConsent>
          </div>
        </Fade>
      </div>
    </Router>
  );
}

export default App;
let AppStyle={
  width:'100%',
  fontFamily:'Bai Jamjuree, sans-serif',
  background:"#FFFFFF",
  minHeight:'100vh'
}

