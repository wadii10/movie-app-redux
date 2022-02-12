import { DELETE } from "./actionTypes"

export const deleteMovie = (id) => {
    return {
        type : DELETE,
        payload : id
    }
}