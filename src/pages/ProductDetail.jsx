import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/wishlistSlice';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            quantity: 1,
        };
        dispatch(addToCart(cartItem));
    };

    const handleAddToWishlist = () => {
        dispatch(addToWishlist(product));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mx-auto p-4">
            {product && (
                <div className="flex flex-col md:flex-row">
                    <img src={product.image} alt={product.title} className="w-full md:w-1/2 h-auto object-cover" />
                    <div className="md:ml-4">
                        <h1 className="text-2xl font-bold">{product.title}</h1>
                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                        <p className="mt-4">{product.description}</p>
                        <div className="flex gap-4 mt-4">
                            <button onClick={handleAddToCart} className="bg-blue-500 text-white py-2 px-4 rounded">
                                Add to Cart
                            </button>
                            <button onClick={handleAddToWishlist} className="bg-red-500 text-white py-2 px-4 rounded">
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