import { useTranslation } from "react-i18next";

export default function LoginPage() {
    const { t, i18n } = useTranslation()
    return <div>
        {t('Connexion')}
    </div>;
}