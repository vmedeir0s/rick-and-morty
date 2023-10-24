import logo from '../assets/logo.png';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <img src={logo} alt="Rick and Morty Logo" />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/personagens">Personagens</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
