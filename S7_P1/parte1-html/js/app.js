let solicitudes = [];

const solicitudesGuardadas = localStorage.getItem("solicitudes");

if (solicitudesGuardadas !== null) {
  solicitudes = JSON.parse(solicitudesGuardadas);
}

// 1. Obtenemos el formulario y solo agregamos el Listener SI EXISTE en esta página
const formulario = document.getElementById("formSolicitud");

if (formulario) {
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const departamento = document.getElementById("departamento").value;
    const tipoProblema = document.getElementById("tipoProblema").value;
    const prioridad = document.getElementById("prioridad").value;
    const descripcion = document.getElementById("descripcion").value.trim();

    limpiarErrores();

    let formularioValido = true;

    if (nombre === "") {
      document.getElementById("errorNombre").textContent = "Debe ingresar el nombre.";
      formularioValido = false;
    }

    if (departamento === "") {
      document.getElementById("errorDepartamento").textContent = "Debe seleccionar un departamento.";
      formularioValido = false;
    }

    if (tipoProblema === "") {
      document.getElementById("errorTipo").textContent = "Debe seleccionar un tipo de problema.";
      formularioValido = false;
    }

    if (prioridad === "") {
      document.getElementById("errorPrioridad").textContent = "Debe seleccionar una prioridad.";
      formularioValido = false;
    }

    if (descripcion === "") {
      document.getElementById("errorDescripcion").textContent = "Debe ingresar una descripción.";
      formularioValido = false;
    }

    if (!formularioValido) {
      return;
    }

    const solicitud = {
      nombre: nombre,
      departamento: departamento,
      tipoProblema: tipoProblema,
      prioridad: prioridad,
      descripcion: descripcion
    };

    solicitudes.push(solicitud);
    localStorage.setItem("solicitudes", JSON.stringify(solicitudes));

    mostrarSolicitudes();
    formulario.reset();
  });
}

const consulta = document.getElementById("formConsulta");

if (consulta) {
  consulta.addEventListener("submit", function (evento) {
    evento.preventDefault(); 
  
    const prioridadSeleccionada = document.getElementById("inputPrioridad").value;
    let solicitudesFiltradas = [];

    if (prioridadSeleccionada === "Todas") {
      solicitudesFiltradas = solicitudes;
    } else {
      solicitudesFiltradas = solicitudes.filter(solicitud => solicitud.prioridad === prioridadSeleccionada);
    }

    const lista = document.getElementById("listaSolicitudes");
    const contador = document.getElementById("contador");
    
    lista.innerHTML = "";

    if (solicitudesFiltradas.length === 0) {
      lista.innerHTML = '<p class="sin-datos">No existen solicitudes registradas con la prioridad seleccionada.</p>';
    } else {
      for (let i = 0; i < solicitudesFiltradas.length; i++) {
        const solicitud = solicitudesFiltradas[i];

        const elemento = document.createElement("article");
        elemento.classList.add("solicitud");

        const titulo = document.createElement("h3");
        titulo.textContent = solicitud.nombre;

        const departamento = document.createElement("p");
        departamento.textContent = "Departamento: " + solicitud.departamento;

        const tipo = document.createElement("p");
        tipo.textContent = "Problema: " + solicitud.tipoProblema;

        const prioridad = document.createElement("p");
        prioridad.textContent = "Prioridad: " + solicitud.prioridad;

        const descripcion = document.createElement("p");
        descripcion.textContent = "Descripción: " + solicitud.descripcion;

        elemento.appendChild(titulo);
        elemento.appendChild(departamento);
        elemento.appendChild(tipo);
        elemento.appendChild(prioridad);
        elemento.appendChild(descripcion);

        lista.appendChild(elemento);
      }
    }
    
    if (contador) {
      contador.textContent = solicitudesFiltradas.length + " solicitudes";
    }
    });
}


function limpiarErrores() {
  // Verificamos que los elementos existan antes de modificar su contenido
  const IDsErrores = ["errorNombre", "errorDepartamento", "errorTipo", "errorPrioridad", "errorDescripcion"];
  IDsErrores.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = "";
  });
}

function mostrarSolicitudes() {
  const lista = document.getElementById("listaSolicitudes");
  const contador = document.getElementById("contador");
  const salidaJSON = document.getElementById("salidaJSON");

  // Si esta página no tiene la lista para renderizar, salimos de la función
  if (!lista) return;

  lista.innerHTML = "";

  if (solicitudes.length === 0) {
    lista.innerHTML = '<p class="sin-datos">No existen solicitudes registradas.</p>';
  } else {
    for (let i = 0; i < solicitudes.length; i++) {
      const solicitud = solicitudes[i];

      const elemento = document.createElement("article");
      elemento.classList.add("solicitud");

      const titulo = document.createElement("h3");
      titulo.textContent = solicitud.nombre;

      const departamento = document.createElement("p");
      departamento.textContent = "Departamento: " + solicitud.departamento;

      const tipo = document.createElement("p");
      tipo.textContent = "Problema: " + solicitud.tipoProblema;

      const prioridad = document.createElement("p");
      prioridad.textContent = "Prioridad: " + solicitud.prioridad;

      const descripcion = document.createElement("p");
      descripcion.textContent = "Descripción: " + solicitud.descripcion;

      elemento.appendChild(titulo);
      elemento.appendChild(departamento);
      elemento.appendChild(tipo);
      elemento.appendChild(prioridad);
      elemento.appendChild(descripcion);

      lista.appendChild(elemento);
    }
  }

  // Actualizamos el contador solo si existe en el DOM
  if (contador) {
    contador.textContent = solicitudes.length + " solicitudes";
  }

  // Actualizamos la salida JSON solo si existe en el DOM
  if (salidaJSON) {
    salidaJSON.textContent = JSON.stringify(solicitudes, null, 2);
  }
}

// Inicializar la vista al cargar la página
mostrarSolicitudes();