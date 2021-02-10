import {createStore, applyMiddleware} from 'redux'
import rootReducer, {rootSaga} from "./index";
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;