import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const workspaceReducer = createSlice({
    name: 'workspace',
    initialState: {},
    reducers: {
        setWorkspaceData(state,action){
            state[action.payload.name] = action.payload.value
            return state
        }
    }
})

export default workspaceReducer.reducer
export const {setWorkspaceData} = workspaceReducer.actions