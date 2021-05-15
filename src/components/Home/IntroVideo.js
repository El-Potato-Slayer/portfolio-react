import Vid from '../../assets/intro-vid.mp4'

function IntroVideo(props) {
  return (
    <video autoPlay muted id="introVideo" onEnded={props.handleVidPlayState}>
      <source src={Vid} type="video/mp4"/>
    </video>
  );
}

export default IntroVideo;
