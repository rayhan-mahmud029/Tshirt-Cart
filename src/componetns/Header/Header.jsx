import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul className='flex justify-around p-2 bg-slate-400'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/orders'>Orders</Link></li>
                <li><Link to='/checkout'>CheckOut</Link></li>
            </ul>
        </div>
    );
};

export default Header;