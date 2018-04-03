/**
 * Created by sunlit on 2018/3/30
 * Info: 主页面逻辑
 */
let path = require('path'),
    fs = require('fs'),
    common = require('./logicCommon')
    ;

// fs.createReadStream( 'dir' );



/**
 * 展示所有文件夹下的文件
 * @returns 文件数组
 * 已废弃，fs.readdir利用异步读取数据
 */
// function showAllFiles()
// {
//     var filePath = path.resolve(__dirname, '..') + "/public/images/default";
//     let res = {};
//     fs.readdir( filePath, (err, files)=>{
//         if( err ){
//             console.log( "Show files error:",err);
//             res = {error:err};
//         }else{
//             res = 
//             {
//                 filePath:filePath,
//                 files:files
//             }
//             console.log("[logic/logic.js showAllFiles() : res is ",res);   
//         }   
//     });
//     return res;
// }

// exports.showAllFiles = showAllFiles;