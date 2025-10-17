let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';
  carrito.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio} MXN`;
    lista.appendChild(li);
  });
  document.getElementById('total').textContent = total;
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();
}

function comprar() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío 😅");
  } else {
    alert("Redirigiendo a PayPal... (simulado)");
    vaciarCarrito();
  }
}