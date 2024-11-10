"use client";
import React, { useState, useEffect } from "react"; // Import useEffect
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false); // This will close the menu when the pathname changes
  }, [pathname]);

  return (
    <section className="section-one">
      <nav>
        <div className="logo">CAR FOR SALE</div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Close Button */}
        {isOpen && (
          <div className="close-btn" onClick={toggleMenu}>
            &times; {/* Cross icon */}
          </div>
        )}

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className={pathname === "/signup" ? "active" : ""}
            >
              Login/SignUp
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
