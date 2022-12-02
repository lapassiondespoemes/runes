import './Navbar.scss'

import { Link } from "react-router-dom"
import settings from "../../Settings"
import { useFetch } from "usehooks-ts"
import { useTranslation } from 'react-i18next'

const url = settings.rlApiUrl + "/api/sections?navbarPinned=true"

interface SectionNavItem {
    label: string,
    name: string
}

const NavbarComponent = () => {
    const { t, i18n } = useTranslation()
    const { data, error } = useFetch<SectionNavItem[]>(url)

    if (error) return <nav>{t('Il y eu une erreur')}</nav>
    if (!data) return <nav>{t('Chargement...')}</nav>

    return <nav>
        <ul>
            {data?.map((e: SectionNavItem, i) => {
                return (<li key={i}><Link to={e.label}>{t(e.name)}</Link></li>)
            })}
            <li>
                <Link to="members">{t('Membres')}</Link>
            </li>
            <li>
                <Link to="moderation">{t('Modération')}</Link>
            </li>
            <li>
                <Link to="admin">{t('Administration')}</Link>
            </li>
        </ul>
    </nav>
}
export default NavbarComponent