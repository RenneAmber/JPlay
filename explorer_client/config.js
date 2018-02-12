require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch('localhost:3000/file_upload', {
    method: "post",
    body:new FormData(document.querySelector('form'))
    }).then(res=>'localhost:3001/file_upload');