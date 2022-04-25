import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import useState from 'react';

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  const [user, setUser] = useState({
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
  };
  return (
    <div>
      <h2>Please Order:{service.name}</h2>
      <form>
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          placeholder="name"
          required
          id=""
        />
        <br />
        <input
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
          onChange={handleAddressChange}
          type="text"
          name="address"
          placeholder="Address"
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
