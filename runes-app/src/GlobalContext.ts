import { createContext, useContext } from "react"

import ISection from "./interfaces/ISection"
import settings from "./Settings"

const url = settings.rlApiUrl + "/api/sections"


export interface IGlobalContext {
    userName: string
    authenticated: boolean
    mature: boolean
    token: string | undefined
    sections: ISection[]
}

export type TGlobalContext = {
    config: IGlobalContext,
    setConfig: (c: IGlobalContext) => void
}

const initialConfig: IGlobalContext = {
    userName: "unknown",
    authenticated: false,
    mature: false,
    token: undefined,
    sections: []
}


export const MyGlobalContext =
    createContext<TGlobalContext>(
        {
            config: initialConfig,
            setConfig: (c) => { console.log(c) }
        }
    )


export const useGlobalContext = () => useContext(MyGlobalContext)

