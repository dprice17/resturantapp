import React from "react";

export default function ConfirmationPage(props) {
  const { order, customerName, total } = props;

  const renderTotalPrice = () => {
    return (
      <div className="total-price">
        <div className="divider-line-container">
          <div className="total-price-divider-line"></div>
        </div>
        <div className="total">
          <p className="total-price-text">Total price:</p>
          <p className="price">
            <mark>${total}</mark>
          </p>
        </div>
      </div>
    );
  };

  const renderConfirmation = () => {
    return (
      <div className="order-confirmation-container">
        <div className="your-order-container">
          <h3 className="your-order-text">Your Order</h3>

          {order.map((orderItem, index) => (
            <div className="your-order-details" key={index}>
              <p className="your-order-item-name">{orderItem.orderName}</p>
              <p className="your-order-item-price">
                <mark>${orderItem.orderPrice}</mark>
              </p>
            </div>
          ))}
          {renderTotalPrice()}
        </div>
        <div className="payment-confirmation-container">
          <div className="payment-confirmation">
            <p className="payment-confirmation-message">Thanks {customerName}, your order is on its way</p>
          </div>
        </div>
      </div>
    );
  };

  return renderConfirmation();
}
