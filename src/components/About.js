import React from 'react';

const About = ()=>{
    return( <section id="about">
    <div className="container">
      <h2 className="section-title">
        About me
      </h2>
      <div className="row about-wrapper">
        <div className="col-md-6 col-sm-12">
          <div className="about-wrapper__image">
            <img
              className="img-fluid rounded shadow-lg"
              height="auto"
              width="300px"
              src="./assets/profile.jpg"
              alt="Profile..."
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="about-wrapper__info">
            <p className="about-wrapper__info-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi neque, ipsa animi maiores repellendu distinctioaperiam
              earum dolor voluptatum consequatur blanditiis inventore debitis
              fuga numquam voluptate architecto itaque molestiae.
            </p>
            <p className="about-wrapper__info-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi neque, ipsa animi maiores repellendu distinctioaperiam
              earum dolor voluptatum consequatur blanditiis inventore debitis
              fuga numquam voluptate architecto itaque molestiae.
            </p>
            <span className="d-flex mt-3">
              <a target="_blank" className="cta-btn cta-btn--resume" href="#!">
                View Resume
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>)
}
export default About