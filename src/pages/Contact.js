import React from 'react';
import '../styles/contact.css';
import Footer from '../components/footer/Footer';
const Contact = () => {
  return (
    <div className="contact-page-sec">
     <section className="about-container">
  <div className="contact-header">
    <h1>CONTACT US</h1>
    <p>We're here to help and answer any questions you may have. Feel free to reach out to us!</p>
  </div>
</section>

      
      <div className="contact-container">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-map-marked"></i>
                </div>
                <div className="contact-info-text">
                  <h2>Address</h2>
                  <span>Bhagwati products ltd, </span> 
                  <span>Tapukara, Rajasthan 301707</span> 
                </div>
              </div>            
            </div>          
          </div>          
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-info-text">
                  <h2>Contact</h2>
                  <span>info@bhagwatiproductsltd.com</span> 
                  <span>+91 9999 999 999</span>
                </div>
              </div>            
            </div>                
          </div>                
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-info-text">
                  <h2>Services</h2>
                  <span>Rudrapur, uttarakhand
Bhiwadi,</span>
                  <span> Rajasthan
                  Hyderabad, Telangana</span>
                </div>
              </div>            
            </div>          
          </div>          
        </div>
        <br/><br/>
        <div className="row">
          <div className="col-md-8">
            <div className="contact-page-form">
              <h2>Get in Touch</h2> 
              <form action="contact-mail.php" method="post">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Your Name" name="name"/>
                    </div>
                  </div>  
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="email" placeholder="E-mail" name="email" required/>
                    </div>
                  </div>                              
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Phone Number" name="phone"/>
                    </div>
                  </div>  
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Subject" name="subject"/>
                    </div>
                  </div>                
                  <div className="col-md-12 message-input">
                    <div className="single-input-field">
                      <textarea placeholder="Write Your Message" name="message"></textarea>
                    </div>
                  </div>                                                  
                  <div className="single-input-fieldsbtn">
                    <input type="submit" value="Send Now"/>
                  </div>                          
                </div>
              </form>   
            </div>      
          </div>
          
          <div className="col-md-4">        
            <div className="contact-page-map">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.1918880721587!2d76.8005220744726!3d28.110182807611064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4b8337d0353d%3A0x36185e26a736117d!2sBhagwati%20products%20ltd!5e0!3m2!1sen!2sin!4v1728930239109!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

            </div>          
          </div>        
        </div>
      </div>
     
    </div>
  );
};

export default Contact;
