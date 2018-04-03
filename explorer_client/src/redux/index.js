// import {reducer as front}
import file from './reducer';
import {createStore,bindActionCreators} from 'redux';
import {connect, Provider} from 'react-redux';
import {actions} from './action'
import App from '../App';


let store = createStore(file);
console.log(222);
connect(
    {
        state: file,
        dispatch:bindActionCreators(actions)
    }
)(App);

let rootElement=document.getElementById('root');
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);
export default store;
