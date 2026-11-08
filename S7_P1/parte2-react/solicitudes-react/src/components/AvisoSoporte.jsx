export function AvisoSoporte() {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <p style={{ color: '#4f46e5', fontSize: '0.8rem', fontWeight: 'bold' }}>SOPORTE</p>
      <h3>¿Necesita ayuda?</h3>
      <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>Atención de lunes a viernes, de 8:00 a.m. a 5:00 p.m.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '6px' }}>
          <h4>Hardware</h4>
          <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>Computadoras, impresoras y periféricos.</p>
          <strong style={{ color: '#4f46e5', fontSize: '0.8rem' }}>Ext. 101</strong>
        </div>

        <div style={{ backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '6px' }}>
          <h4>Software</h4>
          <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>Programas, licencias y correo electrónico.</p>
          <strong style={{ color: '#4f46e5', fontSize: '0.8rem' }}>Ext. 102</strong>
        </div>

        <div style={{ backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '6px' }}>
          <h4>Red</h4>
          <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>Internet, wifi y acceso a carpetas compartidas.</p>
          <strong style={{ color: '#4f46e5', fontSize: '0.8rem' }}>Ext. 103</strong>
        </div>
      </div>
    </div>
  );
}