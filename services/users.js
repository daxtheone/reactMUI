import { URL_FETCH } from '../constants'


export const getGitHubUser = async (user) => {
    const response = await fetch(`${URL_FETCH}${user}`,{
        method:'GET'
    })
    const payload = await response.json()
    return payload
}