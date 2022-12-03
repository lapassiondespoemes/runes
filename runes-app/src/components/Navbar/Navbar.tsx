import './Navbar.scss'

import { Link } from "react-router-dom"
import settings from "../../Settings"
import { useFetch } from "usehooks-ts"
import { useGlobalContext } from '../../GobalContext'
import { useTranslation } from 'react-i18next'

const url = settings.rlApiUrl + "/api/sections?navbarPinned=true"

interface SectionNavItem {
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
    const { data, error } = useFetch<SectionNavItem[]>(url)

    if (error) return (<nav>
        <ul>
            <li>{t('Impossible de récupérer la liste des sections')}</li>
            <NavbarRegularItems></NavbarRegularItems>
        </ul>
    </nav>)

    if (!data) return (<nav>
        <ul>
            <li>{t('Chargement en cours...')}</li>
            <NavbarRegularItems></NavbarRegularItems>
        </ul>
    </nav>)

    return (<nav>
        <ul>
            {data?.map((e: SectionNavItem, i) => {
                return (<li key={i}><Link to={e.label}>{t(e.name)}</Link></li>)
            })}
            <NavbarRegularItems></NavbarRegularItems>
        </ul>
    </nav>)
}

export default NavbarComponent