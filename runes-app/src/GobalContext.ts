import { createContext, useContext } from "react"

export interface IGlobalContext {
    userName: string
    authenticated: boolean
    mature: boolean
    token: string | undefined
}

export type TGlobalContext = {
    config: IGlobalContext,
    setConfig: (c: IGlobalContext) => void
}

const initialConfig: IGlobalContext = {
    userName: "unknown",
    authenticated: false,
    mature: false,
    token: undefined
}

export const MyGlobalContext = createContext<TGlobalContext>(
    {
        config: initialConfig,
        setConfig: (c) => { console.log(c) }
    }
)

export const useGlobalContext = () => useContext(MyGlobalContext)