const { Router } = require('express')
const chatController = require('../controllers/chat.controller')

const router = Router()

router.get('/', chatController.getMessages)
router.post('/', chatController.sendMessage)

module.exports = router
