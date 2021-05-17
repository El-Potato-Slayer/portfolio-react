import Particles from 'react-particles-js';
import IntroText from './IntroText'
import Vid from '../../assets/intro-vid.mp4'
import { BrowserView, isMobile } from 'react-device-detect';

function Header(props) {
  return (
    <header className="relative">
      {
         !props.hasPageLoadedOnce && (
          <video autoPlay muted id="introVideo" onEnded={() => props.handlePageLoad()}>
            <source src={Vid} type="video/mp4"/>
          </video>
        )
      }
      {
        props.hasPageLoadedOnce && 
        <div className="particles-wrapper absolute">
          {
            !isMobile && <Particles className="particles"/>
          }  
        </div>
      }
      <IntroText className="relative" hasPageLoadedOnce={props.hasPageLoadedOnce}></IntroText>
    </header>
  );
}

export default Header;
