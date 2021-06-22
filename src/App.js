/* eslint no-use-before-define: 0 */  // 
import Splash from './components/Splash';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {

  return (
    <div className="App" style={AppStyle}>
      <Splash/>
      {/* <About/>
      <WhatWeDo/>
      <CaseStudies/>
      <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
let AppStyle={
  fontFamily:'Bai Jamjuree, sans-serif',
}

