function FormularioSolicitud() {
  return (
    <form id="formSolicitud" noValidate>
      <div className="campo">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" placeholder="Ej Ana Rodriguez"/>
        <span className="error" id="errorNombre"></span>
      </div>

      {/* Campo departamento */}
      <div className="campo">
        <label htmlFor="departamento">Departamento</label>
        <select id="departamento">
          <option value="">Seleccione un departamento</option>
          <option value="Administracion">Administración</option>
          <option value="Finanzas">Finanzas</option>
          <option value="Recursos Humanos">Recursos Humanos</option>
          <option value="Tecnologia">Tecnología</option>
          <option value="Ventas">Ventas</option>
        </select>
        <span className="error" id="errorDepartamento"></span>
      </div>

      {/* Campo de tipo de problema */}
      <div className="campo">
        <label htmlFor="tipoProblema">Tipo de problema</label>
        <select id="tipoProblema">
          <option value="">Seleccione un tipo de problema</option>
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
          <option value="Red">Red</option>
          <option value="Acceso">Acceso</option>
          <option value="Otro">Otro</option>
        </select>
        <span className="error" id="errorTipo"></span>
      </div>

      {/* Campo de prioridad */}
      <div className="campo">
        <label htmlFor="prioridad">Prioridad</label>
        <select id="prioridad">
          <option value="">Seleccione una prioridad</option>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
        <span className="error" id="errorPrioridad"></span>
      </div>

      {/* Campo de descripción */}
      <div className="campo">
        <label htmlFor="descripcion">Descripción</label>
        <textarea id="descripcion" rows={4} placeholder="Describa el problema con detalle"></textarea>
        <span className="error" id="errorDescripcion"></span>
      </div>

      <button type="submit">Registrar solicitud</button>
    </form>
  )
}

export default FormularioSolicitud