import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state/settings-slice"
export default configureStore({
    reducer:{
        settings:settingsReducer,
    }
})