import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Particles from 'react-particles-js';
import particles from '../../assets/particles'

function Header() {
  return (
    <header className="relative">
      <Particles className="particles absolute" params={particles}/>
      <div>
        <h1>Whaddup, I'm Chad</h1>
        <h2>I'm quite a sick web developer</h2>
      </div>
    </header>
  );
}

export default Header;
