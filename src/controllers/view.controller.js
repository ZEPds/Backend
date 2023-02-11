const renderHome = async (req, res) => {
	const products = await productManager.getProducts()
	res.render('home', {
		style: 'index.css',
		products,
	})
}

const renderRealTimeProducts = async (req, res) => {
	res.render('realTimeProducts')
}

const renderChat = (req, res) => {
	res.render('chat')
}

module.exports = {
	renderHome,
	renderChat,
	renderRealTimeProducts,
}
