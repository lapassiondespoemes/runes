import { useTranslation } from "react-i18next";

export default function RegisterPage() {
    const { t, i18n } = useTranslation()
    return <form>
        {t('Inscription')}
        <input type='email' placeholder={t('Adresse courriel').toString()}></input>
        <input type='password'></input>
        <input type='password'></input>
        <button className='btn-75'>{t("S'inscrire")}</button>
    </form>;
}