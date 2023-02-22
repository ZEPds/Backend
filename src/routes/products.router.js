const { Router } = require('express')
const productsController = require('../controllers/products.controller')
const multerUtils = require('../multer.utils')

const router = Router()

router.get('/', productsController.getProducts)

router.get('/:pid', productsController.getProductById)

router.post(
  '/',
  multerUtils.single('file'),
  productsController.addProduct
)

router.put(
  '/:pid',
  multerUtils.single('file'),
  productsController.updateProduct
)

router.delete('/:pid', productsController.deleteProduct)

module.exports = router