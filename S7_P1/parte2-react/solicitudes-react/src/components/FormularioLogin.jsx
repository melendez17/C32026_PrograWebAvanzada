export function FormularioLogin() {
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '8px', maxWidth: '400px', margin: '2rem auto', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <p style={{ color: '#4f46e5', fontSize: '0.8rem', fontWeight: 'bold' }}>MESA DE AYUDA</p>
      <h2>Iniciar sesión</h2>
      <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Ingrese con su correo institucional para registrar y consultar solicitudes.</p>
      
      <form style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem' }}>Correo</label>
          <input type="email" placeholder="Ej. ana@empresa.com" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem' }}>Contraseña</label>
          <input type="password" placeholder="Escriba su contraseña" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>

        <div>
          <label style={{ fontSize: '0.85rem' }}>
            <input type="checkbox" /> Recordarme
          </label>
        </div>

        <button type="button" style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '0.75rem', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
          Ingresar
        </button>
      </form>
    </div>
  );
}