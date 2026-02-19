import { createSlice } from "@reduxjs/toolkit";
import { getLocalItem, setLocalItem } from "../utils/storageThem";

const LOCAL_THEME_KEY = "theme";
const initialState = {
    storedTheme: getLocalItem(LOCAL_THEME_KEY)
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setStoredTheme: (state, action) => {
            state.storedTheme = action.payload;
            setLocalItem(LOCAL_THEME_KEY, action.payload);
        }
    }
})

export const {setStoredTheme} = themeSlice.actions;
export default themeSlice.reducer;