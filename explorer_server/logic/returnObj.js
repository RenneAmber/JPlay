exports.CODE = {
    SUCCESS: 100,						//接口请求成功
	ERROR_API: 101,						//不存在该API
	ERROR_MIME_TYPE: 102,				//请求体的MIME-TYPE错误
	ERROR_EMPTY_BODY: 103,				//空的请求体
	ERROR_REQ_TYPE: 104,				//请求方式错误
	ERROR_PARAM: 105,					//请求参数异常
	ERROR_DATA_DECRYPT: 106,			//数据解密错误
	ERROR_DATA_RESOLVE: 107,			//数据解析错误
	ERROR_REQ: 108,						//接口请求失败
	ERROR_INTERNAL: 109,				//服务器内部错误
	ERROR_EMPTY_SERVER: 110,			//空的服务器请求地址
}

exports.MESSAGE = {
    SUCCESS:{
        SHOW_ALL_FILES:"展示文件成功",
    },
    ERROR:{
        ERROR_API: '请核实请求接口名称',
		ERROR_MIME_TYPE: '请修改请求体MIME类型为 application/json',
		ERROR_MIME_TYPE_FORM_DATA: '请修改请求体MIME类型为 multipart/form-data',
		ERROR_MIME_TYPE_: '请修改请求体MIME类型为 application/x-www-form-urlencoded',
		ERROR_EMPTY_BODY: '请求体不能为空',
		ERROR_REQ_TYPE: '请求方式错误或API不存在',
		ERROR_PARAM: '参数异常',
		ERROR_PARAM_FORMAT: '请校验参数的数据类型',
		ERROR_DATA_DECRYPT: '数据解密错误',
		ERROR_DATA_RESOLVE: '数据解析错误',
		ERROR_REQ: '接口请求失败',
		ERROR_INTERNAL: '服务器内部错误',
    }
}