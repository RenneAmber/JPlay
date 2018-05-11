/***********************************************************************************************************************
 * Created by sunlit on 2018/3/27
 * Info: 主界面reducer
 * UpdateTime：
 * UpdateReason：
 * * 每次重大修改请追加详细变更记录 *
 *
 **********************************************************************************************************************/
import ACTION_TYPE from '../utils/constantActionType';

 const initialState={
     Files:[],  // array of {dir:'xx',fileList:[]}
 };

 export function reducerIndex(state = initialState, action){
     switch(action.type){
        case ACTION_TYPE.INDEX_SHOW_ALL_FILES:
            console.log("SHOW FILES DATA",action.data);
            
            // let fileArray = [];
            // fileArray = action.data;
            // action.data.files.map((item,index)=>{
            //     fileArray.push({
            //         uid: index*(-1),
            //         name : item,
            //         status : "done",
            //         url : action.data.filePath+'/'+item,
            //     })
            // })
            return{
                ...state,
                FileList:{
                    content:action.data
                }
            };

            case ACTION_TYPE.INDEX_UNFOLD_DIR:
                console.log(action.data);
                this.state.Files.push(action.data);
                return {
                    ...state,
                }
        default:
            return {
                ...state,
            }
     }
 }