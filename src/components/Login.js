import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="loginbox-container">
        <div class>Login</div>
        <input /><br/>
        <input />
        <button>Login</button>
        <Link to="">
          <div>Don't have account? Sign up</div>
        </Link>
      </div>
    </>
  );
}
