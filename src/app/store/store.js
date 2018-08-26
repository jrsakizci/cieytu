import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer } from 'react-router-redux';
import rootSaga from '../sagas/api';

import homeReducer from '@Organisms/home/reducer/';
import questionReducer from '@Organisms/question/reducer/';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({ homeReducer, questionReducer, routing: routerReducer, });
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware),
   
);
sagaMiddleware.run(rootSaga);

export default store;