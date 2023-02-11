const { Router } = require('express')
const viewController = require('../controllers/view.controller')

const router = Router()

router.get('/', viewController.renderHome)

router.get('/products', viewController.renderRealTimeProducts)

router.get('/chats', viewController.renderChat)

module.exports = router
