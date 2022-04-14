import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error1] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate('/login');
  };
  // if (user) {
  //   navigate('/home');
  // }
  const handleRegister = async event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;
    // if (agree) {
    //   createUserWithEmailAndPassword(email, password);
    // }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate('/home');
  };
  return (
    <div className="register-form">
      <h2 className="text-center text-primary mt-3">Register Now</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Email address" id="" />
        <input type="password" name="password" placeholder="password" id="" />
        <input
          type="checkbox"
          onClick={() => setAgree(!agree)}
          name="terms"
          id="terms"
        />
        {/* <label
          className={agree ? 'ps-2' : 'ps-2 text-danger'}
          htmlFor="terms"
        >
          Accept Genius Car Terms and Conditions
        </label> */}
        <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">
          Accept Genius Car Terms and Conditions
        </label>

        <input
          disabled={!agree}
          className="w-50 mx-auto btn btn-primary mt-2"
          type="submit"
          value="Register"
        />
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
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
