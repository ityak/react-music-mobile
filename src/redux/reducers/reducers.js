import { combineReducers } from 'redux';
import { myReducer } from '../../tools/toolOfRedux';

import music from './reducerOfMusic';
import test from './reducerOfTest';

const reducers = {
  music: myReducer(music),
  test:  myReducer(test),
};

export default combineReducers({ ...reducers });
