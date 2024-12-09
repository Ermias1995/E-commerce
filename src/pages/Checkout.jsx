import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
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
                    </div>
                    {/* Here you can add payment details form or any other checkout related components */}
                </div>
            )}
        </div>
    );
};

export default Checkout;