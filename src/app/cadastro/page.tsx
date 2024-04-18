import CampoTexto from '@/Components/CampoTexto';
import Logo from '../../Components/logo';
import Link from 'next/link';

export default function Cadastro() {
  return ( 
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-orange-500 via-orange-400 to-ffe4cc">
  <main>
    <div className="w-411 h-178 bg-white p-8">
      <div className="flex justify-between w-full">
        <h2 className="text-orange-700 font-extrabold text-3xl">Registre-se</h2>
        <Logo  />
      </div>
      <Link href="/cadastro/new">
          <button className="px-4 py-2 rounded bg-orange-500 text-white">Iniciar cadastro</button>
      </Link>
    </div>
  </main>
</div>
  );
}