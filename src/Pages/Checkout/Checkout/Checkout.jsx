import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import useState from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import axios from 'axios';

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);

  /* const [user, setUser] = useState({
    name: 'Al Mamun Khan',
    email: 'mamun@gmail.com',
    address: 'Pabna',
    phone: '0174447444',
  });

  const handleAddressChange = event => {
    const { address, ...rest } = user;
    const newAddress = event.target.value;
    const newUser = { address: newAddress, ...rest };
    setUser(newUser);
  }; */

  const handlePlaceOrder = event => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios.post('http://localhost:5000/order', order).then(response => {
      const { data } = response;
      if (data.insertedId) {
        toast('Your order is booked!!!');
        event.target.reset();
      }
    });
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please Order:{service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          value={user?.displayName}
          readOnly
          className="w-100 mb-2"
          type="text"
          name="name"
          placeholder="name"
          required
          id=""
        />
        <br />
        <input
          value={user?.email}
          readOnly
          disabled
          className="w-100 mb-2"
          type="email"
          name="Email"
          placeholder="Enter Your Email"
          required
          id=""
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          value={service.name}
          name="service"
          placeholder="service"
          required
          id=""
        />
        <br />
        <input
          className="w-100 mb-2"
          // onChange={handleAddressChange}
          type="text"
          name="address"
          placeholder="Address"
          autoComplete="off"
          required
          id=""
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="number"
          placeholder="phone number"
          required
          id=""
        />
        <br />
        <input className="btn btn-info" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
