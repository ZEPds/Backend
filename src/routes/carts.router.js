const { Router } = require('express')
const cartsController = require('../controllers/carts.controller')

const router = Router()

router.post('/', cartsController.createCart)

router.get('/:cid', cartsController.getCart)

router.delete('/:cid/product/:pid', cartsController.deleteProduct)

router.put('/:cid', cartsController.updateAllProducts)

router.put('/:cid/product/:pid', cartsController.updateProductQuantity)

module.exports = router