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
    btnClicked
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
            <div className="menu-item-details">
              <p className="menu-item-img">{item.emoji}</p>
              <div className="menu-item-info">
                <p className="menu-item-name">{item.name}</p>
                <p className="menu-item-ingredients">{getIngredients}</p>
                <p className="menu-item-price">${item.price}</p>
              </div>
            </div>
            <img className="menu-item-add-btn" src={addBtn} />
          </div>

          <div className="divider-line-container">
            <div className="menu-item-divider-line"></div>
          </div>
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
        <h3 id="your-order-text" className="your-order-text">
          <a className="your-order-anchor-tag" href="#yourorder">Your Order</a>
        </h3>
        {renderOrderDetails()}
        {renderTotalPrice()}
        <button onClick={handleCompleteOrderBtn} className="complete-order-btn">
          Complete order
        </button>
      </div>
    );
  };

  React.useEffect(() => {
    if(btnClicked.addBtnClicked){
      const yourOrderAnchor = document.getElementById('your-order-text')

      if(yourOrderAnchor){
        yourOrderAnchor.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [btnClicked.addBtnClicked])

  return (
    <div className="menu-container">
      {renderFoodItems()}
      {order.length > 0 && !paymentSubmitted && renderOrder()}
    </div>
  );
}
