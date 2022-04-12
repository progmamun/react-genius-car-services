import React from 'react';
import Lazy from '../../../images/lazy.webp';
const NotFound = () => {
  return (
    <div>
      <h2 className="text-info text-center">
        Mechanic is sleeping: <span className="text-danger">code: 404</span>
      </h2>
      <img src={Lazy} className="w-100" style={{ height: '1000px' }} alt="" />
    </div>
  );
};

export default NotFound;
