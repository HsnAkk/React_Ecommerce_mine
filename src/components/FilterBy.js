import React from 'react';
import { ProductConsumer } from '../context';


const FilterBy = () => {

    const getUnique = (items, value) => {
        return [...new Set(items.map(item => item[value]))]  
    }
    
    return (
        <ProductConsumer>
        { value => {

            const { products, handleChange, category, price, minPrice, maxPrice, stock, newItem, discountRate }  = value;
            
            let categories = getUnique(products, "category");   
            categories = ['all', ...categories];          
            categories = categories.map((item, index) => {
                return <option key={index} value={item} >{item}</option> 
            });

            return (
            <section>
                <form>
                    {/* select category*/}
                    <div className="form-group mb-5">
                        <label htmlFor="category">Category</label>
                        <select name="category" 
                                id="category" 
                                value={category} 
                                className="form-control"
                                onChange={handleChange}        
                        >
                        {categories}
                        </select>
                    </div>
                

                    {/* price*/}
                    <div className="form-group mb-5">
                        <label htmlFor="price">$ {price}</label>
                        <input  type="range" 
                                name="price" 
                                min={minPrice} 
                                max={maxPrice + 3} 
                                id='price' 
                                value={price + 1}
                                className="form-control"
                                onChange={handleChange}        
                        />                   
                    </div>

                    {/* extras */}
                    <div className="form-group">
                        <div className="mb-3">
                            <input  type="checkbox" 
                                    name="stock"
                                    id="stock"
                                    checked={stock}
                                    onChange={handleChange} 
                            />
                            <label htmlFor="stock" className="ml-2"> In Stock</label>
                        </div>
                        <div className="mb-3">
                            <input  type="checkbox" 
                                    name="newItem"
                                    id="newItem"
                                    checked={newItem}
                                    onChange={handleChange} 
                            />
                            <label htmlFor="newItem" className="ml-2"> New Products</label>
                        </div>
                        <div>
                            <input  type="checkbox" 
                                    name="discountRate"
                                    id="discountRate"
                                    checked={discountRate}
                                    onChange={handleChange} 
                            />
                            <label htmlFor="discountRate" className="ml-2"> Discount</label>
                        </div>
                    </div>
                </form>
            </section>
            )
        }}
        </ProductConsumer>
    )
}


export default FilterBy;