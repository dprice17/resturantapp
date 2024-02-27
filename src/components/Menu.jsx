import React from "react";
import addBtn from "../assets/images/add-btn.png";


export default function Menu(props) {
  const {
    handleAddBtnClicked,
    menuItems,
    order,
    handleCompleteOrderBtn,
    handleRemoveBtn,
    total,
    paymentSubmitted,
  } = props;

  const renderFoodItems = () => {
    return menuItems.map((item) => {
      const getIngredients = item.ingredients
        .map((ingredient) => {
          return ingredient;
        })
        .join(",");

      return (
        <div
          className="menu-item-container"
          key={item.id}
          data-id={item.id}
          onClick={() => handleAddBtnClicked(item.id)}
        >
          <div className="menu-item">
            <p className="menu-item-img">{item.emoji}</p>
            <div className="menu-item-details">
              <p className="menu-item-name">{item.name}</p>
              <p className="menu-item-ingredients">{getIngredients}</p>
              <p className="menu-item-price">${item.price}</p>
            </div>
          </div>

          <img className="menu-item-add-btn" src={addBtn} />
        </div>
      );
    });
  };

  const renderOrderDetails = () => {
    return order.map((orderItem, index) => {
      return (
        <div className="your-order-details" key={index}>
          <p className="your-order-item-name">
            {orderItem.orderName}
            <span onClick={() => handleRemoveBtn(index)} className="remove-btn">
              Remove
            </span>
          </p>
          <p className="your-order-item-price">
            <mark>${orderItem.orderPrice}</mark>
          </p>
        </div>
      );
    });
  };

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

  const renderOrder = () => {
    return (
      <div className="your-order-container">
        <h3 className="your-order-text">Your Order</h3>
        {renderOrderDetails()}
        {renderTotalPrice()}
        <button onClick={handleCompleteOrderBtn} className="complete-order-btn">
          Complete order
        </button>
      </div>
    );
  };


  return (
    <div className="menu-container">
      {renderFoodItems()}
      {order.length > 0 && !paymentSubmitted && renderOrder()}
    </div>
  );
}
