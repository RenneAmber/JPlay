/***********************************************************************************************************************
 * Created by sunlit on 2018/3/30
 * Info: 通用组件，处理1. 拼接请求字符串，2. 记录日志, 3. fetch等事件
 * UpdateTime：
 * UpdateReason：
 * * 每次重大修改请追加详细变更记录 *
 *
 **********************************************************************************************************************/

import config from '../config/config';
import fetch from 'isomorphic-fetch';
import REQ_STATUS from '../utils/serverResponseStatus';

/**
 * 
 * @param {string} url 
 * @param {string} body 
 * 内部使用，拼接URL和body
 */
function combineURLBody(url,body){
    let postfix = [];   // 后缀
    if(body={}) return url;

    body.map(item=>{
        if(body.hasOwnProperty(item)){
            postfix.push(encodeURIComponent(item) + "=" + encodeURIComponent(body[item]));
        }
    })

    return url + "?" + postfix.join("&");
}

/**
 * 
 * @param {string} url 
 * @param {object} body 
 * @param {string} userNickName 
 * @param {function} callBack 
 * 记录网站行为日志
 */
function recordOperationLog(url, body, userNickName, callBack){
    // let existKey = Object.keys()
}

/**
 * 
 * @param {object} response 
 * 请求响应状态检验
 */
function checkFetchStatus(response){
    if(response.status !== void 0)
        return response.json();
    else
        return {"ERROR":"HTTP请求异常"};
}

/**
 * 
 * @param {string} url 
 * @param {number} logId 
 * @param {object} json 
 * @param {object} extra
 * @param {function} dispatch 
 */
function handleFetchResponse(url,logId,json, extra, dispatch){
    if(json.status !== void 0){
        // the response is success
        if(json.status === REQ_STATUS.SUCCESS){
            // 跳转界面
            if(extra.actionSuccess !== void 0 && extra.route !== void 0){
                dispatch(extra.actionSuccess(json.data, extra.route));
            }
            // 页面通知
            else if(extra.actionSuccess !== void 0){
                dispatch(extra.actionSuccess(json.data || "操作成功"))
            }
            // 仅作为展示界面
        }
        else{
            // 操作失败
        }
    }
}

export function fetchGet(url,body={},callBack, extra, dispatch, userNickName = ""){
    let reqHeader = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    let fetchParams = {
        method:'get',
        mode:'cors',
        timeout: 20*1000,
        headers : reqHeader,
    };

    let serverURL = combineURLBody(url, body);

        return fetch(serverURL, fetchParams).then(
            response=>checkFetchStatus(response)
        ).then(data=>{
                handleFetchResponse(url,1,data,extra,dispatch);
                callBack(data);
            }
    ).catch(err=>console.log(err.message));
}
