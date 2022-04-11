import React from 'react';

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="mb-3 col-sm-12 col-md-6 col-lg-4 g-5">
      <div className="card text-dark" style={{ width: '18rem' }}>
        <div className="card-body">
          <img src={img} alt="" />
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Expert;
