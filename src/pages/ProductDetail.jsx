import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/wishlistSlice';
import { FaRegHeart, FaPlus, FaMinus } from 'react-icons/fa6'; 

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1); 

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) throw new Error('Failed to fetch product');
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        const cartItem = {
            productId: product.id,
            quantity: quantity,
        };
        dispatch(addToCart(cartItem));
    };

    const handleAddToWishlist = () => {
        dispatch(addToWishlist(product));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mx-auto p-4 my-32">
            {product && (
                <div className="flex flex-col md:flex-row border border-[#808080] rounded-2xl p-4">
                    <div className="flex flex-col items-center justify-center w-full md:w-1/2 gap-2">
                        <div className="bg-[#F2F2F2] border rounded-2xl p-2">
                            <img src={product.image} alt={product.title} className="w-3/4 h-auto object-cover rounded-2xl" />
                        </div>
                    </div>
                    <div className="md:ml-4 flex flex-col">
                        <h1 className="text-4xl font-semibold">{product.title}</h1>
                        <p className="text-lg font-medium">Brand: {product.brand}</p>
                        <hr className="my-2"/>
                        <p className=""><span className="font-medium text-2xl">${product.price.toFixed(2)}</span> <span className="line-through text-[#808080] text-base">$300</span> <span className="bg-[#006200] bg-opacity-10 text-[#006200] text-base rounded-md">-50%</span></p>
                        <p className="text-[#006200] text-opacity-70 text-sm">50 units left</p>
                        <p className="text-[#808080] text-sm">+ shipping fee may vary by location</p>
                        <div id='quantity' className="flex flex-row items-center justify-between mt-4">
                            <h1 className="text-base">Quantity:</h1>
                            <div className="flex items-center border border-black rounded mt-4">
                                <button className="bg-secondary p-2 text-2xl text-white" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}><FaMinus /></button>
                                <p className="text-2xl px-4">{quantity}</p>
                                <button className="bg-secondary p-2 text-2xl text-white" onClick={() => setQuantity(quantity + 1)}><FaPlus /></button>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-4">
                            <button className="bg-secondary text-white py-2 px-4 rounded" onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                            <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={handleAddToWishlist}>
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;