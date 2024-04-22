"use server"

import { redirect } from "next/navigation"


export async function create(formData: FormData){
    await new Promise(r => setTimeout(r, 4000))

    const data = {
        email: formData.get("email"),
        nome: formData.get("nome")
    }
    
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    }
   
    const resp = await fetch("http://localhost:8080/usuario", options)

    if(resp.ok){
        redirect("/")
    }
}