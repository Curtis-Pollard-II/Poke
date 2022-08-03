import { ProxyState } from "../AppState.js"
import { wildService } from "../Services/WildService.js"
import { Pop } from "../Utils/Pop.js"




function _drawWild(){
    let template = ''
    ProxyState.wild.forEach(w => template += w.Template)
    document.getElementById('wild').innerHTML = template
}



export class WildController {
    constructor(){
        ProxyState.on('wild', _drawWild)
        this.getWild()  
    }

    async getWild(){
        try {
            await wildService.getWild()
            
        } catch (error) {
            console.error('[getting wild]', error)
            Pop.error(error)
        }
    }
    
    
}