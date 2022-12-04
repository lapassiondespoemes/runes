import { Link } from "react-router-dom"
import { useGlobalContext } from "../../GlobalContext"
import { useTranslation } from "react-i18next"

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

export default NavbarRegularItems