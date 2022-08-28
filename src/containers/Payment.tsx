import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import '../styles/components/Payment.scss';
import { useNavigate } from 'react-router-dom';

export const Payment = () => {
  const { state, addNewOrder }: any = useContext(AppContext);
  const navigate = useNavigate();
  const { cart } = state;

  const handleSumTotal = () => {
    const reducer = (accumulator: number, currValue: any) => accumulator + currValue.price;
    const sum = cart.reduce(reducer, 0);

    return sum;
  };

  // creates a paypal order
  const createOrder = (data: any, actions: any) => {
    return actions.order
      .create({
        purchase_units: cart.map((item: any) => ({
          reference_id: item.id,
          amount: {
            currency_code: 'USD',
            value: item.price,
          },
        })),
      })
      .then((orderID: string) => {
        console.log(orderID);
        //setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data: any, actions: any) => {
    console.log(data);
    return actions.order.capture().then((details: any) => {
      const { payer } = details;
      //setSuccess(true);
      addNewOrder(data);
      navigate('/checkout/success')
    });
  };

  //capture likely error
  const onError = (error: Record<string, unknown>) => {
    //setPaypalErrorMessage("An Error occured with your payment ");
    console.log(error);
  };

  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Order Summary: </h3>
        {cart &&
          cart.length > 0 &&
          cart.map((item: any) => (
            <div key={item.id} className='Payment-item'>
              <div className='Payment-element'>
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
            </div>
          ))}
        <div className='Payment-button'>
          <PayPalScriptProvider
            options={{
              'client-id':
                'AUUbOz00koxdTdOK9FDe603Lwe_eDFJ35m03kq8uiIWM1t2wmiTyoOFC130HhjTkrxSZtz8pe7OqVDfQ',
              intent: 'capture',
              currency: 'USD',
            }}
          >
            <PayPalButtons
              style={{ layout: 'vertical', shape: 'rect' }}
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
            ></PayPalButtons>
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};
