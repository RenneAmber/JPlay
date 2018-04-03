/**
 * Created by sunlit on 2018/3/30
 * Info: 主页面路由
 */
let express = require('express');
let router = express.Router();
let logic = require("../logic/logic");
let iRet = require('../logic/logicCommon').iRet,
    path = require("path"),
    fs = require("fs"),
    CODE = require("../logic/returnObj").CODE,
    MESSAGE = require("../logic/returnObj").MESSAGE,
    common = require('../logic/logicCommon')
    ;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

    //设置跨域访问
router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();

});
// 处理各种action
router.get('/:action',(req,res)=>{

    let action = req.params.action,
        reqHeaders = req.headers,
        reqQuery = req.query
        ;

    console.log('\n接口名称为：',action,'请求体：',reqQuery,'请求头:',reqHeaders);
    switch(action){
        case 'showAllFiles':
            // TODO: 检查参数
            // 执行显示所有文件逻辑
            var filePath = path.resolve(__dirname, '..') + "/public/images/default";
            fs.readdir( filePath, (err, files)=>{
                if( err ){
                    console.log( "Show files error:",err);
                    retf(iRet(CODE.ERROR_PARAM,err.message));
                }else{
                    let data = 
                    {
                        filePath:filePath,
                        files:files
                    }
                    console.log("[routes/index showAllFiles() : res is ",data);   
                    retf(iRet(CODE.SUCCESS, MESSAGE.SUCCESS.SHOW_ALL_FILES, data));
                }   
            });
            
            break;
        default:
            res.writeHead(404,{'Cointent-Type':'text/plain'});
            res.write("Operation Violation");
            res.end();
            break;
    }

    function retf(ret){
        console.log("响应体为：",common.safeJSONStringify(ret),'\n');
     
        if(typeof ret.status === 'undefined' && typeof ret.message === 'undefined')
            res.end(ret);
        else
            res.json(ret);
     }
});

// file upload template
router.post('/upload/:resourceName',(req,res)=>{
    let theFile = req.files[0];
    var des_file = path.resolve(__dirname, '..') + "public/images/default/" + theFile.originalname;
    fs.readFile( theFile.path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log( response );
            // res.send("Success!")
            // res.sendFile( __dirname + "/" + "index.html" );
        });
    });
});

module.exports = router;
