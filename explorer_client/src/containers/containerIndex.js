/***********************************************************************************************************************
 * Created by sunlit on 2018/3/27
 * Info: 主界面容器文件，单独绑定一对reducer和action
 * UpdateTime：
 * UpdateReason：
 * * 每次重大修改请追加详细变更记录 *
 *
 **********************************************************************************************************************/
import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';
import CCompIndex from '../components/cComp/cCompIndex'
import * as ActionIndex from '../actions/actionIndex'

export default connect(
    (state)=>{
        return {
            ContainerIndex:state.reducerIndex
        };
    },
    (dispatch)=>{
        return bindActionCreators(ActionIndex,dispatch);
    }
)(CCompIndex)