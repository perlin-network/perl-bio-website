import Navbar from './components/Navbar';
import Splash from './components/Splash';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Contact from './components/Contact'
import Footer from './components/Footer'
import {BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import CookieConsent from "react-cookie-consent";
function App() {

  return (
    <Router>
      <div className="App" style={AppStyle}>
        <Navbar/>
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

