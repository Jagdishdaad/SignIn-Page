import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import validator from "validator";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Strong Password");
    } else {
      setErrorMessage("Not Strong Password");
    }
  };
  return (
    <div className="signupbox">
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          placeholder="First Name"
          style={{ marginLeft: "15vh" }}
          required="required"
        ></input>
        <br />
        <input
          type="text"
          placeholder="Last Name"
          style={{ marginLeft: "15vh" }}
          required="required"
        ></input>
        <br />
        <input
          type="email"
          placeholder="Email "
          style={{ marginLeft: "15vh" }}
          required="required"
        ></input>
        <br />
        <pre>
          <input
            type="text"
            onChange={(e) => validate(e.target.value)}
            placeholder="Password"
          ></input>
          <p style={{ fontSize: "10px" }}>
            Password must contain uppercase, lowercase, number and special
            charecter
          </p>
          <br />
          <span
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {errorMessage}
          </span>
        </pre>
        <br />
        <input
          type="text"
          placeholder="Address"
          style={{ marginLeft: "15vh" }}
          required="required"
        ></input>
        <br />
        <input
          type="tel"
          placeholder="Mobile Number XXX-XXX-XXXX"
          style={{ marginLeft: "15vh" }}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        ></input>

        <br />
        <button>Sign Up</button>
      </form>
      <Link id="link1" to="/">
        Back to Sign in
      </Link>
    </div>
  );
};

export default Signup;
