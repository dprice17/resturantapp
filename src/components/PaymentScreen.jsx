import React from "react";
import loadingSVG from "./loadingscreen.svg";

export default function PaymentScreen(props) {
  const { handleOnSubmit, btnClicked } = props;

  const renderPaymentInputFields = () => {
    return (
      <div className="payment-screen-container">
        <h3 className="payment-screen-header-text">Enter card details</h3>
        <div className="payment-screen-input-fields">
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              required
              name="name"
            />
            <input
              type="number"
              placeholder="Enter card number"
              required
              name="cardNumber"
            />
            <input
              type="number"
              placeholder="Enter CVV"
              required
              name="cvvNumber"
            />
            <button className="payment-screen-pay-btn" type="submit">
              Pay
            </button>
          </form>
        </div>
      </div>
    );
  };

  const renderLoadingScreen = () => {
    return (
      btnClicked.payBtnClicked && (
        <div className="loading-screen-container">
          <h3 className="submitting-order-text">Submitting order......</h3>
          <img className="loading-svg" src={loadingSVG} alt="Loading" />
        </div>
      )
    );
  };

  return !btnClicked.payBtnClicked
    ? renderPaymentInputFields()
    : renderLoadingScreen();
}
