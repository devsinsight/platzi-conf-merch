import { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Information.scss';

export const Information = () => {
  const { state, addToBuyer }: any = useContext(AppContext);
  const { cart } = state;
  const navigate = useNavigate()
  const form: any = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      address2: formData.get('address2'),
      country: formData.get('country'),
      'state': formData.get('state'),
      zip: formData.get('zip'),
      phone: formData.get('phone')
    }

    addToBuyer(buyer);
    navigate('/checkout/payment', { replace: true, state: state });
    
  }

  return (
    <div className='information'>
      <div className='Information-content'>
        <div className='Information-head'>
          <h2>Contact Information: </h2>
        </div>
        <div className='Information-form'>
          <form ref={form}>
            <input type='text' placeholder='Fullname' name='name' />
            <input type='text' placeholder='Email' name='email' />
            <input type='text' placeholder='Address' name='address' />
            <input type='text' placeholder='Address2' name='address2' />
            <input type='text' placeholder='City' name='city' />
            <input type='text' placeholder='Country' name='country' />
            <input type='text' placeholder='State' name='state' />
            <input type='text' placeholder='Zip Code' name='zip' />
            <input type='text' placeholder='Phone Number' name='phone' />
          </form>
        </div>
        <div className='Information-buttons'>
          <div className='Information-back'>
            <Link to='/checkout'>Back</Link>
          </div>

          <div className='Information-next'>
            <button type="button" onClick={handleSubmit}>Pay</button>
          </div>
        </div>
      </div>
      <div className='Information-sidebar'>
        <h3>Order: </h3>
        {cart.map((item: any) => (
          <div className='Information-item' key={item.title}>
            <div className='Information-element'>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
