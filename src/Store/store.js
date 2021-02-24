import { createStore } from 'redux';
import appReducer from "../Reducer/appReducer";


const store = createStore(appReducer);

export default store;