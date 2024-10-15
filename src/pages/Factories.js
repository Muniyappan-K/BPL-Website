import React from 'react';
import '../styles/factories.css'; // Custom CSS file for styling
 
 
const Factories = () => {
  return (
    <div>
     
     <section className="about-container"> <h1>FACTORIES ACROSS INDIA</h1>
     </section>
      <section className="factory-cards-wrapper">
        <div className="factory-card-grid-space">
          <div className="factory-num">01</div>
          <a
            className="factory-card"
            href="https://codetheweb.blog/2017/10/06/html-syntax/"
            style={{
              '--bg-img':
                'url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h1>Rudrapur, Uttarakhand</h1>
              <p>Factory 1</p>
              <div className="factory-date">2012</div>
              <div className="factory-tags">
                <div className="factory-tag">View More</div>
              </div>
            </div>
          </a>
        </div>
 
        <div className="factory-card-grid-space">
          <div className="factory-num">02</div>
          <a
            className="factory-card"
            href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/"
            style={{
              '--bg-img':
                'url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/basic-types-of-html-tags/cover.jpg)',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h1>Bhiwadi, Rajasthan</h1>
              <p>Factory 2</p>
              <div className="factory-date">2017</div>
              <div className="factory-tags">
                <div className="factory-tag">View More</div>
              </div>
            </div>
          </a>
        </div>
 
        <div className="factory-card-grid-space">
          <div className="factory-num">03</div>
          <a
            className="factory-card"
            href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/"
            style={{
              '--bg-img':
                'url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/links-images-about-file-paths/cover.jpg)',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h1>Hyderabad, Telangana</h1>
              <p>Factory 3</p>
              <div className="factory-date">2016</div>
              <div className="factory-tags">
                <div className="factory-tag">View More</div>
              </div>
            </div>
          </a>
        </div>
       
        <div className="factory-card-grid-space">
          <div className="factory-num">04</div>
          <a
            className="factory-card"
            href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/"
            style={{
              '--bg-img':
                'url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/links-images-about-file-paths/cover.jpg)',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h1>Greater Noida, UP</h1>
              <p>Factory 4</p>
              <div className="factory-date">2024</div>
              <div className="factory-tags">
                <div className="factory-tag">View More</div>
              </div>
            </div>
          </a>
        </div>
        
      </section>
    </div>
  );
};
 
export default Factories