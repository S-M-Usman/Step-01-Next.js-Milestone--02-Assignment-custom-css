import React from "react";
import "./contact.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import {
  FaLocationDot,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <main>
      <section className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-wrapper">
            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button>Send Message</button>
              </form>
            </div>

            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>
                <FaPhone
                  style={{ transform: "scaleX(-1)" }}
                  className="Faphone"
                />
                +1 123 456 789
              </p>
              <p>
                <FaEnvelope className="FaEnvelope" />
                info@example.com
              </p>
              <p>
                <FaLocationDot className="FaLocation" />
                123 Street, City, Country
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
