import {createSlice} from '@reduxjs/toolkit'

const loginReducer = createSlice({
    name: 'login_data',
    initialState: {},
    reducers:{
        set(state,action){
            state[action.payload.name] = action.payload.value
            return state
        }
        
    }
})

export const { set } = loginReducer.actions
export default loginReducer.reducer