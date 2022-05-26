import React from "react";
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <footer className="main-footer">
          <div className="left-footer">
            <h3>Explore more</h3>
            <a href="#.com">FAQs</a>
            <a href="#.com">COVID-Facts</a>
            <a href="#.com">Blog</a>
            <a href="#.com">Guidelines</a>
            <a href="#.com">Catalog</a>
            <a href="#.com">Help</a>
            <a href="#.com">Articles</a>
          </div>
          <div className="mid-footer">
            <h3>Read more</h3>
            <a href="#about.com">About Us</a>
            <a href="#.com">Our Policy</a>
            <a href="#.com">Terms & Conditions</a>
            <a href="#.com">Contact Us</a>
            <a href="#.com">Careers</a>
            <a href="#.com">Impressum</a>
            <a href="#.com">Disclaimer</a>
          </div>
          <div className="social-media-icons">
            <h3>Follow us</h3>
            <a href="facebook.com" class="fa fa-facebook"></a>
            <a href="twitter.com" class="fa fa-twitter"></a>
            <a href="linkedin.com" class="fa fa-linkedin"></a>
            <a href="youtube.com" class="fa fa-youtube"></a>
            <a href="instagram.com" class="fa fa-instagram"></a>
          </div>
        </footer>
        <p className="copyright">
          ©2022 owned by Kwame & Andrea Co. Limited | All rights reserved
        </p>
      </div>
    </>
  );
}
