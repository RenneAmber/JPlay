/***********************************************************************************************************************
 * Created by sunlit on 2018/3/27
 * Info: index界面容器组件
 * UpdateTime：
 * UpdateReason：
 * * 每次重大修改请追加详细变更记录 *
 *
 **********************************************************************************************************************/
import SCompIndex from '../sComp/sCompIndex';
import React,{Component} from 'react';
import config from '../../config/config';
import PropTypes from 'prop-types';

class CCompIndex extends Component{
    constructor(props){
        super(props);
        this.state = {...props};
        this.state.actionIndexShowAllFiles();
    }

    render(){
        const sCompIndexProps={
            indexInfo:{
                fileList:this.state.ContainerIndex.FileList,
            },
            indexProps:{},
            indexEvents:{

            }
        };
        return <SCompIndex {...sCompIndexProps}/>;
    }
    
}

CCompIndex.propTypes = {
    ContainerIndex : PropTypes.object.isRequired,
    actionIndexShowAllFiles:PropTypes.func.isRequired,
};
export default CCompIndex;