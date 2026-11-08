import Menu from "../components/Menu";
import EncabezadoRegistro from "../components/EncabezadoRegistro";
import FormularioSolicitud from "../components/FormularioSolicitud";
import ListaSolicitudes from "../components/ListaSolicitudes";
import SalidaJSON from "../components/SalidaJSON";

function PaginaRegistro() {
    return (
        <main className="contenedor" id="registro">
            <Menu />

            <section className="tarjeta">
                <EncabezadoRegistro />
                <FormularioSolicitud />
            </section>

            <ListaSolicitudes />
            <SalidaJSON />
        </main>
    )
}

export default PaginaRegistro