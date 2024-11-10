import React from "react";
import "./Arrivals.css";
import Image from "next/image";

const Arrivals = () => {
  return (
    <main className="main-arrival-sec">
      <section className="arrival-sec">
        <h2 className="arrival-sec-h2">New Arrivals</h2>
        <div className="card-container">
          <div className="card">
            <Image
              src="/images/audi1.png"
              alt="card-image"
              width={320}
              height={320}
              className="card-image"
            />
            <h2>Audi</h2>
            <p className="card-pricing">&#36;161,395</p>
            <button className="arrivals-btn">Discover</button>
          </div>

          <div className="card">
            <Image
              src="/images/Ferrari.png"
              alt="card-image"
              width={320}
              height={320}
              className="card-image"
            />
            <h2>Ferrari</h2>
            <p className="card-pricing">&#36;250,000</p>
            <button className="arrivals-btn">Discover</button>
          </div>

          <div className="card">
            <Image
              src="/images/Bugatti.png"
              alt="card-image"
              width={320}
              height={320}
              className="card-image"
            />
            <h2>Bugatti</h2>
            <p className="card-pricing">&#36;5.1 million</p>
            <button className="arrivals-btn">Discover</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Arrivals;
