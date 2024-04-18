import AnunciosPromocoes from '../Components/AnunciosPromocoes';
import { NavBar } from '../Components/NavBar';

export default function Home() {
  return ( 
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="dashboard" />
      <AnunciosPromocoes />
    </main>
  );
}