import { combineReducers } from 'redux';
import badgeListSliceReducer from './slices/badgeListSlice';

const rootReducer = combineReducers({
    batchReducer: badgeListSliceReducer,
});

export default rootReducer;