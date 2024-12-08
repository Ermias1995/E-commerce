import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { fetchProductsByCategory } from "../redux/productSlice";

const ProductList = ({ category }) => {
    const customStyle = {
        overflowX: 'scroll',
        WebkitOverflowScrolling: 'touch', 
        scrollbarWidth: 'none', 
    };

    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.products);
    let products = category ? items[category] || [] : items;

    useEffect(() => {
        if (category) {
            dispatch(fetchProductsByCategory(category));
        } else {
            dispatch(fetchProducts());
        }
    }, [dispatch, category]);

    if (loading) return <div className="">Loading...</div>
    if (error) return <div className="">Error: {error}</div>

    return (
        <div className="relative">
            <button onClick={() => document.getElementById('product-list').scrollBy({ left: -300, behavior: 'smooth' })} className="absolute left-0 top-1/3 w-12 h-12 z-10 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full">{"<"}</button>
            <div id="product-list" className="flex gap-8" style={customStyle}>
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col gap-10 w-[270px] h-[350px]">
                        <div id='image section' className="bg-textColor py-4 border w-48 h-44 rounded relative flex items-center justify-center">
                            <img src={product.image} alt={product.title} className="object-contain w-full h-full"/>
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

