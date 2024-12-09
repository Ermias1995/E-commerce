import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../redux/productCategorySlice";

const CategoryList = ({ categories }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex gap-4 mb-4 justify-center items-center">
            {categories.map(category => (
                <button  key={category} onClick={() => dispatch(setSelectedCategory(category))} className="flex flex-col items-center justify-center text-base py-4 px-8 border rounded hover:bg-secondary hover:text-textColor">
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryList;