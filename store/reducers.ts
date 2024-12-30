import { combineReducers } from '@reduxjs/toolkit';
import { localStatesSlice } from '@/features/localState/local'

const rootReducer = combineReducers({
    localStates: localStatesSlice.reducer,
});

export default rootReducer;