import './Navbar.scss'

import { Link } from "react-router-dom"
import settings from "../../Settings"
import { useFetch } from "usehooks-ts"
import { useGlobalContext } from '../../GlobalContext'
import { useTranslation } from 'react-i18next'

const url = settings.rlApiUrl + "/api/sections?navbarPinned=true"

export interface SectionNavItem {
    label: string,
    name: string
}

const NavbarRegularItems = () => {
    const { config } = useGlobalContext()
    const { t } = useTranslation()
    return (<>
        <li>
            <Link to="members">{t('Membres')}</Link>
        </li>
        {config.authenticated ?? <>
            <li>
                <Link to="moderation">{t('Modération')}</Link>
            </li>
            <li>
                <Link to="admin">{t('Administration')}</Link>
            </li>
        </>
        }
    </>
    )
}

const NavbarComponent = () => {
    const { t, i18n } = useTranslation()
    const { config } = useGlobalContext()

    return (<nav>
        <ul>
            {config.sections?.filter((e) => e.navbarPinned === true)?.map((e: SectionNavItem, i) => {
                return (<li key={i}><Link to={"sections/" + e.label}>{t(e.name)}</Link></li>)
            })}
            <NavbarRegularItems></NavbarRegularItems>
        </ul>
    </nav>)
}

export default NavbarComponent