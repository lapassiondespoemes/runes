import { HttpError } from "../types/HttpError"
import settings from "../Settings"

export class GenericService {

    private static _instance: GenericService

    protected entity: string
    protected token?: string

    protected constructor(entity: string, token?: string) {
        this.entity = entity
        this.token = token
    }

    public static getInstance(entity: string, token?: string): GenericService {
        if (!GenericService._instance) {
            GenericService._instance = new GenericService(entity, token);
        }
        return GenericService._instance;
    }

    protected request = async <T>(requestProps: GenericService.RequestProps) => {

        let url = settings.rlApiUrl + `/${this.entity}?`

        let headers: HeadersInit = [
            ["content-type", "application/json"]
        ]

        if (requestProps.token) {
            headers.push(["Authorization", `Bearer ${requestProps.token}`])
        }

        if (requestProps.filter) {
            url = `${url}${requestProps.filter}`
        }
        const response = await fetch(url, {
            headers: headers
        })

        if (response.ok) {
            return await response.json() as T
        } else {
            return new HttpError(response.status, response.statusText)
        }
    }



    protected get = async <T>(requestGetProps: GenericService.RequestGetProps) => {
        const rP: GenericService.RequestProps = {
            method: GenericService.HttpRequestMethod.Get,
            filter: requestGetProps.filter,
            token: this.token
        }
        return this.request(rP)
    }


    protected post = async <T>(requestPostProps: GenericService.RequestPostProps) => {
        const rP: GenericService.RequestProps = {
            method: GenericService.HttpRequestMethod.Get,
            body: requestPostProps.body,
            token: this.token
        }
        return this.request(rP)
    }



    protected put = async <T>(requestPutProps: GenericService.RequestPutProps) => {
        const rP: GenericService.RequestProps = {
            method: GenericService.HttpRequestMethod.Get,
            body: requestPutProps.body,
            token: this.token
        }
        return this.request(rP)
    }


}



export namespace GenericService {


    export enum HttpRequestMethod {
        Get,
        Post,
        Put,
        Patch,
        Delete,
        Options
    }

    export interface RequestProps {
        method: HttpRequestMethod,
        filter?: string,
        body?: string,
        token?: string
    }

    export interface RequestGetProps {
        filter?: string,
    }

    export interface RequestPostProps {
        body?: string,
    }

    export interface RequestPutProps {
        body?: string,
    }

}