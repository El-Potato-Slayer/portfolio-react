import { useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Particles from 'react-particles-js';
import particles from '../../assets/particles'
import IntroText from './IntroText'
import IntroVideo from './IntroVideo';

function Header() {
  const [isVidPlaying, setVidPlaying] = useState(true)
  setTimeout(() => {
    setVidPlaying(false)
  }, 9000)
  
  
  return (
    <header className="relative">
      {
        isVidPlaying && <IntroVideo></IntroVideo> 
      }
              
      {!isVidPlaying && <Particles className="particles absolute"/>}
      {/* <Particles className="particles absolute" params={particles}/> */}
      {/* <div className="relative header-text">
        <h1 className="text-3xl 2xs:text-4xl xs:text-5xl lg:text-6xl xs:mb-2">Whaddup, I'm Chad</h1>
        <h2 className="text-md 2xs:text-lg xs:text-2xl">I'm quite a sick web developer</h2>
      </div> */}
      <IntroText className="relative"></IntroText>
    </header>
  );
}

export default Header;
