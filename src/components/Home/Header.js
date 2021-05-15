import Particles from 'react-particles-js';
import IntroText from './IntroText'
import Vid from '../../assets/intro-vid.mp4'

function Header(props) {
  return (
    <header className="relative">
      {
        !props.hasPageLoadedOnce && (
          <video autoPlay muted id="introVideo" onEnded={props.handlePageLoad}>
            <source src={Vid} type="video/mp4"/>
          </video>
        )
      }
              
      {props.hasPageLoadedOnce && <Particles className="particles absolute"/>}
      <IntroText className="relative" hasPageLoadedOnce={props.hasPageLoadedOnce}></IntroText>
    </header>
  );
}

export default Header;
