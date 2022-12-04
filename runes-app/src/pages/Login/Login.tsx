import settings from "../../Settings";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const url = settings.rlApiUrl + "/api/login"

interface ILoginForm {
    email: string,
    password: string
}

interface IUser {
    email: string,
    id: number
}
interface ILoginResponse {
    accessToken: string,
    user: IUser
}

export default function LoginPage() {

    const [loginError, setLoginError] = useState<string | undefined>(undefined)
    const { register, handleSubmit, watch, formState: { errors } } = useForm<ILoginForm>({ reValidateMode: 'onBlur' });
    const { t, i18n } = useTranslation()

    const onSubmit = async (form: ILoginForm) => {
        const response = await window.fetch(url, {
            method: 'post',
            headers: [
                ["content-type", "application/json"]
            ],
            body: JSON.stringify(form)
        }).then(async (response) => {
            if (!response.ok) {
                setLoginError(response.statusText)
            } else {
                const data = response.json() as Promise<ILoginResponse>;
                await data.then((d) => {
                    console.log(d)
                })
            }
        })
    };

    return (
        <div className="login-page">
            <div>Ceci est une explication pour se connecter.</div>
            <form method='POST' onSubmit={handleSubmit(onSubmit)}>
                <div className="page-title">{t('Connexion')}</div>
                <div><label htmlFor="email">Adresse courriel</label>
                    <input type='email'
                        placeholder={t('Adresse courriel').toString()}
                        {...register("email", { required: true })} />
                    <div className="validation-errors">{errors.email && <span>{t('L\'adresse courriel est requise.')}</span>}</div>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input type='password'
                        placeholder={t('Mot de passe').toString()}
                        {...register("password", { required: true })} />
                    <div className="validation-errors">{errors.password && <span>{t('Le mot de passe est requis.')}</span>}</div>
                </div>
                <button className='btn-75'>{t('Se connecter')}</button><input className='btn-75' type="reset" />
                <div className="validation-errors">{loginError && <span>{t(loginError.replace('"', ''))}</span>}</div>
            </form>
        </div>);
}