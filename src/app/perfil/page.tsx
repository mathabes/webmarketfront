import { LucideCircleUserRound} from 'lucide-react';
import Logo from '@/Components/logo';
import { PerfilCadastrado } from "./PerfilCadastrado";
import { get } from "@/app/actions/usuario/get";

export default async function Perfil() {

  const usuarios: Array<Usuario>= await get()

  return ( 
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-orange-500 via-orange-400 to-ffe4cc">
  <main>
    <div className="w-411 h-178 bg-white p-8">
        <Logo/>
        <LucideCircleUserRound className="h-6 w-6 bg-orange-500 rounded-full p-1" />

        {usuarios.length > 0 && <PerfilCadastrado {...usuarios[usuarios.length - 1]} />}
    </div>
  </main>
</div>
  );
}