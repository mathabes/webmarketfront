import Link from "next/link";
import Logo from '../Components/logo';

export function NavBar({ active }: { active: "dashboard" | "Cadastro" | "Login" | "VendaProduto" | "Carrinho"}) {
    return (
        <nav className="flex justify-between items-center px-8 py-4 mt-10 bg-white border-gray-200 border-solid border shadow-md w-full">
            <ul>
                <li className={`border-b-4 pb-3 ${active === "dashboard" ? 'border-b-4  pb-3' : ''}`}>
                    <Link href="/"><Logo /></Link>
                </li>
            </ul>
            
            <ul className="flex gap-6">

                <li>
                    <input type="text" placeholder="Pesquisar..." className="px-2 py-1 bg-gray-200 border border-gray-300" />
                </li>
                <li className={`${active === "VendaProduto" ? 'border-b-4  pb-3' : ''} text-orange-500 px-4 py-2 rounded`}>
                    <Link href="/vendaProduto">Venda seu Produto</Link>
                </li>
                <li>
                    <Link href="/carrinho">
                        <img  src="/carrinho.png" alt="Carrinho de Compras" className="h-6 w-6 bg-orange-500 rounded-full p-1"/>
                    </Link>
                </li>
            </ul>
            <ul className="flex gap-6">
                <li className={`${active === "Cadastro" ? 'border-b-4  pb-3' : ''}`}>
                    <Link href="/cadastro">
                        <button className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">Cadastre-se</button>
                    </Link>
                </li>
                <li className={`${active === "Login" ? 'border-b-4 pb-3' : ''}`}>
                    <Link href="/login">
                        <button className="px-4 py-2 rounded bg-orange-500 text-white">Login</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
