//not interesting but they make ES6, jQuery & bootstrap work
require('babelify/polyfill');
global.jQuery = require('jquery');
require('bootstrap');

//here starts the app
var React = require("react");

var App = React.createClass({
    render: function() {
        return (
			<div>
				<h1 className="app-title">React shopping cart</h1>
			</div>
		);
    }
});

React.render(<App/>, document.getElementById('example'));



















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