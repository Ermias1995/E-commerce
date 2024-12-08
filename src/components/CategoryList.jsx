import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/categorySlice';

const CategoryList = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='flex items-center justify-evenly'>
            {items.map((category, index) => (
                <div key={index}>
                    <div className="flex flex-col items-center justify-center h-28 w-36 border rounded hover:bg-secondary hover:text-textColor hover:cursor-pointer">
                        <p className='text-base'>{category}</p>
                    </div>
                </div>
            ))}    
        </div>
    );
};

export default CategoryList;