/***********************************************************************************************************************
 * Created by sunlit on 2018/3/27
 * Info: 处理前端路由，不同URL对应不同界面
 * UpdateTime：
 * UpdateReason：
 * * 每次重大修改请追加详细变更记录 *
 *
 **********************************************************************************************************************/

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch 
} from 'react-router-dom';
import containerIndex from '../containers/containerIndex';

class RouteSwitch extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={containerIndex} />   // 主界面呈现内容
                    {/* <Route exact path='/:menuTitle' component={} /> // 附属界面呈现的内容 */}
                </Switch>
            </div>
        )
    }
}

const AppRoutes=(
    <Router>
        <Route component={RouteSwitch}/>
    </Router>
);

export default AppRoutes;