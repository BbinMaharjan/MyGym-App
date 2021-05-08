import {combineReducers} from 'redux';
import configReducer from './config';
import membersReducer from './members';

const reducers = combineReducers({
  membersState: membersReducer,
  configState: configReducer,
});

export default reducers;
