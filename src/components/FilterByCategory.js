import React from 'react';
import { ProductConsumer } from '../context';




const FilterByCategory = () => {

    return (
        <ProductConsumer>
        { value => {

            const { handleChangeCategory, priceCategory, minPriceCategory, maxPriceCategory, stockCategory, newItemCategory, discountRateCategory }  = value;
            
            return (
            <section>
                <form>  

                    {/* price*/}
                    <div className="form-group mb-5">
                        <label htmlFor="priceCategory">$ {priceCategory}</label>
                        <input  type="range" 
                                name="priceCategory" 
                                min={minPriceCategory} 
                                max={maxPriceCategory + 3} 
                                id='priceCategory' 
                                value={priceCategory + 1}
                                className="form-control"
                                onChange={handleChangeCategory}        
                        />                   
                    </div>

                    {/* extras */}
                    <div className="form-group">
                        <div className="mb-3">
                            <input  type="checkbox" 
                                    name="stockCategory"
                                    id="stockCategory"
                                    checked={stockCategory}
                                    onChange={handleChangeCategory} 
                            />
                            <label htmlFor="stockCategory" className="ml-2"> In Stock</label>
                        </div>
                        <div className="mb-3">
                            <input  type="checkbox" 
                                    name="newItemCategory"
                                    id="newItemCategory"
                                    checked={newItemCategory}
                                    onChange={handleChangeCategory} 
                            />
                            <label htmlFor="newItemCategory" className="ml-2"> New Products</label>
                        </div>
                        <div>
                            <input  type="checkbox" 
                                    name="discountRateCategory"
                                    id="discountRateCategory"
                                    checked={discountRateCategory}
                                    onChange={handleChangeCategory} 
                            />
                            <label htmlFor="discountRateCategory" className="ml-2"> Discount</label>
                        </div>
                    </div>
                </form>
            </section>
            )
        }}
        </ProductConsumer>
    )
}


export default FilterByCategory;