import { configureStore } from "@reduxjs/toolkit";
import matchReducer from "../slices/matchSlice";

export const store = configureStore({
    reducer: {
        match: matchReducer,
    },
});
