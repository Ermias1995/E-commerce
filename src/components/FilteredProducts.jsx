import { useSelector,useDispatch } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { addToWishlist } from '../redux/wishlistSlice';
import {addToCart} from '../redux/cartSlice';

const FilteredProducts = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.products.items); 
    const selectedCategory = useSelector((state) => state.category.selectedCategory); 

    const filteredProducts = selectedCategory ? items.filter(product => product.category === selectedCategory):[];
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
        <div className="flex gap-8 overflow-x-scroll">
            {filteredProducts.map((product) => (
                <div key={product.id} className="group flex flex-col hover:cursor-pointer gap-10 w-[270px] h-[350px]">
                    <div id='image section' className=" bg-textColor py-4 border w-48 h-44 rounded relative flex flex-col items-center justify-center">
                    <NavLink to={`/product/${product.id}`} className="group flex flex-col hover:cursor-pointer object-contain w-full h-full">
                        <img src={product.image} alt={product.title} className="object-contain w-full h-full"/>
                    </NavLink>
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
    );
};

export default FilteredProducts;