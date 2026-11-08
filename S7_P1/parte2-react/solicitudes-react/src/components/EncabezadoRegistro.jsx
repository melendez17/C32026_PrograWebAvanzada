//Encabezado de la pagina de registro

function EncabezadoRegistro() {
  return (
    // un componente devuelve UN solo elemento principal: aquí, es el header
    <header className="encabezado">
        <span className="etiqueta">Mesa de ayuda</span>
        <h1>Registro de solicitudes</h1>
        <p>Complete la información para registrar una nueva solicitud de soporte.</p>
    </header>
  )
}

export default EncabezadoRegistro