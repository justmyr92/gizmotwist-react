import React from 'react'

import BackgroundImage from '../images/background.jpg'
const CategoryCards = () => {
    return (
        <div className='card'>
            <img src={BackgroundImage} alt={BackgroundImage} />
            <div className="card-body">
                <h3>Product 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>;
            </div>
        </div>
    );
}

export default CategoryCards