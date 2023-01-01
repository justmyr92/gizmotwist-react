//createa a navbar componetn with using react router dom to link to the pages 

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [currentPage, setCurrentPage] = useState("Home");

    const getCurrentPage = (event) => {
        setCurrentPage(event.target.innerText);
        var navlink = document.querySelectorAll('.nav-link');

        navlink.forEach(element => {
            if (element.innerText === currentPage) {
                element.classList.add('active')
            }
        });

    }

    useEffect(() => {
        var navbar = document.querySelector('nav.navbar');
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }, []);

    return (
        <nav className='navbar'>
            <div className="container">
                <h1 className="navbar-brand">GIZMOTWIST</h1>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to='/' className="nav-link" onClick={getCurrentPage}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/shop' className="nav-link" onClick={getCurrentPage}>Shop</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/about' className="nav-link" onClick={getCurrentPage}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/contact' className="nav-link" onClick={getCurrentPage}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;