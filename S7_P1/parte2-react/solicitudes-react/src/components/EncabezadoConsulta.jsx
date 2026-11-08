//Encabezado de la pagina de registro

function EncabezadoConsulta() {
  return (
    // un componente devuelve UN solo elemento principal: aquí, es el header
    <header class="encabezado">
      <span class="etiqueta">Mesa de ayuda</span>
      <h1>Consulta de solicitudes</h1>
      <p>Ingrese la prioridad de la solicitud para realizar la busqueda.</p>
    </header>
  );
}

export default EncabezadoConsulta;
