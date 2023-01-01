import React from 'react'
const ProductCards = ({ product }) => {
    return (
        <div className="card" key={product._id}>
            <img src={product.image} alt={product.image} />
            <div className="card-body">
                <small className="card-ratings">Ratings {product.ratings}</small>
                <h3 className="card-title">{product.name}</h3>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-purple"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
            </div>

        </div >
    )
}

export default ProductCards