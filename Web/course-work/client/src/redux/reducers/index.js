import { combineReducers } from 'redux';

import teachers from './teachers';
import allCourse from './allCourse';
import filters from './filters';

const rootReducer = combineReducers({
    teachers,
    allCourse,
    filters
});

export default rootReducer;
