import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import PaymentForm from "../../Components/PaymentForm";

export default function Payment() {
  const location = useLocation();
  const eventData = location.state;
  const navigate = useNavigate();
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const server = "http://localhost:5252";
  const stripeAmount = eventData.totalPrice * 100;
  const availableTickets = eventData.availableTickets;
  const numberOfTickets = eventData.numberOfTickets;

  // Fetch publishable key from server
  useEffect(() => {
    axios
      .get(`${server}/config`)
      .then((response) => {
        const { publishableKey } = response.data;
        setStripePromise(loadStripe(publishableKey));
      })
      .catch((error) => {
        navigate("/payment-failed", { state: eventData.id });
        // console.error("Error loading publishable key:", error);
      });
  }, []);

  useEffect(() => {
    // Create a payment intent
    if (stripePromise) {
      axios
        .post(`${server}/create-payment-intent`, {
          stripeAmount,
          availableTickets,
          numberOfTickets,
        })
        .then((response) => {
          const { clientSecret } = response.data;
          setClientSecret(clientSecret);
        })
        .catch((error) => {
          console.error("Error creating payment intent:", error);
        });
    }
  }, [stripePromise]);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm eventData={eventData} />
        </Elements>
      )}
    </div>
  );
}
