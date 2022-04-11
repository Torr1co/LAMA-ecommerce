import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const STRIPE_KEY =
  "pk_test_51Jz1eCKSiFpP13koIl0TjhvCJpzacHvxwQup4t5N7RPd1ustBo1LBVR1OU0tKpPryShDYUdZ2lc0KxC5eRXdTJdS00Ht1DU0il";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/stripe/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="mern shop"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000} //tieen 2 ceros por los centavos
        token={onToken}
        stripeKey={STRIPE_KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
