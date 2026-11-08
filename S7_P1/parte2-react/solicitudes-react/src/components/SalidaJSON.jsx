//Salida JSON
// Muestra la tarjeta JSON generado con el bloque pre
// Es la section 

function SalidaJSON() {
    return (
        <section className="tarjeta json">
            <span className="etiqueta">JSON generado</span>
            <h2>Informacion almacenada</h2>
            <pre id="salidaJSON">[]</pre>
        </section>
    )
}

export default SalidaJSON