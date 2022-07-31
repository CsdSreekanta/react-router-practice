import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {

  
 
    return (
        <div>
                 <h1 className='text-3xl font-bold'>Welcome to my fancy routing website</h1>
            <nav className='link'>
                <Link to="/">Home</Link>
                <Link to="/friends">Friends</Link>
                <Link to="about">About</Link>
            </nav>
        </div>
    );
};

export default Header;