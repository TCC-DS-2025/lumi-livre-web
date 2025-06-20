import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Icon } from './Icon';

import homeIconUrl from '../assets/icons/home.svg';
import homeActiveIconUrl from '../assets/icons/home-active.svg';
import bookIconUrl from '../assets/icons/books.svg';
import bookActiveIconUrl from '../assets/icons/books-active.svg';
import usersIconUrl from '../assets/icons/users.svg';
import usersActiveIconUrl from '../assets/icons/users-active.svg';
import coursesIconUrl from '../assets/icons/courses.svg';
import coursesActiveIconUrl from '../assets/icons/courses-active.svg';
import loansIconUrl from '../assets/icons/loans.svg';
import loansActiveIconUrl from '../assets/icons/loans-active.svg';
import cddIconUrl from '../assets/icons/cdd.svg';
import cddActiveIconUrl from '../assets/icons/cdd-active.svg';
import genresIconUrl from '../assets/icons/genres.svg';
import genresActiveIconUrl from '../assets/icons/genres-active.svg';
import authorsIconUrl from '../assets/icons/authors.svg';
import authorsActiveIconUrl from '../assets/icons/authors-active.svg';
import settingsIconUrl from '../assets/icons/settings.svg';
import settingsActiveIconUrl from '../assets/icons/settings-active.svg';
import logoutIconUrl from '../assets/icons/logout.svg';

const navLinks = [
  { path: '/dashboard', label: 'Início', icon: homeIconUrl, activeIcon: homeActiveIconUrl },
  { path: '/livros', label: 'Livros', icon: bookIconUrl, activeIcon: bookActiveIconUrl },
  { path: '/alunos', label: 'Alunos', icon: usersIconUrl, activeIcon: usersActiveIconUrl },
  { path: '/cursos', label: 'Cursos', icon: coursesIconUrl, activeIcon: coursesActiveIconUrl },
  { path: '/emprestimos', label: 'Empréstimos', icon: loansIconUrl, activeIcon: loansActiveIconUrl },
  { path: '/cdd', label: 'CDD', icon: cddIconUrl, activeIcon: cddActiveIconUrl },
  { path: '/generos', label: 'Gêneros', icon: genresIconUrl, activeIcon: genresActiveIconUrl },
  { path: '/autores', label: 'Autores', icon: authorsIconUrl, activeIcon: authorsActiveIconUrl },
];

interface SidebarProps {
  isExpanded: boolean;
  setExpanded: (isExpanded: boolean) => void;
}

export function Sidebar({ isExpanded, setExpanded }: SidebarProps) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside
      className={`fixed top-20 left-0 h-[calc(100vh-5rem)] bg-lumi-primary text-gray-200 flex flex-col shrink-0 transition-all duration-300 ease-in-out shadow-md z-20 ${isExpanded ? 'w-64' : 'w-20'}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <nav className="flex-1 p-2 space-y-2 overflow-y-auto mt-4">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `flex items-center p-3 rounded-lg transition-colors duration-200 hover:bg-white/20 ${isExpanded ? '' : 'justify-center'} ${isActive ? 'bg-white/20 text-white' : 'text-gray-300'}`}
          >
            {({ isActive }) => (
              <>
                <Icon iconUrl={isActive ? link.activeIcon : link.icon} />
                <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'w-40 ml-4' : 'w-0'}`}>
                  <span className={`whitespace-nowrap ${isActive ? 'font-bold' : ''}`}>
                    {link.label}
                  </span>
                </div>
              </>
            )}
          </NavLink>
        ))}
      </nav>
      
      <div className="p-2 border-t border-white/10 space-y-2">
        <NavLink
          to="/configuracoes"
          className={({ isActive }) => `flex items-center p-3 rounded-lg transition-colors duration-200 hover:bg-white/20 ${isExpanded ? '' : 'justify-center'} ${isActive ? 'bg-white/20 text-white' : 'text-gray-300'}`}
        >
          {({ isActive }) => (
            <>
              <Icon iconUrl={isActive ? settingsActiveIconUrl : settingsIconUrl} />
              <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'w-40 ml-4' : 'w-0'}`}>
                <span className={`whitespace-nowrap ${isActive ? 'font-bold' : ''}`}>
                  Configurações
                </span>
              </div>
            </>
          )}
        </NavLink>

        <button
          onClick={handleLogout}
          className={`w-full flex items-center p-3 rounded-lg text-red-400 hover:bg-red-500/20 transition-colors duration-200 ${isExpanded ? '' : 'justify-center'}`}
        >
          <Icon iconUrl={logoutIconUrl} />
          <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'w-40 ml-4' : 'w-0'}`}>
            <span className="font-semibold whitespace-nowrap">Sair</span>
          </div>
        </button>
      </div>
    </aside>
  );
}