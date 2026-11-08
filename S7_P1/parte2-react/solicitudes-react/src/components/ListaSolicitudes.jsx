function Listasolicitudes() {
    return (
        <section className="tarjeta resultados">
            <div className="titulo-lista">
                <div>
                    <span className="etiqueta">Registros</span>
                    <h2>Solicitudes registradas</h2>
                </div>
                <span id="contador">0 solicitudes</span>
                </div>

            <div id="listaSolicitudes">
                <p className="sin-datos">No existen solicitudes registradas</p>
            </div>
        </section>
    )
}

export default Listasolicitudes