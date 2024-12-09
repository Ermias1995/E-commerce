import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import {addToCart} from '../redux/cartSlice';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { addToWishlist } from '../redux/wishlistSlice';

const ProductList = () => {
    const customStyle = {
        overflowX: 'scroll',
        WebkitOverflowScrolling: 'touch', 
        scrollbarWidth: 'none', 
    };

    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <div className="">Loading...</div>
    if (error) return <div className="">Error: {error}</div>

    const handleAddToCart = (product) => {
        const cartItem = {
            productId: product.id,
            quantity: 1, 
        };
        dispatch(addToCart(cartItem));
    };

    const handleAddToWishlist = (product) => {
        dispatch(addToWishlist(product)); 
    };

    return (
        <div className="relative">
            <button onClick={() => document.getElementById('product-list').scrollBy({ left: -300, behavior: 'smooth' })} className="absolute left-0 top-1/3 w-12 h-12 z-10 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full">{"<"}</button>
            <div id="product-list" className="flex gap-8" style={customStyle}>
                {items.map((product) => (
                    <div key={product.id} className="group flex flex-col hover:cursor-pointer gap-10 w-[270px] h-[350px]">
                        <div id='image section' className=" bg-textColor py-4 border w-48 h-44 rounded relative flex flex-col items-center justify-center">
                            <img src={product.image} alt={product.title} className="object-contain w-full h-full"/>
                            <button className="bg-black px-5 py-2 w-full hidden text-textColor group-hover:flex items-center justify-center rounded-b" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                            <button className="absolute flex items-center justify-center top-2 right-2 p-1 w-8 h-8 text-base rounded-full bg-white hover:bg-secondary hover:text-textColor" onClick={() => handleAddToWishlist(product)}><FaRegHeart/></button>
                            <button className="absolute flex items-center justify-center top-10 right-2 p-1 w-8 h-8 text-base rounded-full bg-white hover:bg-secondary hover:text-textColor"><MdOutlineRemoveRedEye/></button>
                            <p className="absolute flex items-center justify-center top-2 left-2 py-1 px-4 w-8 h-8 text-xs rounded bg-secondary text-textColor">-30%</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-base">{product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}</h2>
                            <p className="text-secondary text-base">${product.price.toFixed(2)}<span className="text-[#808080] line-through ml-1">${(product.price + 20).toFixed(2)}</span></p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => document.getElementById('product-list').scrollBy({ left: 300, behavior: 'smooth' })} className="absolute right-0 top-1/3 w-12 h-12 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full">{">"}</button>
        </div>
    );
};

export default ProductList;

