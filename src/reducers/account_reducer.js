import {createSlice} from '@reduxjs/toolkit'

const userReducer = createSlice({
    name: 'user',
    initialState: {},
    reducers:{
        set(state,action){
            state[action.payload.name] = action.payload.value
            return state
        }
    }
})

export const { set } = userReducer.actions
export default userReducer.reducer