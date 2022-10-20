import {ADDFAVPROD} from '../Types';

export const favouriteReducer = (state={favourite:[]},action)=>{

    switch(action.type){
        case ADDFAVPROD :
            return{
                ...state,
                favourite:[...state.favourite,action.payload]
            }
            default:
                return state;
        
    }

}