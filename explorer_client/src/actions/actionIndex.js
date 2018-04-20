/***********************************************************************************************************************
 * Created by sunlit on 2018/3/27
 * Info: 主界面的action
 * UpdateTime：
 * UpdateReason：
 * * 每次重大修改请追加详细变更记录 *
 *
 **********************************************************************************************************************/
import ACTION_TYPE from '../utils/constantActionType';
import * as common from '../utils/common';
import config from '../config/config';

export function actionIndexShowAllFiles(){
    let extra={};

    let url = `${config.SERVER_ADDR}${config.SERVER_API.INDEX_SHOW_ALL_FILES}`;
    return dispatch=>{
        common.fetchGet(url,{},(json)=>{
            dispatch({
                type:ACTION_TYPE.INDEX_SHOW_ALL_FILES,
                data: json.data,
            })
        },extra,dispatch)   // no nickname required
      
    }
}