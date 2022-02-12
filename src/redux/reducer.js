import { data } from "../data";
import { DELETE } from "./actionTypes";

export const init = {
    movieData : data
}

export const reducer = (state = init , {type, payload}) => {
    switch (type) {
        case DELETE : return {
            ...state ,movieData : state.movieData.filter( el => el.id !== payload )
        };
            
            
    
        default:
            return state;
    }
}