var pid = 0;

var _products = [
	{id: pid++, name: 'apple', price: 100},
	{id: pid++, name: 'orange', price: 200},
	{id: pid++, name: 'banana', price: 300},
	{id: pid++, name: 'cynnamon', price: 400}
];

var _cart = {
	items: []
};

module.exports = {
	getProducts: function() {
		return new Promise(function(resolve, reject) {
			resolve(_products);
		});
	},

	getCart: function() {
		return new Promise(function(resolve, reject) {
			resolve(_cart);
		});
	}
};