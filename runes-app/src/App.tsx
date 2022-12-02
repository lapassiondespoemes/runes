import './App.scss'

import Navbar from './components/Navbar/Navbar';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="app">
      <header>
        <div className='site-title'>{t('La Passion Des Poèmes')}</div>
        <div className='header-commands'>
          <button className='btn-75'>{t('Connexion')}</button>
          <button className='btn-75'>{t('Inscription')}</button>
        </div>
      </header>
      <Navbar></Navbar>
    </div>
  )
}

export default App
