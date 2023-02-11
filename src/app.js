const express = require('express')
const cartsRouter = require('./routes/carts.router')
const productRouter = require('./routes/products.router')
const chatsRouter = require('./routes/chats.router')
const handlebars = require('express-handlebars')
const viewsRouter = require('./routes/views.router')
const app = express()
const { connectSocket } = require('./utils/socket.io')
const { default: mongoose } = require('mongoose')
const PORT = 8080

//handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//express
app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(
	express.urlencoded({
		extended: true,
	})
)

//rutas
app.use('/api/products', productRouter)
app.use('/api/chats', chatsRouter)
app.use('/api/carts', cartsRouter)
app.use('/', viewsRouter)

//socket.io
const httpServer = app.listen(PORT, () => {
	console.log(`Servidor ejecutado en puerto ${PORT}`)
})

mongoose.set('strictQuery', false)
mongoose.connect(
	'mongodb+srv://franco:Fran.1234@integrador.4nnapkt.mongodb.net/?retryWrites=true&w=majority',

	(error) => {
		if (error) {
			console.log('error de conexion', error)
			process.exit()
		} else {
			console.log('Conexion exitosa')
		}
	}
)

connectSocket(httpServer)
