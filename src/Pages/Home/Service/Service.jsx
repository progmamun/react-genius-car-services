import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;

  const navigate = useNavigate();
  const navigateToServiceDetail = id => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <h1>{name}</h1>
      <p>Price: ${price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button
        className="btn btn-info"
        onClick={() => navigateToServiceDetail(_id)}
      >
        Book: {name}
      </button>
    </div>
  );
};

export default Service;
