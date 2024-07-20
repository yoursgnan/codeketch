
import { createSlice } from "@reduxjs/toolkit"

const notificationReducer = createSlice({
    name: 'notification',
    initialState: {
        show: false,
        message: null,
        type: null,
    },
    reducers: {
        setNotificationMessage(state,action){
            state.show = true
            state.message = action.payload.message
            state.type = action.payload.type || 'normal'
        },
        clearNotificiation(state,action){
            state.show = false
            state.message = null
            state.type = null
        }
    }

})


export const {setNotificationMessage,clearNotificiation} = notificationReducer.actions
export default notificationReducer.reducer