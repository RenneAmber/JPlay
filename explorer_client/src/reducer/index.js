// import {reducer as front}
import file from './file';
import {combineReducers} from 'redux';

const initialState = {
    isFetching: true,
    msg: {
        type: 1,//0失败 1成功
        content: ''
    },
    userInfo: {}
};

export const actionsTypes={
    FETCH_START: "FETCH_START",
    FETCH_END: "FETCH_END",
    FILE_UPLOAD:"FILE_UPLOAD",
    FILES_SHOW: "FILES_SHOW",
    // SET_MESSAGE: "SET_MESSAGE",
};

export const actions={
    file_upload:function(filename){
        return {
            type: actionsTypes.FILE_UPLOAD,
            filename
        }
    },
    files_show:function(files){
        return {
            type:actionsTypes.FILES_SHOW,
            files
        }
    }
};

export function reducer(state=initialState, action){
    switch(action.type){
        case actionsTypes.FETCH_START:
            return {
                ...state, isFetching: true
            };
        case actionsTypes.FETCH_END:
            return {
                ...state, isFetching: false
            };
        default:
            return state;
    }

}
export default combineReducers({
    // front,
    globalState: reducer,
    file
})

