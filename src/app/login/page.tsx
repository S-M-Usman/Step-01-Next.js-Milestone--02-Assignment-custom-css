import React from "react";
import "./login.css";
import Link from "next/link";

const Login = () => {
  return (
    <main>
      <section className="login-section">
        <h1>Login</h1>
        <form action="#">
          <input type="text" placeholder="UserName" />
          <input type="password" placeholder="Password" />
          <div className="recover">
            <Link href="#">Forgot Password?</Link>
          </div>
        </form>

        <button className="login-button">Login</button>
        <div className="member">
          Not a member? <Link href="/signup">Register Now</Link>
        </div>
      </section>
    </main>
  );
};

export default Login;
