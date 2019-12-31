import React, { Component } from 'react';

class AddProduct extends Component {

    constructor(props) {
        super(props);
        /* Initialize the state. */
        this.state = {
            newProduct: {
                title: '',
                description: '',
                price: '',
                availability: ''
            }
        }

        //Boilerplate code for binding methods with `this`
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    /* This method dynamically accepts inputs and stores it in the state */
    handleInput(key, e) {

        /*Duplicating and updating the state */
        var state = Object.assign({}, this.state.newProduct);
        state[key] = e.target.value;
        this.setState({newProduct: state });
    }
    /* This method is invoked when submit button is pressed */
    handleSubmit(e) {
        //preventDefault prevents page reload
        e.preventDefault();
        /*A call back to the onAdd props. The current
         *state is passed as a param
         */
        this.props.onAdd(this.state.newProduct);
    }

    render() {
        const divStyle = {
            /*Code omitted for brevity */ }

        return(
            <div>
                <h2> Add new product </h2>
                <div style={divStyle}>

                    <form onSubmit={this.handleSubmit}>
                        <label> Title:
                            <input type="text" onChange={(e)=>this.handleInput('title',e)} required/>
                        </label>

                        <label> Description:
                            <input type="text" onChange={(e)=>this.handleInput('description',e)} required/>
                        </label>

                        <label> Status:
                            <input type="text" onChange={(e)=>this.handleInput('availability',e)} required/>
                        </label>

                        <label> Price:
                            <input type="text" onChange={(e)=>this.handleInput('price',e)} required/>
                        </label>


                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>)
    }
}

export default AddProduct;