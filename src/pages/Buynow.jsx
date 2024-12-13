import React from "react";

function Buynow() {
  return (
    <div>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
    body {
      font-family: Arial, sans-serif;
      background-color: #f8f9fa;
    }
    .order-container {
      max-width: 600px;
      margin: 50px auto;
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 20px;
    }
    .order-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .order-header h1 {
      color: #007bff;
    }
    .form-control {
      margin-bottom: 15px;
    }
    .btn-order {
      background-color: #28a745;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      width: 100%;
    }
    .btn-order:hover {
      background-color: #218838;
    }
  `,
          }}
        />
        <div className="order-container">
          {/* Header */}
          <div className="order-header">
            <h1>Place Your Order</h1>
            <p>Fill out the details below to complete your purchase.</p>
          </div>
          {/* Order Form */}
          <form action="/submit-order" method="POST">
            <h4>Shipping Information</h4>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              required
            />
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Shipping Address"
              required
            />
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="City"
              required
            />
            <input
              type="text"
              name="state"
              className="form-control"
              placeholder="State"
              required
            />
            <input
              type="text"
              name="zipcode"
              className="form-control"
              placeholder="Pin Code"
              required
            />
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
              required
            />

            <h4>Payment Method</h4>
            <select
              name="paymentMethod"
              className="form-control"
              required
            >
              <option value="" disabled selected>
                Select Payment Method
              </option>
              <option value="creditCard">Credit/Debit Card</option>
              <option value="paypal">gpay</option>
              <option value="cod">Cash on Delivery (COD)</option>
            </select>

            {/* Card Payment Details */}
            <div className="mt-3">
              <input
                type="text"
                name="cardNumber"
                className="form-control"
                placeholder="Card Number"
              />
            </div>

            <button type="submit" className="btn-order mt-4">
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Buynow;