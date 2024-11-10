import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import classes from './paymentPage.module.css';

export default function PaymentPage() {
    const navigate = useNavigate();

    // Function to handle navigation back to home
    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className={classes.container}>
            <h1>Thank You for Placing Your Order!</h1>
            <p>Your order has been successfully placed.</p>
            <Button onClick={goToHome} text="Go to Home Page" />
        </div>
    );
}
