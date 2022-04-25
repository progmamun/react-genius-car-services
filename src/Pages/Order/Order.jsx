import React, { useEffect, useState } from 'react';
import axios from 'axios';
import auth from '../../firebase.init';
import useAuthState from 'react-firebase-hooks/auth';

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const url = `http://localhost:5000/order`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, []);
  return (
    <div>
      <h2>this is order components</h2>
    </div>
  );
};

export default Order;
