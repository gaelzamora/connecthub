import {axi} from '../api/useAxios'

export const loginRequest = async (email: string, password: string) => {

    try {
        const response = await axi.post("/api/user/login/", {email, password})
        return response
    } catch (err) {
        console.log(err)
    }
}

export const registerRequest = async (email: string, first_name: string, last_name: string, password: string) => {
    await axi.post("/api/user/create/", {email, first_name, last_name, password})
}