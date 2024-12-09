// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCategories } from '../redux/categorySlice';

// const CategoryList = () => {
//     const dispatch = useDispatch();
//     const { items, loading, error } = useSelector((state) => state.categories);

//     useEffect(() => {
//         dispatch(fetchCategories());
//     }, [dispatch]);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div className='flex items-center justify-evenly'>
//             {items.map((category, index) => (
//                 <div key={index}>
//                     <div className="flex flex-col items-center justify-center h-28 w-36 border rounded hover:bg-secondary hover:text-textColor hover:cursor-pointer">
//                         <p className='text-base'>{category}</p>
//                     </div>
//                 </div>
//             ))}    
//         </div>
//     );
// };

// export default CategoryList;
import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../redux/productCategorySlice";

const CategoryList = ({ categories }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex gap-4 mb-4">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => dispatch(setSelectedCategory(category))}
                    className="bg-gray-300 p-2 rounded"
                >
                    {category}
                </button>
            ))}
            <button onClick={() => dispatch(setSelectedCategory(null))} className="bg-gray-300 p-2 rounded">All</button>
        </div>
    );
};

export default CategoryList;