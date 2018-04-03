/***********************************************************************************************************************
 * Created by sunlit on 2018/3/27
 * Info: 配置store，绑定中间件
 * UpdateTime：
 * UpdateReason：
 * * 每次重大修改请追加详细变更记录 *
 *
 **********************************************************************************************************************/
import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

// 绑定createStore拥有中间件，改造store.dispatch能够接受函数，打印日志
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(
    thunk,logger
))(createStore);

export default function configureStore(initialState){
    const store = createStoreWithMiddleware(reducers,initialState);

    //热替换选项
	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = reducers;
			store.replaceReducer(nextReducer);
		})
	}
	return store;
}