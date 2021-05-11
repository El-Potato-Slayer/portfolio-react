
function IntroVideo() {
  return (
    <div className="vid-container">
      <video autoPlay="true" loop="false" muted>
        <source src="../../assets/intro-vid.mp4"/>
      </video>
    </div>
  );
}

export default IntroVideo;
