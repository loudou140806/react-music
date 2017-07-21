import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './route';
import store from './store'; 
import './style/index.less';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
