import React from "react";
import Image from "next/image";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-sec">
      <div className="image-container">
        <Image
          src="/images/hero-car.png"
          alt="hero-image"
          width={500}
          height={650}
          className="hero-image"
        />
      </div>
      <div className="content">
        <h1 className="heading-h1">Pure Luxury</h1>
        <h2 className="product_name"></h2>
        <p className="pricing">&#36;3,879</p>
        <div className="btn-container">
          <button className="primary-btn">Discover</button>
          <button className="secondary-btn">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
