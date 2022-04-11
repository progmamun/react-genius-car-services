import React from 'react';

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div
      className="card text-dark bg-info mb-3 col-sm-12 col-md-6 col-lg-4 gx-5"
      style={{ width: '18rem' }}
    >
      <div className="card-body">
        <img src={img} alt="" />
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
};

export default Expert;
