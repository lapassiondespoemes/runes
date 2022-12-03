import { IRegisterForm } from "../interfaces/IRegisterForm";
import settings from "../Settings";

const url = settings.rlApiUrl + "/api/register"

const Register = async (form: IRegisterForm, successCallback?: Function, failureCallback?: Function) => {
    const response = await fetch(url, {
        method: 'post',
        headers: [
            ["content-type", "application/json"]
        ],
        body: JSON.stringify(form)
    })
    if (!response.ok) {
        if (failureCallback) { failureCallback(response.statusText) }
    } else {
        if (successCallback) { successCallback(response.json()) }
    }
}

export default Register