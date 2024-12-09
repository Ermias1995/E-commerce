import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist, clearWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice'; 

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishlist.items);
    const totalWishlistItems = wishlistItems.length;

    const handleRemoveItem = (id) => {
        dispatch(removeFromWishlist(id));
    };

    const handleClearWishlist = () => {
        dispatch(clearWishlist());
    };

    const handleAddToCart = (item) => {
        const cartItem = {
            productId: item.id,
            quantity: 1, 
        };
        dispatch(addToCart(cartItem));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Wishlist({totalWishlistItems})</h1>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div className="flex flex-col gap-4 mb-4">
                {wishlistItems.map(item => (
                <div key={item.id} className="flex flex-col md:flex-row border p-4 rounded-lg shadow-md">
                  <img src={item.image} alt={item.title} className="w-full md:w-48 h-48 object-cover mr-4" />
                  <div className="flex flex-col justify-between md:ml-4">
                    <div>
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between mt-4">
                        <button onClick={() => handleAddToCart(item)}  className="bg-black text-white py-1 px-3 rounded">
                            Add to Cart
                        </button>
                        <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:underline">
                          Remove
                        </button>
                    </div>
                  </div>
                </div>
                ))}
                <button
                    onClick={handleClearWishlist}
                    className="bg-red-500 text-white py-2 px-4 rounded"
                >
                    Clear Wishlist
                </button>
            </div>
            )}
        </div>
    );
};

export default Wishlist;