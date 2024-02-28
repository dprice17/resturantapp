import React from "react";

export default function useOrderManagement({ menuItems, setBtnClicked }) {
  const [orderInfo, setOrderInfo] = React.useState({
    order: [],
    total: 0,
    paymentSubmitted: false,
    customerName: "",
  });

  React.useEffect(() => {
    const getTotalPrice = () => {
      let totalPrice = 0;
      orderInfo.order.forEach((item) => {
        totalPrice += item.orderPrice;
      });
      setOrderInfo((prevOrderInfo) => ({
        ...prevOrderInfo,
        total: totalPrice,
      }));
    };
    getTotalPrice();
  }, [orderInfo.order]);

  const handleAddBtnClicked = (id) => {
    const newItem = getOrderDetails(id);

    const newOrder = {
      orderId: id,
      orderName: newItem.orderName,
      orderPrice: newItem.orderPrice,
    };

    setOrderInfo((prevOrderInfo) => ({
      ...prevOrderInfo,
      order: [...prevOrderInfo.order, newOrder],
    }));

    setBtnClicked((prev) => ({
      ...prev,
      addBtnClicked: true,
    }));
  };

  const saveCustomerName = (name) => {
    setOrderInfo((prevOrderInfo) => ({
      ...prevOrderInfo,
      customerName: name,
    }));
  };

  const completeOrder = () => {
    setOrderInfo((prevOrderInfo) => ({
      ...prevOrderInfo,
      paymentSubmitted: true,
    }));
  };

  const getOrderDetails = (id) => {
    const orderDetails = menuItems.find(
      (item) => Number(item.id) === Number(id)
    );
    return {
      orderId: id,
      orderName: orderDetails.name,
      orderPrice: orderDetails.price,
    };
  };

  const handleRemoveBtn = (index) => {
    setOrderInfo((prevOrderInfo) => {
      const newOrder = [...prevOrderInfo.order];
      newOrder.splice(index, 1);
      return { ...prevOrderInfo, order: newOrder };
    });
  };

  return {
    orderInfo,
    handleAddBtnClicked,
    saveCustomerName,
    getOrderDetails,
    handleRemoveBtn,
    completeOrder,
  };
}
