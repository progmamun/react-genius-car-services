import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login');
  };
  const handleRegister = event => {
    event.preventDefault();
  };
  return (
    <div className="register-form">
      <h2 className="text-center text-primary mt-3">Register Now</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Email address" id="" />
        <input type="password" name="password" placeholder="password" id="" />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already Have an account?{' '}
        <Link
          to="/login"
          className="text-warning pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
