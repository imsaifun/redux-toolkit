
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1,
    pageSize: 12,
    types: [],
    chosenType: '',
    subtypes: [],
    chosenSubtype: '',
    name: '',
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changePerPageValue(state, action) {
            state.pageSize = action.payload;
            state.currentPage = 1;
        },
        changeCurrentPageValue(state, action) {
            state.currentPage = action.payload;
        },
        getTypes(state, action) {
            state.types = action.payload.data;
        },
        getSubtypes(state, action) {
            state.subtypes = action.payload.data;
        },
        getChosenType(state, action) {
            state.chosenType = action.payload;
            state.currentPage = 1;
        },
        getChosenSubtype(state, action) {
            state.chosenSubtype = action.payload;
            state.currentPage = 1;
        },
        getChosenName(state, aciton) {
            state.name = aciton.payload;
        },
    },
});

export default filterSlice.reducer;
export const { changePerPageValue, changeCurrentPageValue, getTypes, getSubtypes, getChosenType, getChosenSubtype, getChosenName } = filterSlice.actions;
