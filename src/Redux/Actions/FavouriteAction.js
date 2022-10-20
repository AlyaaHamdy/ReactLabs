import {ADDFAVPROD} from '../Types'

export const addFavourite =(data)=>{
    //console.log(data)
    return {
        
        type:ADDFAVPROD,
        payload:data
    }

}