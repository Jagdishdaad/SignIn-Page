import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  return (
    <div className="signinbox">
      <h1>Sign in</h1>

      <form>
        <label>
          <h3>Email</h3>
          <input type="email" required="required" />
        </label>

        <label>
          <h3>Password</h3>
          <input type="password" required="required" />
        </label>
        <br />
        <button>Sign in</button>
        <Link id="link1" to="/signup">
          Create account
        </Link>
      </form>
    </div>
  );
};

export default Signin;
