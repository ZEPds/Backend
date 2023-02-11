const { Router } = require('express')
const productsController = require('../controllers/product.controller')

const router = Router()

router.post('/', productsController.addProduct)
router.get('/', productsController.getProducts)

module.exports = router
