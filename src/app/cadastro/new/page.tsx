import CampoTexto from '@/Components/CampoTexto';
import Logo from '@/Components/logo';
import Link from 'next/link';

export default function CadastroNovo() {
  return ( 
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-orange-500 via-orange-400 to-ffe4cc">
  <main>
    <div className="w-411 h-178 bg-white p-8">
      <div className="flex justify-between w-full">
        <h2 className="text-orange-700 font-extrabold text-3xl">Registre-se</h2>
        <Logo/>
      </div>
      <form action="">
        <ul>
          <li className="my-4">
              <CampoTexto placeholderText="Email"/>
          </li>
          <li className="my-4">
              <CampoTexto placeholderText="Nome"/>
          </li>
          <li className="my-4">
              <CampoTexto placeholderText="Senha"/>
          </li>
        </ul>
        <Link href="/">
                <button className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"
                    >Cancelar</button>
        </Link>

        <button className="ml-16 px-4 py-2 rounded bg-orange-500 text-white">Pronto</button>

      </form>
    </div>
  </main>
</div>
  );
}