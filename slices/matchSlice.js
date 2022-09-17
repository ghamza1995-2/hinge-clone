import { createSlice } from "@reduxjs/toolkit";
import { prospects } from "../data";

const initialState = {
    prospects: prospects,
    currentProspect: prospects[0],
    matches: [],
};

export const matchSlice = createSlice({
    name: "match",
    initialState,
    reducers: {
        setProspects: (state, action) => {
            state.prospects = action.payload;
        },
        setCurrentProspect: (state, action) => {
            state.currentProspect = action.payload;
        },
        addMatch: (state, action) => {
            state.matches = [...state.matches, action.payload];
        },
        clearMatches: (state, action) => {
            state.matches = [];
        },
    },
});

export const { setProspects, setCurrentProspect, addMatch, clearMatches } = matchSlice.actions;

//Selectors
export const selectProspects = (state) => state.match.prospects;
export const selectCurrentProspect = (state) => state.match.currentProspect;
export const selectMatches = (state) => state.match.matches;

export default matchSlice.reducer;
