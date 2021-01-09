import { React } from 'react';
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import MovieDetail from './pages/MovieDetail';
//
import { Switch, Route, useLocation } from 'react-router-dom';
// Animation - AnimatePresence detects changes
import { AnimatePresence } from 'framer-motion';

function App() {
  // Note: UseLocation is needed by framer-motion
  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutUs />
          </Route>
          <Route path='/work' exact>
            <Work />
          </Route>
          <Route path='/work/:id'>
            <MovieDetail />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
