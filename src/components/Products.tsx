import { Product } from "./Product";
import '../styles/components/Products.scss';
import { useContext } from "react";
import {AppContext} from '../context/AppContext';

export const Products = () =>
{
    const {state, addToCart}: any = useContext(AppContext);
    const { products } = state;
    const handleAddToCart = (product: any) => {
        addToCart(product);
    }
    return (
        <div className="Products">
            <div className="Products-items">
                {products.map((product: any)=> (
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    );
}
