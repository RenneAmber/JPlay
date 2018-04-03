/***********************************************************************************************************************
 * Created by sunlit on 2018/3/27
 * Info: 服务器配置文件
 * UpdateTime：
 * UpdateReason：
 * * 每次重大修改请追加详细变更记录 *
 *
 **********************************************************************************************************************/

// SERVER_ADDR+SERVER_API 组成请求体
// SERVER_STORAGE_PATH+FILE_TYPE 组成文件存放目录
let SERVER_URL = {
    SERVER_HOST:'127.0.0.1',
    SERVER_PORT:'18118',
}

export default {
    
    SERVER_ADDR:`http://${SERVER_URL.SERVER_HOST}:${SERVER_URL.SERVER_PORT}/`,    //模板字符串

    SERVER_STORAGE_PATH:'../../public/',
    FILE_TYPE:{
        TXT:'txt',
        IMG:'img',
    },
    SERVER_API:{
        LOGIN_AUTH:'loginAuth',
        INDEX_SHOW_ALL_FILES:'showAllFiles',
    }

};