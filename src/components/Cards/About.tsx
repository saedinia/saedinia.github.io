const About = () => {
  return (
    <div id="card-about" className="card-inner animated active">
      <section>
        <h1>
          <span>A</span>bout Me
        </h1>
        <div className="title">Hello! I'm Sadegh Saedi Nia.</div>
        <p>
          I am a skilled Back-end & Front-end developer based in Stuttgart,
          Germany. My journey in web development has been diverse, with a strong
          foundation in back-end technologies and a creative touch in front-end
          design. I thrive on building seamless, efficient systems that elevate
          user experiences. Let's embark on a collaborative journey to turn your
          digital ideas into reality!
        </p>

        <div className="section-footer">
          <div className="item">
            <span className="item-title">Age</span>
            <span className="item-subtitle">39</span>
          </div>

          <div className="item">
            <span className="item-title">Residence</span>
            <span className="item-subtitle">Germany</span>
          </div>

          <div className="item">
            <span className="item-title">Freelance</span>
            <span className="item-subtitle">Available</span>
          </div>

          <div className="item">
            <span className="item-title">Address</span>
            <span className="item-subtitle">Stuttgart, Germany</span>
          </div>
        </div>
      </section>

      <section className="services">
        <h1 className="text-2xl">
          <span>M</span>y Services
        </h1>
        <div className="services-inner">
          <div className="service">
            <div className="brand">
              <div className="tooltip" data-tip="HTML">
                <i className="fa-brands fa-html5"></i>
              </div>

              <div className="tooltip" data-tip="CSS">
                <i className="fa-brands fa-css3-alt"></i>
              </div>

              <div className="tooltip" data-tip="Javascript">
                <i className="fa-brands fa-js"></i>
              </div>

              <div className="tooltip" data-tip="React">
                <i className="fa-brands fa-react"></i>
              </div>

              <div className="tooltip" data-tip="Angular">
                <i className="fa-brands fa-angular"></i>
              </div>

              <div className="tooltip" data-tip="Vuejs">
                <i className="fa-brands fa-vuejs"></i>
              </div>
            </div>
            <div className="title text-center">Front-end</div>
          </div>

          <div className="divider divider-horizontal w-0 m-0"></div>

          <div className="service">
            <div className="brand">
              <div className="tooltip" data-tip="PHP">
                <i className="fa-brands fa-php"></i>
              </div>

              <div className="tooltip" data-tip="Symfony">
                <i className="fa-brands fa-symfony"></i>
              </div>

              <div className="tooltip" data-tip="Laravel">
                <i className="fa-brands fa-laravel"></i>
              </div>

              <div className="tooltip" data-tip="Shopware">
                <i className="fa-brands fa-shopware"></i>
              </div>

              <div className="tooltip" data-tip="Typo3">
                <i className="fa-brands fa-typo3"></i>
              </div>

              <div className="tooltip" data-tip="Wordpress">
                <i className="fa-brands fa-wordpress"></i>
              </div>
            </div>
            <div className="title text-center">Back-end</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
