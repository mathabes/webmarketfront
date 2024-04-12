import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="logo text-white">
        <Link href="/">
          Logo
        </Link>
      </div>
      
      {/* Barra de Pesquisa */}
      <div className="search">
        <input type="text" placeholder="Search" className="px-2 py-1 rounded-full bg-gray-200 border border-gray-300" />
      </div>

      {/* Botão "Venda seu produto" */}
      <div className="sell-button">
        <button className="px-4 py-2 rounded bg-green-500 text-white">Venda seu produto</button>
      </div>
      
      {/* Ícone Customizável */}
      <div className="custom-icon">
        {/* Aqui você pode adicionar seu ícone personalizado */}
        {/* Exemplo de ícone: <img src="seu_icone.png" alt="Seu Ícone" className="w-6 h-6" /> */}
        {/* Ou use um ícone de uma biblioteca de ícones, como FontAwesome: */}
        {/* <FontAwesomeIcon icon={["fas", "your-icon"]} /> */}
      </div>
      
      {/* Botão de Cadastro */}
      <div className="signup">
        <button className="px-4 py-2 rounded bg-blue-500 text-F06606">Cadastro</button>
      </div>
      
      {/* Botão de Login */}
      <div className="login">
        <button className="px-4 py-2 rounded bg-F06606 text-white">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
