import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './app/store/store';
import Routes from './router';

const App = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));