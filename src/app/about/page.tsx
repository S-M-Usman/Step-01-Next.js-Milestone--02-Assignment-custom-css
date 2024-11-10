import React from "react";
import "./about.css";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <main>
      <div className="heading">
        <h1 className="about-h1">About Us</h1>
        <p>
          Experience cars that unite power with style, where every drive tells a
          story of timeless sophistication
        </p>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-image">
            <Image
              src="/images/bmw.png"
              alt="about-img"
              width={450}
              height={450}
              className="image"
            />
          </div>
          <div className="about-content">
            <h2 className="about-h2">Drive Elegance, Drive Distinction</h2>
            <p>
              At AutoElite, we believe a car is more than just
              transportation—it’s an expression of your lifestyle and ambitions.
              Passionate about automobiles, we offer a carefully curated
              selection of premium vehicles that combine cutting-edge technology
              with superior craftsmanship. Discover the vehicle that matches
              your drive and take on the road with confidence and style.
            </p>
            <Link href="" className="read-more">
              Read More
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
