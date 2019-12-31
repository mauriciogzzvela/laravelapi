import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <h3>Todos los productos</h3>
            </div>
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
