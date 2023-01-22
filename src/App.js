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
                <Route path="/cards/:cardId">
                  <ContactCard />
                </Route>

                <>
                  <Navbar />

                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/team">
                    <Team />
                  </Route>
                  <Route exact path="/work">
                    <Work />
                  </Route>
                  <Route exact path="/contact">
                    <Contact />
                  </Route>
                  <Route exact path="/terms">
                    <Terms />
                  </Route>
                  <Route exact path="/privacy">
                    <Privacy />
                  </Route>
                  <Redirect to="/" />

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
