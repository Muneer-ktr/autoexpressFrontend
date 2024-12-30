import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDeatils, paymentController, placeOrder } from "../Services/AllAPI";

function Buynow() {
  const {id} = useParams()
  const[product,setProduct] = useState({})

  const [order,setOrder] = useState({
    productID:id,
    ShippingAddress:'',
    City:'',
    State:'',
    Pincode:'',
    phoneNumber:'',
    PaymentID:'',
    amount: '',
  })
      const ProductDeatils =async()=>{
          const response = await getProductDeatils(id)
          setProduct(response.data)
      }

      useEffect(()=>{
        ProductDeatils()
      },[])



      const buynow = async(amount,paymentId)=>{
        
       const reqBody={
      productID: order.productID,
      ShippingAddress: order.ShippingAddress,
      City: order.City,
      State: order.State,
      Pincode: order.Pincode,
      phoneNumber: order.phoneNumber,
      PaymentID: paymentId,
      amount: amount,
       }
        const token = sessionStorage.getItem('token')

    
        const reqHeader = {
          'Authorization': `Bearer ${token}`,
          "Content-Type":"application/json"
        }
         const response = await placeOrder(reqBody,reqHeader)
         console.log(response);

      }

      const loadScript =(src)=>{
        return new Promise((resolve) => {
          const script = document.createElement('script')

          script.src = src

          script.onload = () =>{
            resolve(true)
          }
          script.onerror=()=>{
            resolve(false)
          }
          document.body.appendChild(script)
        })
      }
      

      const Payment = async()=>{
        const reqBody = {
          amount: product.price * 100
        }
        const token = sessionStorage.getItem('token')

    
        const reqHeader = {
          'Authorization': `Bearer ${token}`,
          "Content-Type":"application/json"
        }
        const response = await paymentController(reqBody,reqHeader)
        handleRazorpayScreen(response.data.amount)
        
      }
      const handleRazorpayScreen = async(amount)=>{
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if(!res){
          alert("Some errorr at Razorpay loading")
          return
        }
        const options ={
          key : 'rzp_test_YWob3NoKy2p5h6',
          amount : amount,
          currency : 'INR',

          handler : function(response){
            setOrder({...order,PaymentID:response?.razorpay_payment_id})
            buynow(amount,response?.razorpay_payment_id)
          },
          
          theme:{
            color:"#F4C430"
          }

        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
      }

      

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
          <form>
            <h4>Shipping Information</h4>
           
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Shipping Address"
              required

              onChange={(e)=>setOrder({...order,ShippingAddress:e.target.value})}
            />
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="City"
              required
              onChange={(e)=>setOrder({...order,City:e.target.value})}

            />
            <input
              type="text"
              name="state"
              className="form-control"
              placeholder="State"
              required
              onChange={(e)=>setOrder({...order,State:e.target.value})}
            />
            <input
              type="text"
              name="zipcode"
              className="form-control"
              placeholder="Pin Code"
              required
              onChange={(e)=>setOrder({...order,Pincode:e.target.value})}
            />
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
              required
              onChange={(e)=>setOrder({...order,phoneNumber:e.target.value})}
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
              <option value="creditCard">Rozerpay</option>
              <option value="cod">Cash on Delivery (COD)</option>
            </select>
            <button type="submit" className="btn-order mt-4" onClick={Payment}>
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Buynow;