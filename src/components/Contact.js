import React from 'react';
const Contact = ()=>{
return(
    <section id="contact">
      <div className="container">
        <h2 className="section-title">
          Contact
        </h2>
        <div className="contact-wrapper">
          <p className="contact-wrapper__text">
            [Put your call to action here]
          </p>
          <a
            // target="_blank"
            className="cta-btn cta-btn--resume"
            href="mailto:example@email.com"
            >Call to Action</a
          >
        </div>
      </div>
    </section>
)
}
export default Contact