import { ProxyState } from "../AppState.js"
import { Wild } from "../Models/Wild.js"
import { wildApi } from "./AxiosService.js"


class WildService {
    async getWild(){
        let res = await wildApi.get('/pokemon')
        ProxyState.wild = res.data.results.map(w => new Wild(w))
    }
}


export const wildService = new WildService()
