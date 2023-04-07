import React, { useState } from 'react';
import Header from '../componetns/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Products from '../componetns/Products/Products';
import Cart from '../componetns/Cart/Cart';

// toaster
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {

    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);


    // handle add to product function and set added product
    const handleAddToCart = (item) => {
        // exists or not
        const exist = cart.find(prod => prod._id === item._id)
        if (!exist) {
            const updatedCart = [...cart, item];
            setCart(updatedCart)
        }
        else {
            toast.error('This item already added')
        }
    }

    // handle remove product
    const removeAddedItem = (id) => {
        const remainingCart = cart.filter(item => item._id !== id);
        setCart(remainingCart)
    }


    return (
        <div>
            <nav>
                <Header></Header>
            </nav>


            <section className="grid grid-cols-5 gap-4  w-11/12 mx-auto my-8 ">
                {/* Display Products */}
                <div className='grid grid-cols-3 gap-6 col-span-4'>
                    {
                        tShirts.map(
                            item => <Products
                                key={item._id}
                                item={item}
                                handleAddToCart={handleAddToCart}
                            ></Products>)
                    }

                </div>

                {/* cart */}
                <div>
                    <Cart
                        cart={cart}
                        removeAddedItem={removeAddedItem}
                    ></Cart>
                </div>
            </section>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Outlet></Outlet>
        </div>
    );
};

export default Home;