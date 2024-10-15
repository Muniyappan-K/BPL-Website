import React, { useEffect, useState } from 'react';
import '../styles/about.css';
import blogImage from '../assets/images/blog-3.jpg';
import aboutImage from '../assets/images/about-main.JPG';
import Partner1 from '../assets/images/Acer.jpg';
import Partner2 from '../assets/images/Amstrad-1.jpg';
import Partner3 from '../assets/images/Compaq.jpg';
import Partner4 from '../assets/images/Infinix.jpg';
import Partner5 from '../assets/images/ITEL.jpg';
import Partner6 from '../assets/images/Jio.jpg';
import Partner7 from '../assets/images/Play (1).jpg';
import Partner8 from '../assets/images/Sun-Direct-1.jpg';
import aboutSubImage from '../assets/images/about_sub.JPG'
import ChartComponent from '../components/chart/Chart';
import Footer from '../components/footer/Footer';
function About() {
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    setZoom(true); // Set zoom to true when the component mounts

    // Cleanup function to reset zoom when the component unmounts
    return () => {
      setZoom(false);
    };
  }, []);

  return (
    <div className="container-about">
      <section className="about-container"> <h1>ABOUT US</h1>
      </section><br/> <br/>
      <section id="story" className="story-sect">
        <div className="section-text">
          
          <h2>Bhagwati Products Limited</h2>
          <p>
            Bhagwati Products Limited, established in 2002, is a leading Indian manufacturer of innovative electronics and telecom devices. We specialize in mobile phones, consumer electronics, LED TVs, batteries, and chargers. With over 40 million phones and 3 million TVs produced, we stay at the forefront of technological innovation.
            <br /><br />
            Our cutting-edge facilities in Bhiwadi, Hyderabad, and Rudrapur are staffed by skilled professionals, ensuring top-quality products. We focus on delivering advanced, competitively priced solutions that meet all customer needs, aiming to be India’s preferred partner for electronic products. Experience the Bhagwati difference with our commitment to excellence and innovation.
          </p>
        </div>
        <div className="box-feature">
          <img src={aboutSubImage} alt="Scandinavian apartment interior" />
        </div>
      </section>
      <br /><br />
      <ChartComponent />
      <section id="designs" className="samples">
        <div className="section-text">
          <h2>OUR PARTNERS</h2>
         
        </div>
        <div className="featured">
          <div className="cont">
            <figure>
              <img src={Partner1} alt="partner image" />
              
            </figure>
          </div>

          <div className="cont">
            <figure>
              <img src={Partner2} alt="partner image" />
              
            </figure>
          </div>

          <div className="cont">
            <figure>
              <img src={Partner3} alt="partner image" />
              
            </figure>
          </div>

          <div className="cont">
            <figure>
              <img src={Partner4} alt="partner image" />
              
            </figure>
          </div>

          <div className="cont">
            <figure>
              <img src={Partner5} alt="partner image" />
              
            </figure>
          </div>

          <div className="cont">
            <figure>
              <img src={Partner6} alt="partner image" />
              
            </figure>
          </div>

          <div className="cont">
            <figure>
              <img src={Partner7} alt="partner image" />
              
            </figure>
          </div>

          <div className="cont">
            <figure>
              <img src={Partner8} alt="partner image" />
              
            </figure>
          </div>
        </div>

        {/* <div className="video-section">
          <iframe
            id="video"
            src="https://player.vimeo.com/video/323262733"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
            title="Video"
          ></iframe>
        </div> */}
      </section>
{/* 
      <section id="contact" className="contact-section">
        <div className="section-text">
          <h2>Get in touch</h2>
          <p>
            We would love to hear from you! <br /><br />
            If you would like to receive our monthly catalogue subscribe by filling in the form with your name and email address
          </p>
        </div>
        <div className="contact-info">
          <div className="form-box">
            <form id="form" className="contact-form" action="https://www.freecodecamp.com/email-submit">
              <label htmlFor="name" className="form-entry">
                Name <br />
                <input name="name" id="name" type="text" className="txt-box" placeholder="Enter name" required />
              </label>
              <label htmlFor="email" className="form-entry">
                Email <br />
                <input name="email" id="email" type="email" className="txt-box" placeholder="Enter email" required />
              </label>
              <label htmlFor="message" className="form-entry">
                Message <br />
                <textarea name="message" id="message" className="txt-box" placeholder="Optional"></textarea>
              </label>
              <br />
              <input className="btn" id="submit" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </section> */}

      
    </div>
  );
}

export default About;
