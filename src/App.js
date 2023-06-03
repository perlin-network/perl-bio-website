import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { StyledEngineProvider } from '@mui/material/styles';

import { ThemeProvider } from './hooks/useTheme';
import { AppConfigProvider } from './hooks/useAppConfig';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactCard from './components/ContactCard';
import Home from './pages/Home';
import Team from './pages/Team';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <AppConfigProvider>
          <Router>
            <div className="App">
              <Switch>
                <Route exact path="/">
                  <Navbar />
                  <Home />
                  <Footer />
                </Route>
                <Route exact path="/team">
                  <Navbar />
                  <Team />
                  <Footer />
                </Route>
                <Route exact path="/work">
                  <Navbar />
                  <Work />
                  <Footer />
                </Route>
                <Route exact path="/contact">
                  <Navbar />
                  <Contact />
                  <Footer />
                </Route>
                <Route exact path="/terms">
                  <Navbar />
                  <Terms />
                  <Footer />
                </Route>
                <Route exact path="/privacy">
                  <Navbar />
                  <Privacy />
                  <Footer />
                </Route>
                <Route path="/cards/:cardId">
                  <ContactCard />
                </Route>
                <Route path="*">
                  <Redirect to="/" />
                </Route>
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
