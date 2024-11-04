import {createSlice} from "@reduxjs/toolkit"

const appUserReducer = createSlice({
    name: 'appuser',
    initialState: null,
    reducers: {
        login(state,action){
            console.log('setting the  user',action.payload)
            return action.payload 
        },
        logout(state,action){
            return null
        }
    }
}) 

export const {login,logout} = appUserReducer.actions
export default appUserReducer.reducer