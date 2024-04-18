import Link from 'next/link';

interface LogoWidthProps {
  widthLogo: string;
}

const Logo: React.FC<LogoWidthProps> = ({widthLogo}) => {
  return (
    <div className="logo">
      {/* Usando Link do Next.js para redirecionar para a página principal */}
      <Link href="/">
          <img src="/logo.png" alt="Logo" style={{ width: widthLogo }} />
      </Link>
    </div>
  );
};

export default Logo;
