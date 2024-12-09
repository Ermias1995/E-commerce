import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice'; 
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [productDetails, setProductDetails] = useState([]);

    const handleRemoveItem = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    // Fetch product details for each item in the cart
    useEffect(() => {
      const fetchProductDetails = async () => {
        const details = await Promise.all(
          cartItems.map(async (item) => {
            const response = await fetch(`https://fakestoreapi.com/products/${item.productId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }
            const data = await response.json();
            return { ...data, quantity: item.quantity };
          })
        );
        setProductDetails(details);
      };

      if (cartItems.length > 0) {
          fetchProductDetails();
      } else {
          setProductDetails([]);
      }
  }, [cartItems]);

    const totalPrice = productDetails.reduce((total, item) => {
        return total + (item.price ? item.price * item.quantity : 0);
    }, 0);

    return (
      <div className="flex flex-col mx-auto p-4">
        {productDetails.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
        <div>
          <div className="flex flex-col gap-4 mb-4">
          <div className="flex items-center justify-evenly">
            <p>Products</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          {productDetails.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center justify-between shadow-sm py-2 px-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mr-4" />
                {/* <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p>{(item.price * item.quantity).toFixed(2)}</p> */}
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:underline">
                  Remove
              </button>
            </div>
          ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <button onClick={handleClearCart} className="bg-red-500 text-white py-2 px-4 rounded">
              Clear Cart
            </button>
            <div className="text-lg font-bold">
              Total: ${totalPrice.toFixed(2)}
            </div>
          </div>
          <div className="flex flex-col mt-10 justify-end gap-2 border-2 border-[#808080] rounded p-5">
            <h1 className='font-semibold text-xl'>Cart Total</h1>
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <hr/>
            <div className="flex justify-between">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <hr/>
            <div className="flex justify-between">
              <p>Total:</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>            
            <NavLink to='/checkout' state={{ cartItems: productDetails, totalPrice }} onClick={handleClearCart} className="bg-red-500 w-60 text-white py-2 px-4 rounded">
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
          )}
      </div>
    );
};

export default Cart;
