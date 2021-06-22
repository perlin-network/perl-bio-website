import Splash from './components/Splash';
// eslint-disable-next-line
import About from './components/About';
// eslint-disable-next-line
import WhatWeDo from './components/WhatWeDo';
// eslint-disable-next-line
import CaseStudies from './components/CaseStudies'
// eslint-disable-next-line
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
