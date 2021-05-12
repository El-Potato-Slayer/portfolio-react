import Vid from '../../assets/intro-vid.mp4'

function IntroVideo() {
  return (
    <video autoPlay muted id="introVideo">
      <source src={Vid} type="video/mp4"/>
    </video>
  );
}

export default IntroVideo;
