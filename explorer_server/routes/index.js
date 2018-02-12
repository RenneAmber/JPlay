var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// file upload
router.post('/file_upload',(req,res)=>{
    var des_file = __dirname + "/tmp/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
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
            res.sendFile( __dirname + "/" + "index.html" );
        });
    });
});

module.exports = router;
