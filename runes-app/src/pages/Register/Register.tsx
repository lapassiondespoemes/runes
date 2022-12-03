import { IRegisterForm } from "../../interfaces/IRegisterForm";
import Register from "../../services/RegisterService";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function RegisterPage() {
    const [registerError, setRegisterError] = useState<string | undefined>(undefined)
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IRegisterForm>({ reValidateMode: 'onBlur' });
    const { t, i18n } = useTranslation()


    return (
        <div className="register-page">
            <div></div>
            <form method="POST">
                {t('Inscription')}
                <input type='email' placeholder={t('Adresse courriel').toString()}></input>
                <input type='password'></input>
                <input type='password'></input>
                <button className='btn-75'>{t("S'inscrire")}</button>
            </form>
        </div>);
}