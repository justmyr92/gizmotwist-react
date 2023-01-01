import React from 'react'
import { NavLink } from 'react-router-dom'
const MainSection = () => {
    return (
        <section className="main-section">
            <div className="custom-shape-divider-bottom-1672418949">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="container">
                <div className="content">
                    <h3>No. 1 Cube Shop in the Philippines</h3>
                    <h1><span>GIZMOTWIST</span> CUBE SHOP</h1>
                    <p>Buy your favorite cubes here!</p>
                    <div className="control-links">
                        <NavLink to="/shop" className="btn btn-purple">Shop Now</NavLink>
                        <NavLink to="/about" className="btn btn-outline-purple">About Us</NavLink>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default MainSection;