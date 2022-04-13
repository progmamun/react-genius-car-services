import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <h3>welcome to details: {serviceId}</h3>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-info">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
