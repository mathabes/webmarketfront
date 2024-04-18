import Link from 'next/link';



const Logo = () => {
  return (
    <div className="logo ml-auto">
      {/* Usando Link do Next.js para redirecionar para a página principal */}
      <Link href="/">
          <img className="size-36" src="/logo.png" alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
