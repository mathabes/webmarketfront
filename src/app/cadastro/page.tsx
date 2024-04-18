import CampoTexto from '@/Components/CampoTexto';
import Logo from '../../Components/logo';

export default function Movimentacoes() {
  return ( 
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-orange-500 via-orange-400 to-ffe4cc">
  <main>
    <div className="w-411 h-178 bg-white p-8">
      <div className="flex justify-between">
        <h2 className="text-orange-700 font-extrabold text-3xl">Registre-se</h2>
        <Logo widthLogo="50%" />
      </div>
      <CampoTexto placeholderText="Email"/>
    </div>
  </main>
</div>
  );
}