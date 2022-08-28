import { useContext } from 'react';
import { Map } from '../components/Map';
import { AppContext } from '../context/AppContext';
import { useGoogleAddress } from '../hooks/useGoogleAddress';
import '../styles/components/Success.scss';

export const Success = () =>
{
    const { state }: any = useContext(AppContext);
    const { buyer } = state;
    const location = useGoogleAddress(buyer[0].address);


    return (
        <div className="success">
            <div className="Success-content">
                <h2>{buyer.name}, Thanks you</h2>
                <span>Your order will be send in 3 days</span>
                <div className="Success-map">
                   <Map data={location} />
                </div>
            </div>
        </div>
    );
}