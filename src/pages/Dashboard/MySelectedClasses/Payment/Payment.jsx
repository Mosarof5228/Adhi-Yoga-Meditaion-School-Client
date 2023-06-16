import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import useSelectedClass from '../../../../hooks/useSelectedClass';
import Checkout from './Checkout';

const Payment = () => {
    const [selectedCls] = useSelectedClass();
    const total = selectedCls.reduce((sum, cls) => sum + cls.price, 0);
    const price = parseFloat(total.toString()).toFixed(2);

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
    const { id } = useParams();
    const selectCls = selectedCls.find(cls => cls._id === id)
    return (
        <div>
            my payments
            <Elements stripe={stripePromise}>
                <Checkout selectedCls={selectCls} price={price} ></Checkout>
            </Elements>
        </div>
    );

};

export default Payment;