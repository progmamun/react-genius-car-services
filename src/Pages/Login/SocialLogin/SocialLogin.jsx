import React from 'react';

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: '1px' }} className="w-50 bg-warning"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: '1px' }} className="w-50 bg-warning"></div>
      </div>

      <button className='w-50 p-3 btn btn-info'>Google Sign In</button>
    </div>
  );
};

export default SocialLogin;
