import {createSlice} from "@reduxjs/toolkit"
import { redirect, useNavigate } from "react-router-dom"

const appUserReducer = createSlice({
    name: 'appuser',
    initialState: null,
    reducers: {
        async login(state,action){
            console.log('user',action.payload)
            return action.payload 
        },
        logout(state,action){
            return null
        }
    }
}) 

export const {login,logout} = appUserReducer.actions
export default appUserReducer.reducer