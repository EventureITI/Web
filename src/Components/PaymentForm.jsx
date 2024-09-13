import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

export default function PaymentForm({ eventData }) {
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${
          window.location.origin
        }/payment-success?eventData=${encodeURIComponent(
          JSON.stringify(eventData)
        )}`,
      },
      // Avoid redirecting, and show the success message inside the form itself
      // redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);

      // It would be useful in case you disable redirecting, but I am redirecting the user
      // So, it's not useful in this case, but I'm keeping it here for reference
      // } else if (paymentIntent && paymentIntent.status === "succeeded") {
      // setMessage("Payment status: " + paymentIntent.status);
    } else {
      setMessage("Unexpected state");
    }

    setIsProcessing(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
      >
        {/* Event Details */}
        <div className="mb-6 capitalize">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            {eventData.title}
          </h2>
          <p className="text-gray-600 text-md mb-1">
            Tickets:{" "}
            <span className="font-medium">{eventData.numberOfTickets}</span>
          </p>
        </div>

        {/* Payment element and submit button */}
        <PaymentElement className="mb-6" />
        <button
          type="submit"
          disabled={isProcessing}
          id="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          <span id="button-text">
            {isProcessing
              ? "Processing ..."
              : `Pay ${eventData.totalPrice} EGP`}
          </span>
        </button>

        {/* Error (or success) messages */}
        {message && (
          <div id="payment-message" className="mt-4 text-red-500">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
