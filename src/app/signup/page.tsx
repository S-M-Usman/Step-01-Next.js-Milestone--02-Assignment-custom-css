import React from "react";
import "./signup.css";
import Link from "next/link";

const SignUp = () => {
  return (
    <main>
      <section className="signup-section">
        <h1>Sign Up</h1>
        <form action="#">
          <input type="text" placeholder="UserName" />
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Re-Enter" />
        </form>

        <div className="terms">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">
            I agree to these <Link href="#">Terms & Condition </Link>{" "}
          </label>
        </div>
        <button className="signup-button">Sign Up</button>
        <div className="member">
          Already a member? <Link href="/login">Login Here</Link>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
