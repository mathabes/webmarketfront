"use server"

export async function getById(id: number) {
    const resp = await fetch("http://localhost:8080/usuario/" + id)

    if(!resp.ok){
        throw new Error("Erro ao buscar usuário")
    }
    return await resp.json()

}