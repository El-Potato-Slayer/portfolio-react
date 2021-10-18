import { Link } from "react-router-dom";

function AboutMePreview(props) {
  return (
    <section className="about-me-preview">
      <h2 className="text-2xl 2xs:text-3xl xs:text-4xl -mt-16">A Bit About Me</h2>
      <p className="text-sm xs:text-base">
        I'm a full-stack web developer with experience in multiple frameworks such as ReactJS, VueJS, and Ruby on Rails. I have a preference for front-end development and love being able to develop responsive websites that are visually-pleasing. I find it to be a very gratifying experience. <br /> <br /> 
        I'm on the lookout for a web development job that emphasizes fast and efficient workflows. If you have an opportunity available, don't hesitate to contact me. 
      </p>
      <Link className="neon-button my-4" onClick={() => props.handlePageLoad()} to="/about-me">More</Link>

    </section>
  );
}

export default AboutMePreview;
