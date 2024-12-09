// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeFromCart, clearCart } from '../redux/cartSlice'; 

// const Cart = () => {
//     const dispatch = useDispatch();
//     const cartItems = useSelector(state => state.cart.items);

//     const handleRemoveItem = (productId) => {
//         dispatch(removeFromCart(productId));
//     };

//     const handleClearCart = () => {
//         dispatch(clearCart());
//     };

//     const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
//     const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//     return (
//         <div className="container mx-auto p-4 my-28">
//           {cartItems.length === 0 ? (<p>Your cart is empty...</p>) : 
//           (
//             <div>
//               <div className="flex flex-col gap-4 mb-4">
//                 {cartItems.map(item => (
//                     <div key={item.productId} className="flex flex-col items-center justify-between border-b pb-4">
//                       <div className="flex items-center justify-center p-4 shadow-sm">
//                         <h1>Products</h1>
//                         <h1>Price</h1>
//                         <h1>Quantity</h1>
//                         <h1>Subtotal</h1>
//                       </div>
//                       <div className="flex items-center">
//                           <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mr-4" />
//                           <div>
//                               <h2 className="text-lg font-semibold">{item.title}</h2>
//                               <p className="text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
//                           </div>
//                       </div>
//                       <button onClick={() => handleRemoveItem(item.productId)} className="text-red-500 hover:underline">
//                           Remove
//                       </button>
//                     </div>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center mt-4">
//                 <button
//                     onClick={handleClearCart}
//                     className="bg-red-500 text-white py-2 px-4 rounded"
//                 >
//                     Clear Cart
//                 </button>
//                 <div className="text-lg font-bold">
//                     Total: ${totalPrice.toFixed(2)}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//     );
// };
// export default Cart;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice'; // Adjust the path as needed

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
                    return { ...data, quantity: item.quantity }; // Include quantity with fetched data
                })
            );
            setProductDetails(details);
        };

        if (cartItems.length > 0) {
            fetchProductDetails();
        } else {
            setProductDetails([]); // Clear state if no items in cart
        }
    }, [cartItems]);

    const totalPrice = productDetails.reduce((total, item) => {
        return total + (item.price ? item.price * item.quantity : 0);
    }, 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {productDetails.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <div className="flex flex-col gap-4 mb-4">
                        {productDetails.map(item => (
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
                                <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={handleClearCart}
                            className="bg-red-500 text-white py-2 px-4 rounded"
                        >
                            Clear Cart
                        </button>
                        <div className="text-lg font-bold">
                            Total: ${totalPrice.toFixed(2)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
