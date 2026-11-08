export function Header() {
  return (
    <header style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ backgroundColor: '#4f46e5', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>MA</span>
        <span>Mesa de ayuda</span>
      </div>
      <nav style={{ display: 'flex', gap: '0.5rem' }}>
        <button style={{ padding: '0.5rem 1rem', borderRadius: '20px', border: 'none' }}>Iniciar sesión</button>
        <button style={{ padding: '0.5rem 1rem', borderRadius: '20px', border: 'none' }}>Registrar solicitud</button>
        <button style={{ padding: '0.5rem 1rem', borderRadius: '20px', border: 'none' }}>Consultar solicitudes</button>
      </nav>
    </header>
  );
}