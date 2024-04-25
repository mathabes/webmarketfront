"use server"

import { create } from "@/app/actions/usuario/create";
import { getById } from "@/app/actions/usuario/get-by-id";
import CampoTexto from '@/Components/CampoTexto';
import Logo from '@/Components/logo';
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from 'next/link';
import FormEdit from "./FormEdit";

export default async function EditarPerfil(params: Params) {
    const id = params.id

    const usuario = getById(id)
    console.log(usuario)

  return ( 
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-orange-500 via-orange-400 to-ffe4cc">
  <main>
    <div className="w-411 h-178 bg-white p-8">
      <div className="flex justify-between w-full">
        <h2 className="text-orange-700 font-extrabold text-3xl">Editar Perfil</h2>
        <Logo/>
      </div>
        <FormEdit {...usuario}/>
    </div>
  </main>
</div>
  );
}