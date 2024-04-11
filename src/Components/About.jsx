import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about-section">
        <div className="about-container">
          <div className="about-wrapper">
            <div className="text">
              <h1>About Us</h1>
              <p>
                At our garage, we understand that a vehicle breakdown can happen
                at any time and often when you least expect it. That's why we
                offer comprehensive roadside repair services to get you back on
                the road as quickly and safely as possible.
              </p>
              <p>
                Our team of experienced mechanics is equipped to handle a wide
                range of on-the-spot repairs, from flat tires and battery issues
                to more complex engine troubles. In addition to our emergency
                repair services, we provide regular maintenance, tune-ups, and
                diagnostics to ensure your car runs smoothly year-round.
              </p>
              <p>
                Trust us to be your one-stop shop for all your automotive needs,
                where quality service and customer satisfaction are our top
                priorities. Whether you're stranded on the side of the road or
                planning routine maintenance, we're here to help keep your
                vehicle in top condition.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Mission and vision */}
      <div className="mission-container">
        <div className="mission-vission-wrapper">
          <div className="text">
            <h3>Our Mission</h3>
            <p>
              Connecting Breakdowns to Breakthroughs, One Roadside Rescue at a
              Time.
            </p>
            <h3>Our Vision</h3>
            <p>
              To create a safer and more connected world on the road, where
              breakdowns are not obstacles but opportunities for us to shine.{" "}
              <br />A World Where Cars Run Like New Every Day.
            </p>
          </div>
        </div>
      </div>

      <div className="main-service-container">
        <div className="title">
          <h2>Services Overview</h2>
        </div>

        <div className="service-container">
          <div className="service">
            <img src="icon5.png" alt="" />
            <h5>On-site trouble shooting for various vehicles</h5>
          </div>

          <div className="service">
            <img src="icon6.png" alt="" />
            <h5>
              Minor repairs and maintenance tasks such as battery replacement
            </h5>
          </div>

          <div className="service">
            <img src="icon7.png" alt="" />
            <h5>Emergency roadside assistance i.e jumpstarting</h5>
          </div>

          <div className="service">
            <img src="icon8.png" alt="" />
            <h5>
              Coordination of towing services for more complex issues that
              cannot be resolved on-site
            </h5>
          </div>

          <div className="service">
            <img src="icon9.png" alt="" />
            <h5>
              Provision of basic automotive supplies and spares parts for common
              repairs
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
