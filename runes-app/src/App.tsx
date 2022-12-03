import './App.scss'

import { Link, Outlet } from 'react-router-dom';

import ISection from './interfaces/ISection';
import NavbarComponent from './components/Navbar/Navbar';
import settings from './Settings';
import { useFetch } from 'usehooks-ts';
import { useGlobalContext } from './GlobalContext';
import { useTranslation } from 'react-i18next';

const url = settings.rlApiUrl + "/api/sections"

const App = () => {
  const { config, setConfig } = useGlobalContext()
  const { data, error } = useFetch<ISection[]>(url)
  if (data) {
    config.sections = data
    setConfig(config)
  }
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
