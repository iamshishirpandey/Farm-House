import React from "react";

import StripeCheckout from "react-stripe-checkout";
import { clearCart, toggleCartHidden } from "../../redux/cart/cart.action";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_xzHx8YWdlidyI8OPnRRs2VC7001kKdGhg7";

  const onToken = (token) => {
    console.log(token);
    clearCart();
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="BrookMeadow Fresh Farm"
      billingAddress
      shippingAddress
      image="https://www.brookmeadowfarms.com/assets/images/logo/01.png"
      description={`Your total is $ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now."
      token={onToken}
      stripeKey={publishableKey}
      style={{ width: "200px" }}
    />
  );
};
export default StripeCheckoutButton;
