import React from 'react';
import './footer.css'; // Import the CSS file
 
function Footer() {
  return (
   
      <footer id="site-footer">
 
<section class="horizontal-footer-section" id="footer-top-section">
    <div id="footer-logo">
      
        &nbsp;Bhagwati Products Limited.
    </div>
   
   
</section>
 
<section class="horizontal-footer-section" id="footer-middle-section">
    <div id="footer-about" class="footer-columns footer-columns-large">
        <h1>Our Address</h1>
        <address>
            <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/marker.png"></img>Bhagwati products ltd, Tapukara, Rajasthan 301707</p>
            <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/phone.png"></img>+91 9999 999 999</p>
            <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/mail.png"></img>info@bhagwatiproductsltd.com</p>
            
        </address>
        {/* <h1> Our Newsletter</h1>
        <a href="#" class="footer-button" role="button">Subscribe</a> */}
    </div>
    <div class="footer-columns">
        <h1>Overview</h1>
        <ul class="footer-column-menu" role="menu">
            <li class="footer-column-menu-item" role="menuitem">
                <a href="#" class="footer-column-menu-item-link">About Us </a>
            </li>
            <li class="footer-column-menu-item" role="menuitem">
                <a href="#" class="footer-column-menu-item-link">Factories</a>
            </li>
            <li class="footer-column-menu-item" role="menuitem">
                <a href="#" class="footer-column-menu-item-link">Blog</a>
            </li>
            <li class="footer-column-menu-item" role="menuitem">
                <a href="#" class="footer-column-menu-item-link">Contact</a>
            </li>
        </ul>
    </div>
    <div class="footer-columns">
        <h1>Resources</h1>
        <ul class="footer-column-menu" role="menu">
            <li class="footer-column-menu-item" role="menuitem">
                <a href="#" class="footer-column-menu-item-link">FAQ</a>
            </li>
            <li class="footer-column-menu-item" role="menuitem">
                <a href="#" class="footer-column-menu-item-link">Media</a>
            </li>
            <li class="footer-column-menu-item" role="menuitem">
                <a href="#" class="footer-column-menu-item-link">Guides</a>
            </li>
            <li class="footer-column-menu-item" role="menuitem">
                <a href="#" class="footer-column-menu-item-link">Free Resources</a>
            </li>
            <li class="footer-column-menu-item" role="menuitem">
                <a href="#" class="footer-column-menu-item-link">Testimonials</a>
            </li>
        </ul>
    </div>
    <div class="footer-columns">
        <h1>Information</h1>
        <ul class="footer-column-menu" role="menu">
            <li class="footer-column-menu-item" role="menuitem">
                <a href="#" class="footer-column-menu-item-link">About Us</a>
            </li>
            <li class="footer-column-menu-item" role="menuitem">
                <a href="#" class="footer-column-menu-item-link">Terms of Use</a>
            </li>
            <li class="footer-column-menu-item">
                <a href="#" class="footer-column-menu-item-link" role="menuitem">Legal Information</a>
            </li>
            <li class="footer-column-menu-item" role="menuitem">
                <a href="#" class="footer-column-menu-item-link">Message Us</a>
            </li>
            <li class="footer-column-menu-item" role="menuitem">
                <a href="#" class="footer-column-menu-item-link">Leave a Feedback</a>
            </li>
        </ul>
    </div>
</section>
 
<section class="horizontal-footer-section" id="footer-bottom-section">
    <div id="footer-copyright-info">
        &copy; Bhagwati Products Limited. All rights reserved.
    </div>
    <div id="footer-social-buttons">
        <img src="https://img.icons8.com/ios-filled/25/999999/facebook--v1.png"/>
        <img src="https://img.icons8.com/ios-filled/25/999999/telegram-app.png"/>
        <img src="https://img.icons8.com/ios-filled/25/999999/pinterest--v1.png"/>
        <img src="https://img.icons8.com/ios-filled/25/999999/instagram--v1.png"/>
    </div>
</section>
 
</footer>
 
 
  );
}
 
export default Footer;
 
