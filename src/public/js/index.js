const socket = io()
const main = document.getElementById('list-products')

socket.on('init-products', ({ products }) => {
	main.innerHTML = ''
	products.forEach((product) => {
		main.innerHTML += `<div class="card" style="width: 18rem;">
		<div class="card-body">
		  <h5 class="card-title">${product.title}</h5>
		  <h6 class="card-subtitle mb-2 text-muted"> $${product.price}</h6>
		  <p class="card-text">${product.description}</p>
		  <a href="#" class="card-link">Agregar al carrito</a>
		  <a href="#" class="card-link">Ver detalles</a>
		</div>
	  </div>`
	})
})

socket.on('add-product', (newProduct) => {
	main.innerHTML += `<div class="card" style="width: 18rem;">
		<div class="card-body">
		  <h5 class="card-title">${newProduct.title}</h5>
		  <h6 class="card-subtitle mb-2 text-muted"> $${newProduct.price}</h6>
		  <p class="card-text">${newProduct.description}</p>
		  <a href="#" class="card-link">Agregar al carrito</a>
		  <a href="#" class="card-link">Ver detalles</a>
		</div>
	  </div>`
})
