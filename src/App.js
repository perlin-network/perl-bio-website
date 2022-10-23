import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { StyledEngineProvider } from '@mui/material/styles';

import { ThemeProvider } from './hooks/useTheme';
import { AppConfigProvider } from './hooks/useAppConfig';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import ContactCard from './components/ContactCard';

import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <AppConfigProvider>
          <Router>
            <div className="App">
              <Switch>
                <Route path="/cards/:cardId">
                  <ContactCard />
                </Route>

                <>
                  <Navbar />

                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/services">
                    <Services />
                  </Route>
                  <Route exact path="/projects-and-press">
                    <Projects />
                  </Route>
                  <Route exact path="/team">
                    <Team />
                  </Route>
                  <Route exact path="/contact">
                    <Contact />
                  </Route>
                  <Route exact path="/who">
                    <About />
                  </Route>
                  <Route exact path="/what">
                    <WhatWeDo />
                  </Route>
                  <Route exact path="/terms">
                    <Terms />
                  </Route>
                  <Route exact path="/privacy">
                    <Privacy />
                  </Route>

                  <Footer />
                </>
              </Switch>

              <CookieConsent
                location="bottom"
                buttonText="Acknowledge"
                buttonStyle={{
                  fontWeight: '500',
                  borderRadius: '16px',
                  background: '#91D873',
                  minHeight: '35px',
                }}
                expires={150}
              >
                This website uses cookies to enhance the user experience.{' '}
                <a
                  href="https://www.cookiesandyou.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'white' }}
                >
                  Learn More
                </a>
              </CookieConsent>
            </div>
          </Router>
        </AppConfigProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
