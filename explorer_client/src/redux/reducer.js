
import {actionTypes} from "./action";
const initialState ={
    url:"/"
};


export function reducer(state=initialState,action) {
    switch (action.type){
        case actionTypes.FILE_UPLOAD:
            return {
                ...state,url:action.data
            };
        case actionTypes.FILE_SHOW:
            return {
                ...state,url:action.data
            };
        default:
            return state
    }
}

export default reducer