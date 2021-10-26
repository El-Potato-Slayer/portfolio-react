import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/shared/Navbar';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Home/Header';
import ProjectPreview from './components/Home/ProjectPreview';
import AboutMePreview from './components/Home/AboutMePreview';
import { useState } from 'react';
import ScrollToTop from './javascript/ScrollToTop';

function App() {
  const [hasPageLoadedOnce, setPageLoaded] = useState(false)
  function handlePageLoad() {
    setPageLoaded(true)
  }
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <Navbar handlePageLoad={handlePageLoad} ></Navbar>
      <Switch>
        <Route exact path="/">
          <div className="snap">
            <Header handlePageLoad={handlePageLoad} hasPageLoadedOnce={hasPageLoadedOnce}></Header>
            <ProjectPreview handlePageLoad={handlePageLoad}></ProjectPreview>
            <AboutMePreview handlePageLoad={handlePageLoad}></AboutMePreview>
          </div>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/about-me">
          <AboutMe></AboutMe>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;