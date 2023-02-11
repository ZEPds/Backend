const ProductManager = require('../dao/mongoManager/ProductManager')
const { emitAddProduct } = require('../utils/socket.io')

const pm = new ProductManager()

const addProduct = async (req, res) => {
	const product = req.body

	const productSaved = await pm.addProduct(product)

	if (!productSaved) {
		res.status(400).json({
			msg: 'Error al crear el producto',
			ok: false,
		})
	}
	
	emitAddProduct(productSaved)

	return res.status(200).json({
		msg: 'Producto creado exitosamente',
		ok: true,
	})
}

const getProducts = async (req, res) => {
	const { limit = 10 } = req.query

	const products = await pm.getProducts({ limit })

	if (!products) {
		res.status(404).json({
			msg: 'Not found',
			ok: false,
		})
	}

	return res.render('home', { products })
}

module.exports = {
	getProducts,
	addProduct,
}
