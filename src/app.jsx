//not interesting but they make ES6, jQuery & bootstrap work
require('babelify/polyfill');
global.jQuery = require('jquery');
require('bootstrap');

//here starts the app
var React = require('react'),
	Catalog = require('./catalog.jsx'),
	backend = require('./backend'),
	store = require('./store');

var App = React.createClass({
	addProduct: function(productId) {
		console.log('add product', productId);
	},

    render: function() {
    	var products = store.getProducts();

        return (
			<div>
				<h1 className="app-title">React shopping cart</h1>

				<div className="row">
					<div className="col-md-8">
						<Catalog products={products} onAdd={this.addProduct}/>
					</div>

					<div className="col-md-4">
					</div>
				</div>
			</div>
		);
    }
});

var p1 = backend.getProducts().then(store.setProducts.bind(store));
var p2 = backend.getCart().then(store.setCart.bind(store));

Promise.all([p1, p2]).then(function() {
	React.render(<App/>, document.getElementById('example'));
});




















/*
<div className="row">
	<div className="col-md-8">
		<Catalog products={products} onAdd={this.addProduct}/>
	</div>
	<div className="col-md-4">
		<Cart cart={cart}/>
	</div>
</div>
*/