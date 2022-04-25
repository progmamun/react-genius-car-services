import React from 'react';
import Google from '../../../images/social/google-icon.png';
import Fb from '../../../images/social/fb-logo.png';
import Git from '../../../images/social/25231.png';
import auth from '../../../firebase.init';
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [token] = useToken(user || user1);
  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  let errorElement;
  // let errorElement = '';

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (token) {
    navigate(from, { replace: true });
  }
  if (loading || loading1) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: '1px' }} className="w-50 bg-warning"></div>
        <p className="mt-3 px-2">or</p>
        <div style={{ height: '1px' }} className="w-50 bg-warning"></div>
      </div>
      {errorElement}
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
        <button
          onClick={() => signInWithGithub()}
          className="w-50 p-3 btn btn-info d-block mx-auto mt-2"
        >
          <img style={{ width: '30px' }} src={Git} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
