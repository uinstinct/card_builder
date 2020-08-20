import { combineReducers } from 'redux';

import getAll from './getAll';

const rootReducer = combineReducers({ cards : getAll }); // getAll is the name of the reducer and we are changing it's name to num

export default rootReducer;