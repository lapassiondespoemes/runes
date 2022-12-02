import './Navbar.scss'

import { Link } from "react-router-dom"
import settings from "../../Settings"
import { t } from 'i18next'
import { useFetch } from "usehooks-ts"

const url = settings.rlApiUrl + "/api/sections?navbarPinned=true"

interface SectionNavItem {
    label: string,
    name: string
}

const Navbar = () => {
    const { data, error } = useFetch<SectionNavItem[]>(url)

    if (error) return <nav>{t('Il y eu une erreur')}</nav>
    if (!data) return <nav>{t('Chargement...')}</nav>

    return <nav>
        <ul>
            {data?.map((e: SectionNavItem, i) => {
                return (<li key={i}><Link to={e.label}>{e.name}</Link></li>)
            })}
            <li>
                <Link to="members">Membres</Link>
            </li>
            <li>
                <Link to="moderation">Modération</Link>
            </li>
            <li>
                <Link to="admin">Administration</Link>
            </li>
        </ul>
    </nav>
}
export default Navbar