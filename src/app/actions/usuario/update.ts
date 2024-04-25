"use server"

import { redirect } from "next/navigation"


export async function update(formData: FormData){
    await new Promise(r => setTimeout(r, 4000))
    const id = formData.get("id")
    const data = {
        email: formData.get("email"),
        nome: formData.get("nome")
    }
    
    const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers:{
            "Content-Type": "application/json",
            "Accept-Language": "pt-br"
        }
    }
   
    const resp = await fetch("http://localhost:8080/usuario/" + id, options)

    if(resp.ok){
        redirect("/perfil")
    }
}