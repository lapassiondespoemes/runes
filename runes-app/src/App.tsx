import './App.scss'

import { Link, Outlet } from 'react-router-dom';

import NavbarComponent from './components/Navbar/Navbar';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="app">
      <header>
        <Link className='site-title' to="">{t('La Passion Des Poèmes')}</Link>
        <div className='header-commands'>
          <Link className='btn-75' to='login'>{t('Connexion')}</Link>
          <Link className='btn-75' to='register'>{t('Inscription')}</Link>
        </div>
      </header>
      <NavbarComponent></NavbarComponent>
      <Outlet></Outlet>
    </div>
  )
}

export default App
