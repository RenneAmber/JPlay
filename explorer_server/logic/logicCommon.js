/**
 * Created by sunlit on 2018/3/30
 * Info: 可应用于所有逻辑和路由的通用逻辑
 */

/**
 * 
 * @param {number} status 
 * @param {string} message 
 * @param {object} data 
 */
function iRet(status, message, data = null){
    let RET = {
        status : status,
        message : message,
        data : data,
    };

    if(data === null){
        delete RET.data;
    }
    console.log("[logic/logicCommon iRet :",RET);
    return RET;
}

/**
 * 
 * @param {object} jsonObj 
 * @returns {string}
 * 安全转化JSON对象为字符串
 */
function safeJSONStringify(jsonObj){
    let str = '';
    try{
        str = JSON.stringify(str);
    }catch(e){
        str = require('json-stringify-safe')(jsonObj);
    }
    return str;
}

exports.iRet = iRet;
exports.safeJSONStringify = safeJSONStringify;