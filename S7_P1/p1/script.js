const listaProductos = [];
const formulario = document.getElementById("miFormulario");
const tablaBody = document.getElementById("tablaProductos");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const objeto = {
    nombre: document.getElementById("nombre").value,
    color: document.getElementById("color").value,
    precio: Number(document.getElementById("precio").value),
    cantidad: Number(document.getElementById("cantidad").value),
  };

  listaProductos.push(objeto);

  console.clear();
  console.log(JSON.stringify(listaProductos, null, 2));
  
  tablaBody.innerHTML = listaProductos
    .map(
      (prod) => `
                <tr>
                    <td><b>${prod.nombre}</b></td>
                    <td>${prod.color}</td>
                    <td>$${prod.precio}</td>
                    <td>${prod.cantidad}</td>
                </tr>
            `,
    )
    .join("");

  formulario.reset();
});
