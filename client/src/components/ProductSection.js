import React from 'react';
import { useState, useEffect } from 'react';
import ProductCards from './ProductCards';

const ProductSection = () => {
    const [products, setProducts] = useState(null);
    const [searchKey, setSearchKey] = useState("");

    const searchProduct = async (e) => {
        setSearchKey(e.target.value)
    }

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('http://localhost:4000/api/products/fetchAllProducts');
            const data = await response.json();
            if (response.status === 200) {
                setProducts(data);
            }
        }
        getProducts();
    }, []);

    return (
        <section className="product-section">
            <div className="container">
                <div className="content">
                    <h3 className='title'>Product</h3>
                    <div className="product-filter">
                        <div className="category">
                            <button className="btn btn-link category-btn">Category 1</button>
                            <button className="btn btn-link category-btn">Category 2</button>
                            <button className="btn btn-link category-btn">Category 3</button>
                            <button className="btn btn-link category-btn">Category 4</button>
                        </div>
                        <div className="search">
                            <input type="text" placeholder="Search" value={searchKey} onChange={searchProduct} />
                        </div>
                    </div>
                    <hr />
                    <div className="product-container">
                        {products && products.map((product) => (
                            <ProductCards key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductSection