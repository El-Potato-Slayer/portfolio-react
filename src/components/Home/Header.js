import Particles from 'react-particles-js';
import particles from '../../assets/particles'
import Vid from '../../assets/intro-vid.mp4'
import IntroText from './IntroText'

function Header() {
  return (
    <header className="relative">
        <video autoPlay muted>
          <source src={Vid} type="video/mp4"/>
        </video>
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
