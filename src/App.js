import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import ProjectPreview from './components/Home/ProjectPreview';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
          <ProjectPreview></ProjectPreview>
          {/* <Header></Header> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;