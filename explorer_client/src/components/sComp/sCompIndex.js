/***********************************************************************************************************************
 * Created by sunlit on 2018/3/27
 * Info: index界面样式组件
 * UpdateTime：
 * UpdateReason：
 * * 每次重大修改请追加详细变更记录 *
 *
 **********************************************************************************************************************/
import PCompIndex from '../pComp/pCompIndex'
import React, {Component} from 'react';

import 'antd/dist/antd.css';

const styles={
    header:{
        backgroundColor:"#a1bf7c",
        color:"#4c632f",
    },
    tabs:{
    },
    mainBody:{
        height:"60%",
        marginTop:30,
        marginLeft:30,
        backgroundColor:"white",
        // textAlign:'center',
    },
    inlineBody:{
        marginTop:20,
        marginLeft:30,
        marginBottom:20,
        width:"80%",
    },
    bodyBottom:{
        height:200,
    }
}
class SCompIndex extends Component{
    constructor(props){
        super(props);
        this.state = {...props};
    }

    render(){
        const props={
            ...this.state,
            indexProps:{
                header:{
                    ...styles.header,
                },
                tabs:{
                    ...styles.tabs,
                    color:styles.header.color
                },
                content:{
                    ...styles.mainBody,
                },
                inlineContent:{
                    ...styles.inlineBody,
                },
            },
            
        };

        return <PCompIndex {...props} />;
    }
}

export default SCompIndex;