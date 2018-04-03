// 入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import './index.css';
/***********************************************************************************************************************
 * Created by sunlit on 2018/3/27
 * Info: 入口文件，包装redux并设定路由
 * UpdateTime：
 * UpdateReason：
 * * 每次重大修改请追加详细变更记录 *
 *
 **********************************************************************************************************************/
import {App} from './App';
import AppRoutes from './routes/AppRoutes';
import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// 阻止事件冒泡：在一个对象上触发某类事件（比如单击onclick事件），如果此对象定义了此事件的处理程序，那么此事件就会调用这个处理程序，
//             如果没有定义此事件处理程序或者事件返回true，那么这个事件会向这个对象的父级对象传播，从里到外，直至它被处理（父级对象所有同类事件都将被激活），或者它到达了对象层次的最顶层，即document对象
injectTapEventPlugin();
const store = configureStore( window.REDUX_STATE);

ReactDOM.render(
    (
       <Provider store={store}>
           {AppRoutes}
        </Provider>
    ),
    document.getElementById('root')
);
registerServiceWorker();
