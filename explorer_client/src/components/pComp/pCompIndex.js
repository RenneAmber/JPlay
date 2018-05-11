/***********************************************************************************************************************
 * Created by sunlit on 2018/3/27
 * Info: index界面展示组件
 * UpdateTime：
 * UpdateReason：
 * * 每次重大修改请追加详细变更记录 *
 *
 **********************************************************************************************************************/
import React,{Component} from 'react';
import {
    Table,
    Notification, 
    Layout, 
    Menu, 
    Breadcrumb, 
    Tabs,
    Upload,
    Button,
    Icon,
    Input,
    Popover,
    Tree,
    } from 'antd';

import config from '../../config/config';

const {Header, Content, Footer} = Layout;
const TabPane = Tabs.TabPane;
const TreeNode = Tree.TreeNode;

export default (props) =>{
    const {
        indexInfo,
        indexProps,
        indexEvent,
    } = props;

    const fileList = [{
        uid: -1,
        name: 'dva1.jpg',
        status: 'done',
        url: `D:\\js_learning\\explorer_server/public/images/default/dva1.jpg`,
        // thumbUrl: '../upload/dva1.jpg',
      }];
    const uploadProps = {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        defaultFileList: [...fileList || []],
        className: 'upload-list-inline',
        multiple:true,
    };

    const renderDir={
        
    }
    
    return(
        <Layout className = "layout">
            <Header style = {indexProps.header}>
                <div className="logo"/>
                <Tabs defaultActiveKey = "1"  style = {indexProps.tabs}
                // onChange = {}
                >
                    <TabPane tab = "Home" key = "1"> Welcome to Sunlit Zone</TabPane>
                    <TabPane tab = "About" key = "2"> A software engineer </TabPane>
                    <TabPane tab = "Blogs" key = "3"> You can browser blogs here </TabPane>
                    <TabPane tab = "Albums" key = "4"> Then you will see some photos </TabPane>
                </Tabs>
            </Header>
            <Content style={indexProps.content}>
                <div style={indexProps.inlineContent}>
                    <h2>
                        静态资源管理器
                    </h2>
                    {/* <Upload {...uploadProps}>
                        <Button>
                            <Icon type="upload"/> 上传
                        </Button>
                    </Upload> */}
                
                    {/* <img src={indexInfo.fileList?indexInfo.fileList[0].url:null}/> */}
                    <div>
                        {/* 根目录 */}
                        <Tree loadData={this.onLoadData}>
                            {this.renderDir(indexInfo.treeData)}
                        </Tree>
                        <Button icon='folder'>
                            public
                        </Button>
                        {/* <Popover
                            title="文本内容："
                            content={indexInfo.fileList.content}
                            trigger="hover"
                            placement="right"
                            >
                            <h5>
                                0.txt
                            </h5>
                        </Popover> */}
                    </div>
                </div>
            </Content>
        </Layout>

    );
}