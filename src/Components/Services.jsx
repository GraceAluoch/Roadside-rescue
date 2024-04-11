import "./Services.css";
export default function Services() {
  return (
    <>
      {/* our services */}
      <div className="main-container">
        <div className="container">
          <div className="title">
            <h1>Our Services</h1>
          </div>

          {/* first row of services */}
          <div className="service-cards">
            <div className="card">
              <img src="img2.jpg" alt="" />
              <strong>Engine Diagnostics</strong>
            </div>

            <div className="card">
              <img src="img3.jpg" alt="" />
              <strong>Tire and wheel services</strong>
            </div>

            <div className="card">
              <img src="img4.jpg" alt="" />
              <strong>Brake repair</strong>
            </div>
          </div>
          {/* second row */}
          <div className="service-cards">
            <div className="card">
              <img src="img5.jpg" alt="" />
              <strong>Heating and cooling</strong>
            </div>

            <div className="card">
              <img src="img6.jpg" alt="" />
              <strong>Belts and hoses</strong>
            </div>

            <div className="card">
              <img src="img7.jpg" alt="" />
              <strong>Lube, oil and filters</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
