import { useEffect, useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Particles from 'react-particles-js';
import particles from '../../assets/particles'
import IntroText from './IntroText'
import IntroVideo from './IntroVideo';
import Vid from '../../assets/intro-vid.mp4'

function Header(props) {
  const [isVidPlaying, setVidPlaying] = useState(true)
  const [loadedOnce, setLoadedOnce] = useState(true)
  // setTimeout(() => {
  //   setVidPlaying(false)
  // }, 9000)
  const handleVidPlayState =() => {
    setVidPlaying(false)
  }

  useEffect(() => {
    setLoadedOnce(false)
  }, [])
  
  return (
    <header className="relative">
      {
        // loadedOnce || (isVidPlaying && <IntroVideo handleVidPlayState={handleVidPlayState} handlePageLoad={props.handlePageLoad}></IntroVideo>) 
        !props.hasPageLoadedOnce && (
          <video autoPlay muted id="introVideo" onEnded={props.handlePageLoad}>
            <source src={Vid} type="video/mp4"/>
          </video>
        )
      }
              
      {props.hasPageLoadedOnce && <Particles className="particles absolute"/>}
      {/* <Particles className="particles absolute" params={particles}/> */}
      {/* <div className="relative header-text">
        <h1 className="text-3xl 2xs:text-4xl xs:text-5xl lg:text-6xl xs:mb-2">Whaddup, I'm Chad</h1>
        <h2 className="text-md 2xs:text-lg xs:text-2xl">I'm quite a sick web developer</h2>
      </div> */}
      <IntroText className="relative" hasPageLoadedOnce={props.hasPageLoadedOnce}></IntroText>
    </header>
  );
}

export default Header;
