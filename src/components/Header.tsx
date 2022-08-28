import { Link } from 'react-router-dom';
import '../styles/components/Header.scss';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

export const Header = () => {
  const {state}: any = useContext(AppContext);
  const { cart } = state;
  return (
    <div className='Header'>
      <h1 className='Header-title'>
        <Link to='/'>PlaziConf Merch</Link>
      </h1>
      <div className='Header-checkout'>
        <Link to='/checkout'>
            <i className="fas fa-shopping-basket"></i>
        </Link>
        {cart && cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};
