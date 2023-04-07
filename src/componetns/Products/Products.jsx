import React from 'react';

const Products = ({ item, handleAddToCart }) => {
    return (
        <div className='border-neutral-400 border-solid border rounded-md p-4 flex flex-col'>
            <div className='flex-grow'>
                <img src={item.picture} alt="" className='w-full h-44 rounded-lg border p-2' />
                <h3 className="text-2xl">{item.name}</h3>
                <p>Price:$ {item.price}</p>
                <p className='text-sm text-zinc-600'>{item.gender}</p>
            </div>
            <div className="flex-shrink-0">
                <button className='px-6 py-2 bg-cyan-500 rounded-lg font-semibold pointer w-full'
                    onClick={() => handleAddToCart(item)}
                >Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;