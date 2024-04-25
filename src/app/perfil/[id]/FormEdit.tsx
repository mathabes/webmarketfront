"use client"

import CampoTexto from "@/Components/CampoTexto"
import { create } from "@/app/actions/usuario/create"
import Link from "next/link"

export default function FormEdit(usuario: Usuario){
    return(
        <form action={create}>
        <ul>
          <li className="my-4">
              <CampoTexto placeholderText="email"/>
          </li>
          <li className="my-4">
              <CampoTexto placeholderText="nome"/>
          </li>
        </ul>
        <Link href="/">
                <button className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"
                    >Cancelar</button>
        </Link>
            <button type="submit" className="ml-16 px-4 py-2 rounded bg-orange-500 text-white">Pronto</button>

      </form>
    )
}