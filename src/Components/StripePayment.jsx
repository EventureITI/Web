import React from 'react'
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe("pk_test_51Pw0DIKNB1qa5niHFcBfkGral2f1ZSbRuOaqvO5w2c3oqZDDaJKKPDHKSXdiQV56Iote19LpvN3gTUcQrDTGthHo008GwiI8CJ")
export default function StripePayment() {
  const navigate = useNavigate()
    function onToken(token){
      navigate("/")

    }


  // const options = {
  //   // passing the client secret obtained from the server
  //   // clientSecret: '{{CLIENT_SECRET}}',
  // };

  return (
    // <Elements stripe={stripePromise} options={{mode:"payment" , currency:"egp", amount:600}}>
    //   <CheckoutForm />
    // </Elements>
    <StripeCheckout
        token={onToken}
        amount={60000}
        name='Book Your Event'
        description='hello world'
        panelLabel='Pay Now'
        allowRememberMe
        currency='EGP'
        stripeKey="pk_test_51Pw0DIKNB1qa5niHFcBfkGral2f1ZSbRuOaqvO5w2c3oqZDDaJKKPDHKSXdiQV56Iote19LpvN3gTUcQrDTGthHo008GwiI8CJ"
      />
  )
}
