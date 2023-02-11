const ChatManager = require('../dao/mongoManager/ChatManager')
const { edmitAddMessage } = require('../utils/socket.io')

const cm = new ChatManager()

const sendMessage = async (req, res) => {
	const message = req.body

	const messageSaved = await cm.sendMessage(message)

	if (!messageSaved) {
		res.status(400).json({
			msg: 'Error al enviar el mensaje',
			ok: false,
		})
	}

	edmitAddMessage(message)

	return res.status(201).json(message)
}

const getMessages = async (req, res) => {
	const messages = await cm.getMessages()

	if (!messages) {
		res.status(404).json({
			msg: 'Not found',
			ok: false,
		})
	}

	return res.status(200).json(messages)
}

module.exports = {
	getMessages,
	sendMessage,
}
