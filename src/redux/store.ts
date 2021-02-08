import {createStore} from 'redux'
import testReducer from "./tests/reducer";

const store = createStore(testReducer)

export default store;