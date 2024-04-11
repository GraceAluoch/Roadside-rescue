import React from "react";
import './Home.css';
export default function Home() {
    return (
           
           <>
           
            <div className="background-image">
                <div className="centered-input">
                    <div className="text">
                    <h1>CALL US ON</h1>
                    <p>+254732765876 OR +254724765098 </p>
                    <input type="text" placeholder="Enter location" />
                    </div>
                    
                </div>
            </div>
            {/* why chhose us section */}
            <div class="why-choose-us-container">
                <div className="title">
                   <h1>WHY CHOOSE US</h1>
                </div>
                

                <div class="feature-container">
                    <div class="feature">
                    <img src="icon1.png" alt="Feature 1" />
                    <h2>Expert Mechanics</h2>
                    <p>We have a team of expert mechanics with years of experience in the automotive industry.</p>
                    </div>

                    <div class="feature">
                    <img src="icon2.png" alt="Feature 2" />
                    <h2>State-of-the-art Equipment</h2>
                    <p>We use the latest state-of-the-art equipment to diagnose and repair your vehicle.</p>
                    </div>

                    <div class="feature">
                    <img src="icon3.png" alt="Feature 3" />
                    <h2>Competitive Pricing</h2>
                    <p>We offer competitive pricing on all of our services, so you can get the best value for your money.</p>
                    </div>

                    <div class="feature">
                    <img src="icon4.png" alt="Feature 4" />
                    <h2>Customer Satisfaction</h2>
                    <p>We pride ourselves on our customer satisfaction and will go above and beyond to ensure you are happy with our services.</p>
                    </div>
        </div>
</div>
           </>
        );
    }