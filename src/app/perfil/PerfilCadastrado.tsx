"use client"

import { destroy } from "../actions/usuario/destroy";
import toast from "react-hot-toast";

interface Usuario {
    id: number,
    email: string,
    nome: string
  }

export function PerfilCadastrado(perfilCadastrado: Usuario) {

  function handleDelete() {
    toast.promise(
        destroy(perfilCadastrado.id),
        {
            loading: "apagando usuário...",
            success: "usuário deletado",
            error: (error) => { 
                return error.message
            }
        }
    )
}



    return (
        <div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <p>Email</p>
                    <span>{perfilCadastrado.email}</span>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <p>Nome</p>
                    <span>{perfilCadastrado.nome}</span>
                </div>
            </div>

            {/* <Link href="/cadastro/edit">
                <button className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">Editar Perfil</button>
            </Link> */}

            <button onClick={handleDelete} className="bg-transparent hover:bg-red-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">Deletar Perfil</button>
        </div>
        
    )
}