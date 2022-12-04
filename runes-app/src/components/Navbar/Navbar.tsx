import './Navbar.scss'

import { ISectionNavItem } from '../../interfaces/ISectionNavItem'
import { Link } from "react-router-dom"
import NavbarRegularItems from '../NavbarRegularItems/NavbarRegularItems'
import { useGlobalContext } from '../../GlobalContext'
import { useTranslation } from 'react-i18next'

const NavbarComponent = () => {
    const { t, i18n } = useTranslation()
    const { config } = useGlobalContext()

    return (<nav>
        <ul>
            {config.sections?.filter((e) => e.navbarPinned === true)?.map((e: ISectionNavItem, i) => {
                return (<li key={i}><Link to={"sections/" + e.label}>{t(e.name)}</Link></li>)
            })}
            <NavbarRegularItems></NavbarRegularItems>
        </ul>
    </nav>)
}

export default NavbarComponent