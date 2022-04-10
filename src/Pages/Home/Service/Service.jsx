import React from 'react';

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div>
      <img src={img} alt="" />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>
        <small>${price}</small>
      </p>
    </div>
  );
};

export default Service;
