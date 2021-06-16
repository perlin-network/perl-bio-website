import Splash from './components/Splash';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
function App() {

  return (
    <div className="App" style={AppStyle}>
      <Splash/>
      <About/>
      <WhatWeDo/>
      <CaseStudies/>
      <Contact/>
    </div>
  );
}

export default App;
let AppStyle={
  fontFamily:'Bai Jamjuree, sans-serif',
}

