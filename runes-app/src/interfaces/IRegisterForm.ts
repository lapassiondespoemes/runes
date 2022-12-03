export interface IRegisterForm {
    email: string,
    password: string,
    passwordConfirm: string,
    pseudonym: string,
    firstName?: string,
    lastName?: string
    termsAgreement: number
}