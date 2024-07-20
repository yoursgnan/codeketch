import { createSlice } from "@reduxjs/toolkit";
import { getValue, saveKey, USER_IDENTIFIER_KEY } from "../utils/helper_functions";

const userToken = createSlice({
    name: 'usertoken',
    initialState: getValue(USER_IDENTIFIER_KEY),
    reducers: {
        setToken(state,action){
            saveKey(USER_IDENTIFIER_KEY,action.payload)
            state = action.payload
            return state
        }
    }
})

export default userToken.reducer
export const {setToken} = userToken.actions