import React from 'react';
import {Link} from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {

  
 
    return (
        <div>
                 <h1 className='text-3xl font-bold'>Welcome to my fancy routing website</h1>
            <nav className='link flex justify-center bg-blue-400 p-3'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
                <CustomLink to="about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;