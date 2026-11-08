import { Header } from './Header';
import { FormularioLogin } from './FormularioLogin';
import { AvisoSoporte } from './AvisoSoporte';
import { Footer } from './Footer';

export function PaginaLogin() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <Header />
      <main>
        <FormularioLogin />
        <AvisoSoporte />
      </main>
      <Footer />
    </div>
  );
}