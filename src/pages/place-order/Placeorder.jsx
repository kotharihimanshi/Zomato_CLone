import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Placeorder.css";
import { StoreContext } from "../../context/StoreContex";

const Placeorder = () => {
  const { getTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const totalAmount = getTotalAmount();
  const deliveryFee = totalAmount === 0 ? 0 : 2;
  const finalAmount = totalAmount + deliveryFee;

  // ✅ Handle Order Placement (Without Payment)
  const handlePlaceOrder = () => {
    setLoading(true);

    // Save order details to localStorage (mocking order storage)
    localStorage.setItem(
      "orderDetails",
      JSON.stringify({
        date: new Date().toLocaleString(),
        paymentMethod: "Cash on Delivery",
        items: [{ name: "Sample Item", price: totalAmount }],
        totalAmount: totalAmount,
        deliveryFee: deliveryFee,
        finalAmount: finalAmount,
      })
    );

    // Redirect to Order Confirmation page
    navigate("/order-confirmation");
  };

  return (
    <div className="place-order">
      <div className="left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Street" required />
        <div className="multi-field">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div className="multi-field">
          <input type="text" placeholder="Zip Code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="number" placeholder="Phone" required />
      </div>

      <div className="right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="total-details">
            <p>Subtotal</p>
            <p>${totalAmount}</p>
          </div>
          <div className="total-details">
            <p>Delivery Fee</p>
            <p>${deliveryFee}</p>
          </div>
          <div className="total-details">
            <b>Total</b>
            <b>${finalAmount}</b>
          </div>

          {/* Order Placement Button */}
          <button
            type="button"
            onClick={handlePlaceOrder}
            disabled={loading}
            className="payment-btn"
          >
            {loading ? "Processing..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
