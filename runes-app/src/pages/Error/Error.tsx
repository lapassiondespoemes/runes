import { useTranslation } from "react-i18next";

export default function ErrorPage() {
    const { t, i18n } = useTranslation()
    return <div>
        {t('Erreur')}
    </div>;
}