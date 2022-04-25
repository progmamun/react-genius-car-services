import React, { useEffect, useState } from 'react';
import axios from 'axios';
import auth from '../../firebase.init';
import useAuthState from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../api/axiosPrivate';

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      const url = `http://localhost:5000/order`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate('/login');
        }
      }
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
