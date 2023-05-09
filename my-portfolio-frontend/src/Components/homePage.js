import React from 'react';

const HomePage = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Welcome to My Portfolio</h1>
          <p>I am a full-stack developer with experience in MERN stack</p>
          <button className="btn-primary">View My Work</button>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non aliquet massa. Maecenas aliquam, 
          risus vel interdum posuere, nibh sapien faucibus magna, sit amet pulvinar elit orci eu tellus. 
          Quisque rutrum lacus ac fermentum convallis. Nullam id tellus auctor, euismod felis a, pulvinar orci. 
          Suspendisse commodo ligula sed enim sagittis efficitur. Vestibulum a augue ante. Sed quis varius quam, 
          sed ultricies mauris. In hac habitasse platea dictumst. </p>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <h2>My Services</h2>
          <div className="service-card">
            <div className="icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="content">
              <h3>Web Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non aliquet massa.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="content">
              <h3>Mobile App Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non aliquet massa.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="icon">
              <i className="fas fa-palette"></i>
            </div>
            <div className="content">
              <h3>UI/UX Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non aliquet massa.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
