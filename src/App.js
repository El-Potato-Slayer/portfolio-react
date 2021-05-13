import './App.css';
import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <div className="snap">
            <Home></Home>

          </div>
          {/* <Header></Header> */}
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;