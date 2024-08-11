import { createSlice } from "@reduxjs/toolkit";

const workspaces = createSlice({
    name: 'workspaces',
    initialState:[],
    reducers:{
        addWorkspace(state,action){
            state.push(action.payload)
            return state
        },
        setWorkspaces(state,action){
            state = action.payload
            return state
        } 
    }
})

export default workspaces.reducer
export const {addWorkspace,setWorkspaces} = workspaces.actions