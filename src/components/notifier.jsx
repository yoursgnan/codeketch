import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { clearNotificiation } from "../reducers/notification_reducer"
const Notifier = (props) => {
    
    const notifierClass = {
        'error': 'notifier-red',
        'success': 'notifier-green',
        'warning': 'notifier-yellow',
        'normal': 'notifier-normal'
    }

    const notificationDispatch = useDispatch()
    const notificationState = useSelector(state=>state.notification)

    useEffect(()=>{
        const clearnotify = ()=>{
            notificationDispatch(clearNotificiation())
        }
        if(notificationState.show){ 
            setTimeout(clearnotify,5000)
        }

        return ()=>{clearTimeout(clearnotify)} 
    },[notificationState.show,notificationDispatch])

    
    return (
        <div className={`notifier ${notifierClass[notificationState.type]}`}>
            {notificationState.message}
        </div>
    )
}

export default Notifier