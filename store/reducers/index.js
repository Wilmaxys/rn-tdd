import { combineReducers } from 'redux';
import persisted from './persisted-reducer';
import temp from './temp-reducer';

export default combineReducers({
  temp,
  persisted,
});
