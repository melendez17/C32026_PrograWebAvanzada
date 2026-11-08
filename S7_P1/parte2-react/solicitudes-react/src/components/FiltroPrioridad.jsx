function FiltroPrioridad() {
    return (
        <div className="campo">
            {/* for s eescribe htmlfor en jsx */}
            <label htmlFor="filtroPrioridad">Prioridad</label>
            <select id="filtroPrioridad">
                <option value="">Todas</option>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
            </select>
        </div>
    );
}

export default FiltroPrioridad;