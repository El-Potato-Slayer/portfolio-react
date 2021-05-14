import './App.css';
import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/shared/Navbar';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <HashRouter>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <div className="snap">
            <Home></Home>

          </div>
          {/* <Header></Header> */}
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