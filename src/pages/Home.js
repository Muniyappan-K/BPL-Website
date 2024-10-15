import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { color, motion } from 'framer-motion';
import '../styles/home.css';
import img1 from '../assets/images/DJI_0176.JPG';
import img2 from '../assets/images/DSC_2491.JPG';
import img3 from '../assets/images/DSC_2538.JPG';
import img4 from '../assets/images/SAG_5305.JPG';
import acer from '../assets/images/Acer1.jpg';
import ac from '../assets/images/AC.jpg';
import Smartwatch from '../assets/images/Smart.webp';
import Plastic from '../assets/images/Plastic.webp';
import Laptop from '../assets/images/Laptop.webp';
import LED from '../assets/images/LED.jpg';
import Mobile from '../assets/images/Mobile.png';
import TWS from '../assets/images/TWS.webp';
import partner1 from '../assets/images/Acer.jpg';
import partner2 from '../assets/images/Amstrad-1.jpg';
import partner3 from '../assets/images/Compaq.jpg';
import partner4 from '../assets/images/Infinix.jpg';
import partner5 from '../assets/images/ITEL.jpg';
import partner6 from '../assets/images/Jio.jpg';
import partner7 from '../assets/images/Sun-Direct-1.jpg';
import partner8 from '../assets/images/Play (1) - Copy.jpg';
const Home = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
 
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your email submission logic here (e.g., API call)
        setSubmitted(true);
    };
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
 
    const sections = [
      {
          title: 'A PARTNERSHIP PAR EXCELLENCE',
          image: img3,
          story: `A leading India manufacturer and assembler of innovative electronics. We believe in creating lasting value for our clients through superior product quality backed by competitive pricing models.`,
      },
        {
            title: 'A PARTNERSHIP PAR EXCELLENCE',
            image: img1,
            story: `A leading India manufacturer and assembler of innovative electronics. We believe in creating lasting value for our clients through superior product quality backed by competitive pricing models.`,
        },
        {
            title: 'A PARTNERSHIP PAR EXCELLENCE',
            image: img2,
            story: `A leading India manufacturer and assembler of innovative electronics. We believe in creating lasting value for our clients through superior product quality backed by competitive pricing models.`,
        },
        {
            title: 'A PARTNERSHIP PAR EXCELLENCE',
            image: img4,
            story: `A leading India manufacturer and assembler of innovative electronics. We believe in creating lasting value for our clients through superior product quality backed by competitive pricing models.`,
        },
    ];
 
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === sections.length - 1 ? 0 : prevIndex + 1
        );
    };
 
    // Automatically transition to the next slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(handleNext, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval); // Cleanup
    }, []);
 
    // Handle dot click to navigate directly to a slide
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };
 
    const [productIndex, setProductIndex] = useState(0); // Track the first visible product
 
    const products = [
        { name: 'Mobile', image: Mobile, description: 'Latest smartphone with advanced features.' },
        { name: 'Acer Tablet', image: acer, description: 'A vibrant 4K LED TV for amazing visuals.' },
        { name: 'Plastic Injection Moulding', image: Plastic, description: 'Fast and efficient wireless charging solution.' },
        { name: 'Smart Watch', image: Smartwatch, description: 'Portable speaker with immersive sound.' },
        { name: 'TWS', image: TWS, description: 'Lightweight laptop with powerful performance.' },
        { name: 'Ac Idu & Odu Assembly', image: ac, description: 'Stylish smartwatch with health tracking.' },
        { name: 'LED TV', image:LED, description: 'Experience the next-gen gaming console.' },
        { name: 'Laptop', image: Laptop, description: 'Versatile tablet for work and entertainment.' },
    ];
 
    // Handle auto-scrolling every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setProductIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 3000); // Change every 3 seconds
 
        return () => clearInterval(interval); // Cleanup on unmount
    }, [products.length]);
 
    // Compute the visible products (3 at a time)
    const visibleProducts = [
        products[productIndex % products.length],
        products[(productIndex + 1) % products.length],
        products[(productIndex + 2) % products.length],
    ];
   
    const timelineData = [
        {
          year: '2021-23',
          content:
            'Air-conditioner / HE & Paint shop / Press shop / Mobile Phone / Tablet PC / TWS / Smartwatch / Laptop',
          icon: '🌬️',
        },
        {
          year: '2012-13',
          content: 'Started production of LED TV, Tablet PC at Rudrapur Plant',
          icon: '📺',
        },
        {
          year: '2013-14',
          content:
            'Started production of Smartphones / Tablet PC / Backward integration of LED TV / 3G/4G Internet dongle / Speakers & Sound Bars',
          icon: '📱',
        },
        {
            year: '2021-23',
            content:
              'Air-conditioner / HE & Paint shop / Press shop / Mobile Phone / Tablet PC / TWS / Smartwatch / Laptop',
            icon: '🌬️',
          },
          {
            year: '2012-13',
            content: 'Started production of LED TV, Tablet PC at Rudrapur Plant',
            icon: '📺',
          },
          {
            year: '2013-14',
            content:
              'Started production of Smartphones / Tablet PC / Backward integration of LED TV / 3G/4G Internet dongle / Speakers & Sound Bars',
            icon: '📱',
          },
      ];
 
    return (
        <main>
            <div className="home-container">
    <section
        className="home-cover-sect"
        style={{
            backgroundImage: `url(${sections[currentIndex].image})`,
            backgroundSize: 'cover', // Cover the entire section
            backgroundPosition: 'center', // Center the image
            transition: 'background-image 0.5s ease-in-out', // Smooth transition between images
        }}
    >
        <div className="home-section-text">
            <h1>{sections[currentIndex].title}</h1>
            <p>{sections[currentIndex].story}</p>
        </div>
    </section>

    {/* Dots Navigation */}
    <div className="home-dots-container">
        {sections.map((_, index) => (
            <span
                key={index}
                className={`home-dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)} // Set the currentIndex on click
            />
        ))}
    </div>
</div>

            <div className="home-container1">
                <img src="https://makemydesigns.in/bhagwati-web/wp-content/uploads/2023/08/about.jpg" alt="Description of image" className="home-image" />
                <div className="home-content">
                    <h1>
                        Welcome To <span style={{ color: 'green' }}>Bhagwati</span>
                    </h1>
                    <p>Bhagwati Products Limited is a renowned and esteemed Indian manufacturer and assembler of innovative electronic items and telecommunication devices. With a rich history dating back to its inception in 2002, Bhagwati has consistently strived to provide customers with cutting-edge technology solutions. Our diverse portfolio includes mobile phones, consumer electronics, LED TVs, batteries, and chargers. To date, we have proudly manufactured over 40 million phones and 3 million TVs, showcasing our unwavering commitment to staying ahead of the technological curve.</p>
                    <button className="home-button">
                        View More
                    </button>
                </div>
            </div>
           
            <div className="home-product-slider">
    <h1 className="home-product-subheading">Explorer</h1>
    <h1 className="home-product-heading">Our Divisions</h1>
    <div className="home-product-track">
        {products.concat(products).map((product, index) => (
            <div key={index} className="home-product">
                <div className="home-product-image-container">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="home-product-image"
                    />
                </div>
                <div className="home-product-info">
                    <h3 className="home-product-name">{product.name}</h3>
                    <p className="home-product-description">{product.description}</p>
                </div>
            </div>
        ))}
    </div>
</div>

            <section id="nayma-timeline" class="nayma-container">
    <div class="nayma-timeline-block">
        <div class="nayma-timeline-img">
        </div>
        <div class="nayma-timeline-content">
            <h2>2012-13</h2>
            <p >Started production of LED TV ,Tablet PC at Rudrapur Plant</p>
        </div>
    </div>
    <div class="nayma-timeline-block">
        <div class="nayma-timeline-img">
        </div>
        <div class="nayma-timeline-content">
            <h2>2013-14</h2>
            <p>Started production of Smartphones / Tablet PC / backward integration of LED TV / 3G/4G Internet dongle Speakers & Sound Bars</p>
        </div>
    </div>
    <div class="nayma-timeline-block">
        <div class="nayma-timeline-img">
        </div>
        <div class="nayma-timeline-content">
            <h2>2014-15</h2>
            <p>New Factory at Hyderabad</p>
        </div>
    </div>
    <div class="nayma-timeline-block">
        <div class="nayma-timeline-img">
        </div>
        <div class="nayma-timeline-content">
            <h2>2016-17</h2>
            <p>New Factory at Bhiwadi</p>
        </div>
    </div>
    <div class="nayma-timeline-block">
        <div class="nayma-timeline-img">
        </div>
        <div class="nayma-timeline-content">
            <h2>2017-18</h2>
            <p>Addition of high speed SMT & Wave soldering lines</p>
        </div>
    </div>
    <div class="nayma-timeline-block">
        <div class="nayma-timeline-img">
        </div>
        <div class="nayma-timeline-content">
            <h2>2018-20</h2>
            <p>Moulding machine of capa.160/250/650T in phase-1</p>
        </div>
    </div>
    <div class="nayma-timeline-block">
        <div class="nayma-timeline-img">
        </div>
        <div class="nayma-timeline-content">
            <h2>2021-23</h2>
            <p>Air-conditioner / HE & Paint shop / Press shop / Mobile Phone / Tablet PC /TWS /Smartwatch/Laptop</p>
        </div>
    </div>
</section>
 
                <div className='py-5'>
                    <center><h1>
                        Factories <span style={{ color: 'green' }}>Across India</span>
                    </h1>
                    <img src="https://makemydesigns.in/bhagwati-web/wp-content/uploads/2024/03/map-1.jpg"></img></center>
                </div>
                <div class="maindiv">
        <div class="innerdiv">
           
           
            <div class="divgroup">
               
                <div class="eachdiv">
                   
                    <img src="" alt="Img"></img>
                    <h3>
                    Rudrapur,Uttarakhand</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div class="eachdiv">
                   
                    <img src="" alt="Img"></img>
                    <h3>
                    Bhiwadi ,Rajasthan</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div class="eachdiv">
                   
                    <img src="" alt="Img"></img>
                    <h3>
                    Hyderabad, Telangana</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div class="eachdiv">
                   
                    <img src="" alt="Img"></img>
                    <h3>Noida</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
            </div>
           
        </div>
       
    </div>
    <div id="newsletter-social">
            <div id="newsletter">
                <h3 className="center">We Are Here To Answer Your Questions 24/7</h3>
                <p className="deals">NEED A CONSULTATION?</p>
               
                {submitted ? (
                    <p>Thank you !!</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br></br>
                        <button type="submit">Get A Quote</button>
                    </form>
                )}
            </div>
        </div>
 
        <div class="logo-slider py-5">
        <center><h1>
                        Our<span style={{ color: 'green' }}> Partners</span>
                    </h1></center>
        <div class="logo-slide-track">
           
        <div class="slide">
            <img src={partner1} alt="" />
        </div>
        <div class="slide">
            <img src={partner2} alt="" />
        </div>
        <div class="slide">
            <img src={partner3} alt="" />
        </div>
        <div class="slide">
            <img src={partner4} alt="" />
        </div>
        <div class="slide">
            <img src={partner5} alt="" />
        </div>
        <div class="slide">
            <img src={partner6} alt="" />
        </div>
        <div class="slide">
            <img src={partner7} alt="" />
        </div>
        <div class="slide">
            <img src={partner8} alt="" />
        </div>
        
        &nbsp;  &nbsp;  &nbsp;  &nbsp;
        <div class="slide">
            <img src={partner1} alt="" />
        </div>
        <div class="slide">
            <img src={partner2} alt="" />
        </div>
        <div class="slide">
            <img src={partner3} alt="" />
        </div>
        <div class="slide">
            <img src={partner4} alt="" />
        </div>
        <div class="slide">
            <img src={partner5} alt="" />
        </div>
        <div class="slide">
            <img src={partner6} alt="" />
        </div>
        <div class="slide">
            <img src={partner7} alt="" />
        </div>
        <div class="slide">
            <img src={partner8} alt="" />
        </div>
        
    </div>
    </div>
        </main>
    );
};
 
export default Home;
 