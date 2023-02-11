const productModel = require('../models/products.model')

class ProductManager {
	constructor() {
		this.products = []
	}

	addProduct = async (product) => {
		try {
			const productSaved = await productModel.create(product)
			return productSaved
		} catch (e) {
			console.log(e)
		}
	}

	getProducts = async (limit) => {
		try {
			const products = await productModel.find().limit(limit)
			return products
		} catch (error) {
			return res.status(500).json({
				msg: 'error',
				playload: 'Error al Mostrar Producto',
			})
		}
	}
}

module.exports = ProductManager
