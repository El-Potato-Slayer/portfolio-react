import './App.css';
import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/shared/Navbar';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Home/Header';
import ProjectPreview from './components/Home/ProjectPreview';
import AboutMePreview from './components/Home/AboutMePreview';
import { useState } from 'react';

function App() {
  const [hasPageLoadedOnce, setPageLoaded] = useState(false)
  const handlePageLoad = () => {
    setPageLoaded(true)
  }
  return (
    <HashRouter>
      <Navbar handlePageLoad={handlePageLoad}></Navbar>
      <Switch>
        <Route exact path="/">
          <div className="snap">
            <Header handlePageLoad={handlePageLoad} hasPageLoadedOnce={hasPageLoadedOnce}></Header>
            <ProjectPreview handlePageLoad={handlePageLoad}></ProjectPreview>
            <AboutMePreview></AboutMePreview>
          </div>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/about-me">
          <AboutMe></AboutMe>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;