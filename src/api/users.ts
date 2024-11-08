import {axi} from '../api/useAxios'

export const loginRequest = async (email: string, password: string) => {

    try {
        const response = await axi.post("/api/user/login/", {email, password})
        return response
    } catch (err) {
        console.log(err)
    }
}