import { useTranslation } from "react-i18next";

const NotImplementedPage = () => {
    const { t, i18n } = useTranslation()
    return <div>
        {t('Non Implémenté')}
    </div>;
}

export default NotImplementedPage