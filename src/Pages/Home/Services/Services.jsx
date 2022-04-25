import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://blooming-river-36741.herokuapp.com/service')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div id="services" className="container">
      <h2 className="services-title mt-5">Services</h2>
      <div className="services-container">
        {services.map(service => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
