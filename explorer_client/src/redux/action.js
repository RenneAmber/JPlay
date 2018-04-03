
import configures from "../config";
import fetch from "isomorphic-fetch"

let server_port = configures.SERVER_PORT,
    ip=configures.IP;

export const actionTypes = {
    FILE_UPLOAD:"FILE_UPLOAD",
    FILE_SHOW:"FILE_SHOW",
    DICTIONARY_SHOW:"DICTIONARY_SHOW",
    DICTIONARY_OPEN:"DICTIONARY_OPEN",
};



export const actions = {
    file_upload:function (info,file) {
        let server_addr = ip+":"+server_port;
        let url = server_addr+"/"+info.text;

        var fileName = file.value;
        var fileExt = fileName.substring(fileName.lastIndexOf(".")+1)
            .toLowerCase();
        let originalName=fileName.substring(fileName.lastIndexOf("/"),fileName.lastIndexOf("."));
        let formData = new FormData();
        formData.append("originalName",originalName);
        formData.append("path",fileName);
        formData.append("ext",fileExt);

        console.log("extension="+fileExt);
        // 传入后端
        fetch(url, {
            method: "post",
            mode: "cors",
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:formData,
            // body:new FormData(document.querySelector('form'))
        }).then(
            res=>res.json()
        ).then(json=>console.log(json)
        ).catch(e=>console.log(e));
        return{
            type:actionTypes.FILE_UPLOAD,
            data:url
        }
    },
    file_show:function(url){
        return {type:actionTypes.FILE_SHOW,data:url}
    }
};