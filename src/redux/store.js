import {configureStore} from "@reduxjs/toolkit";
import themeSlice from "../service/reducers/themReducer";
const store = configureStore({
    reducer:{
        theme: themeSlice,
    }
})
export default store;