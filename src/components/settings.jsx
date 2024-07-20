import { useDispatch } from "react-redux"
import { logout } from "../reducers/app_user_reducer"
import { action_logout } from "../utils/helper_functions"
import { useNavigate } from "react-router-dom"

const Settings = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = () => {
        dispatch(logout())
        action_logout()
        navigate('/')
    }
    return (
        <div className="canvas">
            <h2>Settings</h2>
            <button onClick={logOut} className="button btn-light">Logout</button>
        </div>
        
    )
}

export default Settings