import React from 'react';
import Google from '../../../images/social/google-icon.png';
import Fb from '../../../images/social/fb-logo.png';
import Git from '../../../images/social/25231.png';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  // let errorElement = '';

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate('/home');
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: '1px' }} className="w-50 bg-warning"></div>
        <p className="mt-3 px-2">or</p>
        <div style={{ height: '1px' }} className="w-50 bg-warning"></div>
      </div>

      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="w-50 p-3 btn btn-info d-block mx-auto"
        >
          <img src={Google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="w-50 p-3 btn btn-info d-block mx-auto mt-2">
          <img style={{ width: '30px' }} src={Fb} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="w-50 p-3 btn btn-info d-block mx-auto mt-2">
          <img style={{ width: '30px' }} src={Git} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
