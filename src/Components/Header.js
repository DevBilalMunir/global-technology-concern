import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const menu = () => {
        console.log("first")
        document.querySelector('.burger').style.visibility = 'hidden';
        document.querySelector('.menu').style.display = 'flex';

    }
    const menuClose = () => {
        console.log("second")
        document.querySelector('.burger').style.visibility = 'visible';
        document.querySelector('.menu').style.display = 'none';
    }


    return (
        <header>
            <div className='header'>
                <div>
                    <span className='burger'>
                        <svg onClick={menu} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6.001h18m-18 6h18m-18 6h18" /></svg>
                    </span>
                </div>
                <div className='logo'>
                    <span className='logo-abr'>GTC - </span>
                    <span className='logo-text'>Global Technology Concerns</span>
                </div>
                <div className='search'>
                    <input type='text' placeholder='Search' />
                    <span className='search-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z" /></svg>
                    </span>
                </div>
                {/*//////////////////////////////////////// menu */}
                <div className='menu'>
                    <span className='close'>
                        <svg onClick={menuClose} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z" /></svg>
                    </span>
                    <div className='menu-btn'>
                        <Link to="/" className='link'>
                            <span onClick={menuClose} className='button-28'>Home</span>
                        </Link>
                    </div>
                    <div className='menu-btn'>
                        <Link to="/services" className='link'>
                            <span onClick={menuClose} className='button-28'>Services</span>
                        </Link>
                    </div>
                    <div className='menu-btn'>
                        <Link to="/projects" className='link'>
                            <span onClick={menuClose} className='button-28'>Projects</span>
                        </Link>
                    </div>
                    <div className='menu-btn'>
                        <Link to="/clients" className='link'>
                            <span onClick={menuClose} className='button-28'>Clients</span>
                        </Link>
                    </div>
                    <div className='menu-btn'>
                        <Link to="/about" className='link'>
                            <span onClick={menuClose} className='button-28'>About</span>
                        </Link>
                    </div>
                    <div className='menu-btn'>
                        <Link to="/Contact Us" className='link'>
                            <span onClick={menuClose} className='button-28'>Contact Us</span>
                        </Link>
                    </div>
                   
                </div>
            </div>

        </header>
    );

}
export default Header;