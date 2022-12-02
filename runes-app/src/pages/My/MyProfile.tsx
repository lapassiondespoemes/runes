import { useTranslation } from "react-i18next";

export default function MyProfile() {
    const { t, i18n } = useTranslation()
    return <div>
        {t('Mon Profil')}
    </div>;
}