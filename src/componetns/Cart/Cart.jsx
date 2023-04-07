import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = ({ cart, removeAddedItem }) => {
    return (
        <div className='bg-stone-500 py-4 px-2 rounded-md'>
            <h1 className='text-xl font-bold'>Added Products</h1>
            <p className={`text-sm text-center ${cart.length > 2 && cart.length <= 4 && 'text-blue-950'} ${cart.length > 4 ? 'text-yellow-500 font-semibold' : ''}`} >Items: {cart.length}</p>
            {
                cart.map(item => <DisplayAddedItem item={item} removeAddedItem={removeAddedItem}></DisplayAddedItem>)
            }
        </div>
    );
};

const DisplayAddedItem = ({item, removeAddedItem}) => {

    return (
        <div className='p-1 text-center bg-white rounded-md text-sm my-2 flex justify-between px-2'>
            <h1 className=''>{item.name}</h1>
            <button onClick={() => removeAddedItem(item._id)}><FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon></button>
        </div>
    )
}

export default Cart;