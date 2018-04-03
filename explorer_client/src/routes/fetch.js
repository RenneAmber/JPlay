import config from '../config/config';
let fetch = require('isomorphic-fetch');

export function fetchPost(action) {
    let fetchParams = {
        method:'post',
        mode:'cors',
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    let serverURL = config.SERVER_ADDR;
    return fetch(serverURL,fetchParams).then(
        response=>response.json()
    ).then(data=>console.log(data)
    ).catch(err=>console.log(err));

}


