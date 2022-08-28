import { useState } from 'react';
import initialState from '../initialState';

export const useInitialState = () => {
    const [state, setState ]: any = useState(initialState);

    const addToCart = (payload: any) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const addToBuyer = (payload: any) => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const removeFromCart = (payload: any) => {
        setState({
            ...state,
            cart: state.cart.filter((items: any) => items.id !== payload.id)
        });
    }

    const addNewOrder = (payload: any) => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        });
    }


    return {
        addToCart,
        addToBuyer,
        removeFromCart,
        addNewOrder,
        state
    };
}