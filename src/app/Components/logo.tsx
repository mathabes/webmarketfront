import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      {/* Usando Link do Next.js para redirecionar para a página principal */}
      <Link href="/">
          <img src="/logo.png" alt="Logo" style={{ width: '100px' }} />

      </Link>
    </div>
  );
};

export default Logo;