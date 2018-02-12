import {combineReducers} from 'redux'

export const actionTypes = {
    FILE_UPLOAD:"FILE_UPLOAD"
};

const initialState ={
    url:"/"
};

export const actions = {
    file_upload:function (url) {
        return{
            type:actionTypes.FILE_UPLOAD,
            data:url
        }
    }
};

export function reducer(state=initialState,action) {
    switch (action.type){
        case actionTypes.FILE_UPLOAD:
            return {
                ...state,url:action.data
            };
        default:
            return state
    }
}

const file = combineReducers({
    adminGlobalState:reducer,
});

export default file