import React from "react";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import PaymentScreen from "./components/PaymentScreen.jsx";
import ConfirmationPage from "./components/ConfirmationPage.jsx";
import menuArray from "./data.js";
import header from "./assets/images/resturantmenuheader.png";
import useOrderManagement from "./components/hooks/useOrderManagement.jsx";

export default function App() {
  const [headerImage, setHeaderImage] = React.useState(header);
  const [menuItems] = React.useState(menuArray);
  const [btnClicked, setBtnClicked] = React.useState({
    addBtnClicked: false,
    completeBtnClicked: false,
    payBtnClicked: false,
  });
  const {
    orderInfo,
    handleAddBtnClicked,
    handleRemoveBtn,
    completeOrder,
    saveCustomerName,
  } = useOrderManagement({ menuItems, setBtnClicked });

  const handleCompleteOrderBtn = () => {
    setBtnClicked((prev) => ({
      ...prev,
      completeBtnClicked: true,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    saveCustomerName(name);

    setBtnClicked((prev) => ({
      ...prev,
      payBtnClicked: true,
    }));

    setTimeout(() => {
      completeOrder();
      setBtnClicked((prev) => ({
        ...prev,
        completeBtnClicked: false,
      }));
    }, 3000);
  };

  const { order, total, paymentSubmitted, customerName } = orderInfo;

  return (
    <div className="container">
          <Header headerImage={headerImage} />

          {!btnClicked.completeBtnClicked && !paymentSubmitted && (
            <Menu
              handleAddBtnClicked={handleAddBtnClicked}
              btnClicked={btnClicked}
              menuItems={menuItems}
              handleRemoveBtn={handleRemoveBtn}
              handleCompleteOrderBtn={handleCompleteOrderBtn}
              order={order}
              total={total}
              paymentSubmitted={paymentSubmitted}
            />
          )}

          {btnClicked.completeBtnClicked && !paymentSubmitted && (
            <PaymentScreen
              handleOnSubmit={handleOnSubmit}
              btnClicked={btnClicked}
            />
          )}

          {paymentSubmitted && (
            <ConfirmationPage
              order={order}
              customerName={customerName}
              total={total}
            />
          )}
        </div>
  );
}
