import React from "react";
import './Footer.css';

export default function Footer(){
    return(
        <>
    <footer class="footer">
  <div class="footer-container">
    <div class="footer-column">
      <h3 class="footer-title">Contact Us</h3>
      <p class="footer-text">RR  Plaza<br/>Ngong Lane, Nairobi</p>
      <p class="footer-text">Phone: +254732765876 </p>
      <p class="footer-text">Phone: +254724765098</p>
      <p class="footer-text">Email: roadsiderescue.rr.ac.ke</p>
    </div>
    <div class="footer-column">
      <h3 class="footer-title">Hours of Operation</h3>
      <p class="footer-text">Monday - Friday: 8:00am - 6:00pm</p>
      <p class="footer-text">Saturday: 8:00am - 2:00pm</p>
      <p class="footer-text">Sunday: Closed</p>
    </div>
    <div class="footer-column">
      <h3 class="footer-title">Social Media</h3>
      <ul class="footer-social">
        <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
        <li><a href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter-square"></i></a></li>
        <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube-square"></i></a></li>
      </ul>
    </div>
  </div>
  <div class="footer-copyright">
    <p class="footer-text">Copyright © 2023 Car Garage. All rights reserved.</p>
  </div>
</footer>
</>
)
}
