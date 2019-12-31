import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from "./Product";
import AddProduct from "./AddProduct";

class Main extends Component {

    constructor(){
        super();

        this.state = {
            products:[],
            currentProduct: null,
        }

        this.handleAddProduct = this.handleAddProduct.bind(this);

    }

    componentDidMount() {
        fetch('/api/products')
            .then(response => {
                return response.json();
            })
            .then(products => {
                //Fetched product is stored in the state
                this.setState({ products : products });
            });

    }

    renderProducts() {
        return this.state.products.map(product => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */
                <li onClick={() =>this.handleClick(product)} key={product.id} >
                    { product.title }
                </li>
            );
        })
    }

    handleClick(product) {
        //handleClick is used to set the state
        this.setState({currentProduct:product});

    }

    handleAddProduct(product) {

        product.price = Number(product.price);
        /*Fetch API for post request */
        fetch( 'api/products/', {
            method:'post',
            /* headers are important*/
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(product)
        })
            .then(response => {
                return response.json();
            })
            .then( data => {
                //update the state of products and currentProduct
                this.setState((prevState)=> ({
                    products: prevState.products.concat(data),
                    currentProduct : data
                }))
            })

    }

    render() {
        return (
            <div>
                <div className={'col-md-6'}>
                    <h3>Todos los productos</h3>
                    <ul>
                        { this.renderProducts() }
                    </ul>
                </div>

                <div className={'col-md-6'}>
                <Product product={this.state.currentProduct}/>
                </div>

                <div className={'col-md-6'}>
                    <AddProduct onAdd={this.handleAddProduct}/>
                </div>

            </div>
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
