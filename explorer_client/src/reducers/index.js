/***********************************************************************************************************************
 * Created by sunlit on 2018/3/27
 * Info: 打包reducer，供store使用
 * UpdateTime：
 * UpdateReason：
 * * 每次重大修改请追加详细变更记录 *
 *
 **********************************************************************************************************************/
import {reducerIndex} from './reducerIndex';
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    reducerIndex,
})

export default rootReducers;