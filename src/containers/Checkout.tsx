import '../styles/components/Checkout.scss';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

export const Checkout = () => {
  const { state, removeFromCart }: any = useContext(AppContext);
  const { cart } = state;

  console.log(cart)

  const handleRemove = (product: any) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator: number, currValue: any) => accumulator + currValue.price;
    const sum = cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <div className='Checkout'>
      <div className='Checkout-content'>
        { cart.length > 0 ? <h3>Order List</h3> : <h3>No Orders...</h3>}
        {cart.map((item: any) => (
          <div key={item.id} className='Checkout-item'>
            <div className='Checkout-element'>
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <button type='button' onClick={() => handleRemove(item)}>
              <i className='fas fa-trash-alt'></i>
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && 
        <div className='Checkout-sidebar'>
          <h3>{`Total price: $ ${handleSumTotal()}`}</h3>
          <Link to='/checkout/information'>
            <button type='button'>Continue Order</button>
          </Link>
        </div>
      }
    </div>
  );
};
