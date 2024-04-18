"use server"

export async function get(){

    const resp = await fetch("http://localhost:8080/usuario")
    return await resp.json()

}