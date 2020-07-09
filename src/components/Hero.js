import React, { Fragment } from "react";

const Hero = () => {
  return (
    <Fragment>
      <div id="hero" className="jumbotron">
        <div className="container">
          <h1 className="hero-title">
            Hi, my name is <span className="text-color-main">Bashar Francis</span>
            <br />
            I'm the Software Developer.
          </h1>
          <p className="hero-cta">
            <a className="cta-btn cta-btn--hero" href="#about">
              Know more
            </a>
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default Hero;
