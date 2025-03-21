import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './pages/OrderConfirmation.css'

const OrderConfirmation = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrder = localStorage.getItem("orderDetails");
    if (savedOrder) {
      setOrderDetails(JSON.parse(savedOrder));
    } else {
      navigate("/"); // Redirect if no order data
    }
  }, [navigate]);

  return orderDetails ? (
    <div className="order-confirmation">
      <h1>🎉 Order Placed Successfully! 🎉</h1>
      <p>Thank you for your order. Here are your order details:</p>

      <div className="order-details">
        <p><strong>Order Date:</strong> {orderDetails.date}</p>
        <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
        <p><strong>Items:</strong></p>
        <ul>
          {orderDetails.items.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <p><strong>Subtotal:</strong> ${orderDetails.totalAmount}</p>
        <p><strong>Delivery Fee:</strong> ${orderDetails.deliveryFee}</p>
        <h2><strong>Total Paid:</strong> ${orderDetails.finalAmount}</h2>
      </div>

      <button onClick={() => navigate("/")}>Go to Homepage</button>
    </div>
  ) : null;
};

export default OrderConfirmation;
