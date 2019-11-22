import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';



const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
    state= {
        products : [],                // to prevent the reference error, it is an empty array
        featuredProducts : [],
        detailProduct : detailProduct,
        sortedProducts: [],
        sortedProductsCategory: [],
        sortedProductsCategoryItems: [],
        category: 'all',
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        stock: false,
        newItem: false,
        discountRate: false,
        priceCategory: 0, 
        minPriceCategory: 0, 
        maxPriceCategory: 0, 
        stockCategory: false, 
        newItemCategory: false, 
        discountRateCategory: false,
        cart : [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,

    };

    componentDidMount() {
        this.setProducts();
    }


    // to prevent the reference error on javascript object types data
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach( item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        
        let featuredProducts = tempProducts.filter(product => product.featured === true);
        let maxPrice = Math.max(...tempProducts.map(item => item.price));
        let minPrice = Math.min(...tempProducts.map(item => item.price));

        this.setState( () => {
            return {products: tempProducts,
                    featuredProducts,
                    sortedProducts: tempProducts,
                    price: maxPrice,
                    maxPrice,
                    minPrice
            };
        });
    }

    getItem = (id) => {
        const product = this.state.products.find( item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState( () => {
            return { detailProduct : product}
        });
    }

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
                        [name] : value
                      }, this.filterProducts); 
    }

    filterProducts = () => {
        let {products, category, price, stock, newItem, discountRate } = this.state;
        // all value
        let tempProducts = [...products];
        
        // transform price value from string to number
        price = parseInt(price);

        //filter by category
        if ( category !== 'all' ) {
            tempProducts = tempProducts.filter(product => product.category === category);
        }

        // filter by price
        tempProducts = tempProducts.filter(product => product.price <= price);

        // filter by extras
        if (stock) {
            tempProducts = tempProducts.filter(product => product.stock === true);
        }
        if (newItem) {
            tempProducts = tempProducts.filter(product => product.newItem === true);
        }
        if (discountRate) {
            tempProducts = tempProducts.filter(product => product.discountRate > 0);
        }
        
        this.setState({
            sortedProducts: tempProducts
        })
    }

    selectedCategory = category => {
        
        let tempProducts = this.state.products.filter(product => product.category === category);
        let maxPriceCategory = Math.max(...tempProducts.map(item => item.price));
        let minPriceCategory = Math.min(...tempProducts.map(item => item.price));

        this.setState(() => {
            return { sortedProductsCategory: tempProducts,
                     sortedProductsCategoryItems: tempProducts,
                     priceCategory: maxPriceCategory,
                     maxPriceCategory,
                     minPriceCategory
            }
        })
    }


    handleChangeCategory = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
                        [name] : value
                      }, this.filterProductsCategory); 
    }

    filterProductsCategory = () => {
        let {sortedProductsCategory, priceCategory, stockCategory, newItemCategory, discountRateCategory } = this.state;
        // all value
        let tempProducts = [...sortedProductsCategory];
        
        // transform price value from string to number
        priceCategory = parseInt(priceCategory);

        // filter by price
        tempProducts = tempProducts.filter(product => product.price <= priceCategory);

        // filter by extras
        if (stockCategory) {
            tempProducts = tempProducts.filter(product => product.stock === true);
        }
        if (newItemCategory) {
            tempProducts = tempProducts.filter(product => product.newItem === true);
        }
        if (discountRateCategory) {
            tempProducts = tempProducts.filter(product => product.discountRate > 0);
        }
        this.setState({
            sortedProductsCategoryItems: tempProducts
        })
    }


    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState( () => {
            return {products: tempProducts, 
                    cart: [...this.state.cart, product]};
        }, () => { this.addTotals() });
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total ));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = (subTotal + tax);
        this.setState( () => {
            return {
                    cartSubTotal: subTotal,
                    cartTax: tax,
                    cartTotal: total
            }
        })
    }

    
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id ===id);
        
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState( () => {
            return {
                cart: [...tempCart]
            }
        }, () => {this.addTotals() })
    }


    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id ===id);
        
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;

            this.setState( () => {
                return {
                    cart: [...tempCart]
                }
            }, () => {this.addTotals() })
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState( () => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        }, () => { this.addTotals()});

    }

    clearCart = () => {
        this.setState( () => {
            return {cart: []}
        }, ()=> {
            this.setProducts();
            this.addTotals();
        })
    }

    

    render() {
        
        return (
            <ProductContext.Provider value={{   ...this.state,
                                                handleDetail: this.handleDetail,
                                                handleChange: this.handleChange,
                                                handleChangeCategory: this.handleChangeCategory,
                                                selectedCategory: this.selectedCategory,
                                                addToCart: this.addToCart,
                                                increment: this.increment,
                                                decrement: this.decrement,
                                                removeItem: this.removeItem,
                                                clearCart: this.clearCart
                                            }} >
                { this.props.children }
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };