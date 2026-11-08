import Menu from "../components/Menu";
import EncabezadoConsulta from "../components/EncabezadoConsulta";
import FiltroPrioridad from "../components/FiltroPrioridad";
import ListaSolicitudes from "../components/ListaSolicitudes";

function PaginaConsulta() {
    return (
        <main className="contenedor" id="consulta">
            <Menu />

            <section className="tarjeta">
                <EncabezadoConsulta />
                <FiltroPrioridad />
            </section>

            <ListaSolicitudes />
        </main>
    )
}

export default PaginaConsulta