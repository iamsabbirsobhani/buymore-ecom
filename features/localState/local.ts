import { createSlice } from '@reduxjs/toolkit';

interface localState {
    count: number;
}

const initialState: localState = {
    count: 50,
};

export const localStatesSlice = createSlice({
    name: 'localStates',
    initialState,
    reducers: {
        countUp: (state: localState) => {
            state.count++;
        },
    },
});

export const { countUp } = localStatesSlice.actions;

export default localStatesSlice.reducer;