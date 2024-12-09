import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const FilteredProducts = () => {
    const items = useSelector((state) => state.products.items); // Accessing product items
    const selectedCategory = useSelector((state) => state.category.selectedCategory); // Ensure this matches the updated slice name

    const filteredProducts = selectedCategory
        ? items.filter(product => product.category === selectedCategory)
        : [];

    return (
        <div className="flex gap-8 overflow-x-scroll">
            {filteredProducts.map((product) => (
                <div key={product.id} className="flex flex-col gap-10 w-[270px] h-[350px]">
                    <div className="bg-textColor py-4 border w-48 h-44 rounded relative flex items-center justify-center">
                        <img src={product.image} alt={product.title} className="object-contain w-full h-full"/>
                        <button className="absolute flex items-center justify-center top-2 right-2 p-1 w-8 h-8 text-base rounded-full bg-white hover:bg-secondary hover:text-textColor"><FaRegHeart/></button>
                        <button className="absolute flex items-center justify-center top-10 right-2 p-1 w-8 h-8 text-base rounded-full bg-white hover:bg-secondary hover:text-textColor"><MdOutlineRemoveRedEye/></button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-base">{product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}</h2>
                        <p className="text-secondary text-base">
                            ${product.price.toFixed(2)}
                            <span className="text-[#808080] line-through ml-1">${(product.price + 20).toFixed(2)}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FilteredProducts;