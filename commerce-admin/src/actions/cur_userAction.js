import { CURRENT_USER } from "./types"


export const currentProfile = (userData) =>(dispatch)=> {
 
    dispatch({
        type: CURRENT_USER,
        payload: userData
    });
}