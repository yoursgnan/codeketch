import { useDispatch, useSelector } from "react-redux"
import { logout } from "../reducers/app_user_reducer"
import { action_logout } from "../utils/helper_functions"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Settings = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state=>state.appuser)
    const logOut = () => {
        dispatch(logout())
        action_logout()
        navigate('/')
    }
    useEffect(()=>{
        console.log('user in settnig page',user)
    },[user])
    return (
        <div>
            <h2>Settings</h2>
            <div className="setting-profile-box">
                <h4>{user?.name}</h4>
            </div>
            <button onClick={logOut} className="button btn-light">Logout</button>
        </div>
        
    )
}

export default Settings