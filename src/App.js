import Navbar from './components/Navbar';
import Splash from './components/Splash';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import ContactCard from './components/ContactCard';
import { Fab, useScrollTrigger, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#55AB1D',
    },
    text: {
      primary: '#202020',
    },
  },
  typography: {
    fontFamily: `"Ubuntu", "Roboto", "Arial", sans-serif`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#202020',
        },
        svg: {
          maxWidth: '100%',
          maxHeight: '100%',
        },
      },
    },
  },
});

function App() {
  const trigger = useScrollTrigger();
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#top-anchor'
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="App">
            <Switch>
              <Route path="/cards/:cardId">
                <ContactCard />
              </Route>

              <>
                <Navbar />
                <div id="top-anchor" style={{ width: '0px', height: '0px' }} />

                <Route exact path="/">
                  <Splash />
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

                <Zoom in={trigger}>
                  <Fab
                    size="small"
                    aria-label="scroll back to top"
                    style={{
                      position: 'fixed',
                      margin: '2% 2%',
                      bottom: 0,
                      right: 0,
                    }}
                    onClick={handleClick}
                  >
                    <KeyboardArrowUpIcon />
                  </Fab>
                </Zoom>

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
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
