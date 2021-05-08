import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Home/Header'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header></Header>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;