import React from 'react';
import './Header.css'
import logo from '../../image/Cakes N Shapes.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={logo} alt="" />
            </div>

            <nav className='container-fluid'>
                <Link to="/home">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/addProducts">Admin</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;