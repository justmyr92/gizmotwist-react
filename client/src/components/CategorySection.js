import React from 'react'
import CategoryCards from './CategoryCards';

const CategorySection = () => {

    return (

        <section className="category-section">
            <div className="container">
                <div className="content">
                    <h3 className='title'>Categories</h3>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam massa, nec lacinia nisl nisl sit amet nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam massa, nec lacinia nisl nisl sit amet nisl.</p>

                    <div className="card-container">
                        <CategoryCards />
                        <CategoryCards />
                        <CategoryCards />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategorySection;