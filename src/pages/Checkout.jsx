import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };
    
    return (
      <div className="flex items-center justify-center p-4 gap-20 my-16">
      <div className="w-2/5">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" placeholder="Enter your first name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input type="text" placeholder="Enter your company name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Street Address</label>
          <input type="text" placeholder="Enter your street address" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Apartment Floor</label>
          <input type="text" placeholder="Enter your apartment floor" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Town/City</label>
          <input type="text" placeholder="Enter your town/city" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="text" placeholder="Enter your phone number" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" placeholder="Enter your email address" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100" />
        </div>
        </form>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to your cart before proceeding.</p>
      ) : (
      <div>
        <div className="flex flex-col gap-4 mb-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mr-4" />
            <div>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-600">
              ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
            </p>
            </div>
          </div>
          </div>
        ))}
        </div>
        <div className="flex justify-between items-center mt-4">
        <div className="text-lg font-bold">
          Total: ${totalPrice.toFixed(2)}
        </div>
        <div className="flex flex-col gap-4">
          <label className="block text-sm font-medium text-gray-700">Payment Method</label>
          <div className="flex items-center">
            <input type="radio" id="bank" name="paymentMethod" value="bank" className="mr-2" />
            <label htmlFor="bank" className="mr-4">Bank</label>
            <input type="radio" id="cod" name="paymentMethod" value="cod" className="mr-2" />
            <label htmlFor="cod">Cash on Delivery</label>
          </div>
        </div>
        </div>
        <button className="mt-4 px-4 py-2 bg-secondary text-textColor rounded hover:bg-opacity-50">
          Place Order
        </button>
      </div>
        )}
      </div>
    );
};

export default Checkout;